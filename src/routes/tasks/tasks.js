import { writable, get } from 'svelte/store';
import { tokenStore } from '$lib/auth/user';

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

	/** @type {(taskId: string, newStatus: Status | null) => Promise<void>} */
	const updateTask = async (taskId, newStatus) => {
		update((tasks) =>
			tasks.map((task) => {
				if (taskId == task.id) {
					task.status = newStatus ?? task.status;
					task.updated = String(Date.now());
				}
				return task;
			})
		);
	};

	return {
		subscribe,
		getTasks,
		updateTask
	};
};

export const tasksStore = createTasksStore();
