class LoginPage {
	usernameInput: () => Cypress.Chainable<JQuery<HTMLElement>>;
	passwordInput: () => Cypress.Chainable<JQuery<HTMLElement>>;
	submitButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
	forgotPasswordLink: () => Cypress.Chainable<undefined>;

	constructor() {
		this.usernameInput = () => cy.get('[name=username]');
		this.passwordInput = () => cy.get('[type=password]');
		this.submitButton = () => cy.get('[type=submit]');
		this.forgotPasswordLink = () => cy.contains('Forgot your password?');
	}

	// * Methods
	async enterUsername(text: string) {
		this.usernameInput().type(text);
	}
	async enterPassword(text: string) {
		this.passwordInput().type(text);
	}
	async submitLogin() {
		this.submitButton().click();
	}
}

export const loginPage = new LoginPage();
