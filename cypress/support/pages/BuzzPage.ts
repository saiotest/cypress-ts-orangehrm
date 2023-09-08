class BuzzPage {
	//* Interface Declarations
	postMessageInput: () => Cypress.Chainable<JQuery<HTMLTextAreaElement>>;
	postSubmitButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
	feedContent: () => Cypress.Chainable<JQuery<HTMLElement>>;
	feedItem: () => Cypress.Chainable<JQuery<HTMLElement>>;
	postProfile: () => Cypress.Chainable<JQuery<HTMLElement>>;
	postBody: () => Cypress.Chainable<JQuery<HTMLElement>>;
	postFooter: () => Cypress.Chainable<JQuery<HTMLElement>>;

	constructor() {
		this.postMessageInput = () => cy.get('textarea');
		this.postSubmitButton = () => cy.get('[type=submit]');
		this.feedContent = () => cy.get('[class$=buzz-newsfeed-posts]');
		this.feedItem = () => cy.get('[class$=buzz-newsfeed-posts] .oxd-grid-item:has(.orangehrm-buzz-post)');
		this.postProfile = () => cy.get('[class$=post-header]');
		this.postBody = () => cy.get('[class$=post-body-text]');
		this.postFooter = () => cy.get('[class$=post-footer]');
	}

	async postNewMessage(text: string) {
		this.postMessageInput().type(text);
		this.postSubmitButton().click();
	}

	getPost(index: number) {
		return this.feedItem().eq(index);
	}

	getPostMsgValue() {
		return this.postBody().then(element => {
			return element.text();
		});
	}
}

export const buzz = new BuzzPage();
