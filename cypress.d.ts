import { mount } from 'cypress/react';

declare global {
	namespace Cypress {
		type inputValue = string | number | string[];

		interface Chainable {
			// cy.{{Chainable}}
			mount: typeof mount;

			getInputValue(locator: Cypress.Chainable<JQuery<HTMLElement>>): Cypress.Chainable<string | number | string[] | undefined>;

			login(username: string, password: string): void;

			loginSuccessful(): void;

			getApiToken(): Cypress.Chainable<string>;
		}

		interface page {
			buzz: '/buzz/viewBuzz';
		}
		interface api {
			secret: 'string';
			domain: 'https://api.ilovepdf.com/v1';
			auth: '/auth';
			start: '/start';
			upload: '/upload';
			process: '/process';
			download: '/download';
		}
	}
}
