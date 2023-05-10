import { writable, get } from 'svelte/store';
import { tokenStore, userStore } from '$lib/auth/user';

/** @typedef { import("$lib/types/task").Status } Status */
/** @typedef { import("$lib/types/task").Task } Task */

const createTasksStore = () => {
	/** @type {import("svelte/store").Writable<Task[]>} */
	const { subscribe, set, update } = writable([]);

	const getTasks = async () => {
		const { tasks } = await (
			await fetch('/api/tasks', { headers: { Authorization: `Bearer ${get(tokenStore)}` } })
		).json();

		set(tasks);
	};

	const createTask = async () => {
		const user = get(userStore);
		if (!user) return;

		await fetch('/api/tasks', {
			method: 'POST',
			body: JSON.stringify({ username: user.id, color: user.color }),
			headers: { Authorization: `Bearer ${get(tokenStore)}` }
		});

		await getTasks();
	};

	/** @type {(taskId: string, newStatus: Status | null) => Promise<void>} */
	const updateTask = async (taskId, newStatus) => {
		if (!newStatus) return;

		// Naive client update
		update((tasks) =>
			tasks.map((task) => {
				if (taskId == task.id) {
					task.status = newStatus;
					task.updated = String(Date.now());
				}
				return task;
			})
		);

		await fetch('/api/tasks', {
			method: 'PATCH',
			body: JSON.stringify({ id: taskId, status: newStatus }),
			headers: { Authorization: `Bearer ${get(tokenStore)}` }
		});

		await getTasks();
	};

	/** @type {(taskId: string) => Promise<void>} */
	const deleteTask = async (taskId) => {
		// Naive client update
		update((tasks) => tasks.filter((task) => task.id !== taskId));

		await fetch('/api/tasks', {
			method: 'DELETE',
			body: JSON.stringify({ id: taskId }),
			headers: { Authorization: `Bearer ${get(tokenStore)}` }
		});

		await getTasks();
	};

	return {
		subscribe,
		createTask,
		getTasks,
		updateTask,
		deleteTask
	};
};

export const tasksStore = createTasksStore();
