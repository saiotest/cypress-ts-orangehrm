import { mount } from 'cypress/react';

declare global {
	namespace Cypress {
		type inputValue = string | number | string[];

		interface Chainable {
			mount: typeof mount;

			getInputValue(locator: Cypress.Chainable<JQuery<HTMLElement>>): Cypress.Chainable<string | number | string[] | undefined>;

			login(username: string, password: string): void;

			loginSuccessful(): void;
		}
	}
}
