describe('Blackhole: Practicando con TypeScript', () => {
	it('Checking basic Data Type in TypeScript', () => {
		//* Tipado de Variables Básicas:

		// String Array => Array de String

		type Suites = {
			num: number;
			test: string;
			isTested: boolean;
		};
		interface SuitesInt {
			testid: string;
			testData: string[];
			data: Suites;
		}

		type Execution = SuitesInt[];

		const data: Execution = [
			{
				testid: '12341324123312',
				testData: ['a', 'a', 'a', 'a'],
				data: {
					num: 98,
					test: 'validate TypeScript',
					isTested: true,
				},
			},
		];

		//* PARA TIPEAR Y CREAR INTERFACES:
		const queTipo = typeof data;
		queTipo;

		//* TIPEO VARIADO/OPTIONAL
		type apiResponse = {
			testid: number;
			data: string;
		}[];

		const response: apiResponse = [
			{
				testid: 1,
				data: 'passed',
			},
			{
				testid: 2,
				data: 'failed',
			},
		];
		// TIPADO CON FUNCIONES:

		function getTestId(data: apiResponse) {
			const findId = data.find(({ data }) => data === 'passed');
			if (!findId) throw new Error('findId is not found');

			return findId;
		}

		getTestId(response);
	});
});
