/// <reference types="cypress" />

import { loginPage } from '@pages/LoginPage';

// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a parent command --
Cypress.Commands.add('getInputValue', (locator: Cypress.Chainable<JQuery<HTMLElement>>) => {
	return locator.invoke('val').then($val => {
		if (!$val) throw new Error('Value is undefined');
		return $val;
	});
});

Cypress.Commands.add('login', (username: string, password: string) => {
	cy.session('login', () => {
		cy.visit('/');
		loginPage.enterUsername(username);
		loginPage.enterPassword(password);
		loginPage.submitLogin();
		cy.url().should('contain', 'dashboard/index');
	});
});
Cypress.Commands.add('loginSuccessful', () => {
	cy.login('Admin', 'admin123');
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
