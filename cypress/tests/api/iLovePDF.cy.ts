import type { startResponse, tokenResponse } from '@apiTypes';

const api: Cypress.api = Cypress.env('api');
const secret: string = Cypress.env('secret');

describe('Verify converting PDF into JPG', () => {
	beforeEach('Auth: Get a BearerToken', () => {
		cy.viewport(1080, 720);
		const endpoint = api.domain + api.auth;
		cy.api({
			method: 'Post',
			url: endpoint,
			body: {
				public_key: secret,
			},
		}).then(response => {
			expect(response.status).equal(200);
			const json: tokenResponse = response.body;
			Cypress.env('bearerToken', json.token);
		});
	});

	it('Get a Server and a Task', () => {
		const givenProcess = '/pdfjpg';
		const endpoint = api.domain + api.start + givenProcess;
		cy.api({
			method: 'GET',
			url: endpoint,
			auth: {
				bearer: Cypress.env('bearerToken'),
			},
		}).then(response => {
			const json: startResponse = response.body;
			expect(response.status).equal(200);
			Cypress.env('givenServer', json.server);
			Cypress.env('givenTaskID', json.task);
		});
	});
});
