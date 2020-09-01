let task = prompt('Enter the task number', '1');

switch (task) {
	case '1':

	var myGlobal = 10;

	function fun1() {
		oopsGlobal = 5;
	}

	function fun2() {
		var output = '';
		if (typeof myGlobal != 'undefined') {
			output += 'myGlobal: ' + myGlobal;
		}
		if (typeof oopsGlobal != 'undefined') {
			output += ' oopsGlobal: ' + oopsGlobal;
		}
		console.log(output);
	}

	break;

	case '2':

		function myLocalScope() {
			'use strict';
			var myVar;
			console.log('inside myLocalScope', myVar);
		}
		myLocalScope();

		console.log('outside myLocalScope', myVar);

	break;
}

