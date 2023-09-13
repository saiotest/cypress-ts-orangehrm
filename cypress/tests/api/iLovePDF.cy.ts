import { fileConverterAPI } from '@api/iLovePdfAPI';
import { uncaughtExpection } from '@util/logs';
uncaughtExpection();

describe('Verify converting JPG into PDF', () => {
	let bearerToken: string;

	beforeEach('Auth: Get BearerToken', () => {
		cy.viewport(1080, 720);
		cy.getApiToken().then(token => {
			bearerToken = token;
		});
	});

	it('Should convert PDF into JPG successffully', () => {
		const api = fileConverterAPI(bearerToken);
		const givenFile = 'https://cdn.pixabay.com/photo/2023/06/20/01/30/ai-generated-8075768_640.jpg';

		api.convertImageToPDF(givenFile, 'test.jpg').then(response => {
			expect(response.status).equal(200);
		});
	});
});
