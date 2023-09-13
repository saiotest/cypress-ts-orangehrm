import { buzz } from '@pages/BuzzPage';

const ep: Cypress.page = Cypress.env('ep');

describe('Verify Buzz Features', () => {
	beforeEach('Login and go to the Buzz Page', () => {
		cy.loginSuccessful();
		cy.visit(ep.buzz);
	});

	it('Validate Post a Message', () => {
		const givenMessage = 'testing in blackhole';
		const firstInFeed = 0;

		cy.intercept({
			method: 'POST',
			url: '/web/index.php/api/v2/buzz/posts',
		}).as('posted');
		buzz.postNewMessage(givenMessage);

		cy.wait('@posted').then(api => {
			const body = api.request.body;
			expect(body.text).equal(givenMessage);

			const response = api.response;
			if (!response) throw new Error('Response is not available during network connection');
			expect(response.statusCode).equal(200);
		});
		cy.intercept({
			method: 'GET',
			url: '/web/index.php/api/v2/buzz/feed**',
		}).as('feed');
		cy.wait('@feed').then(api => {
			const response = api.response;
			if (!response) throw new Error('Response is not available during network connection');
			expect(response.statusCode).equal(200);
			expect(response.body.data[0].text).equal(givenMessage);
		});

		buzz.getPost(firstInFeed).within(() => {
			buzz.getPostMsgValue().then(actualText => {
				cy.log(actualText);
				expect(actualText).equal(givenMessage);
			});
		});
	});
});
