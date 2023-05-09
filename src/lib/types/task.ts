export type Status = 'new' | 'progress' | 'completed' | 'reviewed';

export type Task = {
	id: string;
	username: string | null;
	color: string;
	description: string;
	status: Status;
	created: string;
	updated: string;
};
