class LoginPage {
	get = {
		usernameInput: () => cy.get('[name=username]'),
		passwordInput: () => cy.get('[type=password]'),
		submitButton: () => cy.get('[type=submit]'),
		forgotPasswordLink: () => cy.contains('Forgot your password?'),
	};

	// * Methods

	async enterUsername(text: string) {
		this.get.usernameInput().type(text);
	}
	async enterPassword(text: string) {
		this.get.passwordInput().type(text);
	}
	async submitLogin() {
		this.get.submitButton().click();
	}
}

export const loginPage = new LoginPage();
