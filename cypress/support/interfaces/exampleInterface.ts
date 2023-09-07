export interface LoginModule {
	usernameInput: string;
	passwordInput: string;
	submitButton: boolean;
	forgotPasswordLink: number[];
}

export interface CardResponse {
	id: string;
	badges: Badges;
}

export interface Badges {
	attachmentsByType: AttachmentsByType;
}

export interface AttachmentsByType {
	trello: Trello;
}

export interface Trello {
	board: number;
	card: number;
}
