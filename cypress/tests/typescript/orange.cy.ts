import { buzz } from '@pages/BuzzPage';

const ep: Cypress.endpoint = Cypress.env('ep');

describe('Testing Orange', () => {
	beforeEach('Login and go to the Buzz Page', () => {
		cy.loginSuccessful();
		cy.visit(ep.buzz);
	});

	it('Validate Post a Message', () => {
		const givenMessage = 'testing in blackhole';
		const firstInFeed = 0;

		buzz.postNewMessage(givenMessage);

		buzz.getPost(firstInFeed).within(() => {
			buzz.getPostMsgValue().then(actualText => {
				cy.log(actualText);
				expect(actualText).equal(givenMessage);
			});
		});
	});
});
