//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:

export function uncaughtExpection() {
	// ** IMPORTA ESTA FUNCIÓN EN TUS PRUEBAS PARA EVITAR EL UNCAUGHT EXCEPTION Y LOS FETCH ABRUMADORES.
	Cypress.on('uncaught:exception', () => {
		// returning false here prevents Cypress from
		// failing the test
		return false;
	});
}
