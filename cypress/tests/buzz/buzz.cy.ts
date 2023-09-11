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

		buzz.postNewMessage(givenMessage);

		buzz.getPost(firstInFeed).within(() => {
			buzz.getPostMsgValue().then(actualText => {
				cy.log(actualText);
				expect(actualText).equal(givenMessage);
			});
		});
	});
});
