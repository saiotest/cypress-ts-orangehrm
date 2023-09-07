describe('Testing Orange', () => {
	beforeEach('Login and go to the Buzz Page', () => {
		cy.loginSuccessful();
		cy.visit('/buzz/viewBuzz');
	});

	it('Validate Post a Message', () => {});
});
