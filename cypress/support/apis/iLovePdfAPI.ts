import { Tool, processRequest, processResponse, startResponse, uploadRequest, uploadResponse } from '@apiTypes';
const api: Cypress.api = Cypress.env('api');

class PdfConverterAPI {
	server: string;
	taskID: string;
	bearerToken: { bearer: string };

	constructor(bearerToken: string) {
		this.bearerToken = { bearer: bearerToken };
		this.server = '';
		this.taskID = '';
	}

	convertImageToPDF(fileToConvert: string, fileName: string) {
		const givenProcess = Tool.IMAGEPDF;
		const startEndpoint = api.domain + api.start + '/' + givenProcess;
		return (
			cy
				.api({
					method: 'GET',
					url: startEndpoint,
					auth: this.bearerToken,
				})
				.then(response => {
					expect(response.status).equal(200);
					const json: startResponse = response.body;
					this.server = json.server;
					this.taskID = json.task;
				})
				//todo: UPLOAD FILE IN SERVER
				.then(() => {
					const uploadEnpoint = `https://${this.server}/v1${api.upload}`;
					const requestBody: uploadRequest = {
						task: this.taskID,
						cloud_file: fileToConvert,
					};

					cy.api({
						method: 'POST',
						url: uploadEnpoint,
						auth: this.bearerToken,
						body: requestBody,
					}).then(response => {
						expect(response.status).equal(200);
						const json: uploadResponse = response.body;
						Cypress.env('serverFileName', json.server_filename);
					});
				})
				//todo: PROCESS FILE IN SERVER WITH TASK
				.then(() => {
					const endpoint = `https://${this.server}/v1${api.process}`;
					const requestBody: processRequest = {
						task: this.taskID,
						tool: Tool.IMAGEPDF,
						files: [
							{
								server_filename: Cypress.env('serverFileName'),
								filename: fileName,
							},
						],
					};

					cy.api({
						method: 'POST',
						url: endpoint,
						auth: this.bearerToken,
						body: requestBody,
					}).then(response => {
						expect(response.status).equal(200);
						const json: processResponse = response.body;
						expect(json.status).equal('TaskSuccess');
						cy.log(json.download_filename);
					});
				})
				//todo: DOWNLOAD THE FILE
				.then(() => {
					const endpoint = `https://${this.server}/v1${api.download}/${this.taskID}`;

					cy.api({
						method: 'GET',
						url: endpoint,
						auth: this.bearerToken,
					}).then(response => {
						return response;
					});
				})
		);
	}
}

export const fileConverterAPI = (bearerToken: string) => new PdfConverterAPI(bearerToken);
