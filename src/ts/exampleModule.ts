// ======
// Types.
// ======

import {
	//
	IExampleType,
	IExampleInterface,
	IExampleModule,
} from './_types';

// ========
// Kickoff.
// ========

const init = (): void => {
	// Example value (with type).
	const exampleValue: IExampleType = 'Hello!';

	// Example object (with interface);
	const exampleObject: IExampleInterface = {
		foo: true,
	};

	// TODO: REMOVE THIS.
	window.console.log('exampleModule.init()');

	// TODO: REMOVE THIS.
	window.console.log(exampleValue);

	// TODO: REMOVE THIS.
	window.console.log(exampleObject);
};

// =======
// Bundle.
// =======

const exampleModule: IExampleModule = { init };

// =======
// Export.
// =======

export { exampleModule };
