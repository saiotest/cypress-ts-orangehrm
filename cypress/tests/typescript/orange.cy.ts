import { loginPage } from '@pages/LoginPage';

describe('Testing Orange', () => {
	it('Login', () => {
		cy.session('login', () => {
			//* POM
			cy.visit('/');
			//todo: Enter Username
			loginPage.enterUsername('Admin');
			loginPage.enterPassword('admin123');
			loginPage.submitLogin();

			cy.url().should('contain', 'dashboard/index');
			//todo: Enter Password
			//todo: Submit to Login.
			//todo: validate we are logged in.
		});
		cy.log('Working on');
	});
});
