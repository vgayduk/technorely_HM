let task = prompt('Enter the task number', '1');

switch (task) {
	case '1':

		function printNumbersUsingInterval(from, to) {
			let num = from;
			let interval;
			if (from < to) {
				interval = setInterval(() => {
					console.log(num++);
					if (num > to) clearInterval(interval);
				}, 1000);
			} else if (from == to) {
				console.log(num);
			} else {
				interval = setInterval(() => {
					console.log(num--);
					if (num < to) clearInterval(interval);
				}, 1000);
			}
		}

		function printNumbersUsingTimeout(from, to) {
			let num = from;
			let timeout;
			if (from < to) {
				timeout = setTimeout(function timeoutPrint() {
					console.log(num++);
					if (num <= to) timeout = setTimeout(timeoutPrint, 1000); 
				}, 1000);
			} else if (from == to) {
				console.log(num);
			} else {
				timeout = setTimeout(function timeoutPrint() {
					console.log(num--);
					if (num >= to) timeout = setTimeout(timeoutPrint, 1000); 
				}, 1000);
			}
		}

		// printNumbersUsingInterval(1,5);
		// printNumbersUsingTimeout(1,5);

	break;

	case '2':

		function clock() {
			let interval = setInterval(() => {
				let date = new Date();
				console.clear();
				console.log(`Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
			}, 1000);
		}

		clock();

	break;

	case '3':

		function debounce(f, ms) {
			let isReady = true;

			return function() {
				if (!isReady) return;
				f.apply(this, arguments);
				isReady = false;
				setTimeout(() => isReady = true, ms);
			}
		}

		let f = debounce(alert, 1000);

		f(1);
		f(2);

		setTimeout( () => f(3), 100);
		setTimeout( () => f(4), 1100);
		setTimeout( () => f(5), 1500);

	break;

	case '4':

		function throttle(func, ms) {

			let isThrottled = false,
				savedArgs,
				savedThis;

			function wrapper() {

				if (isThrottled) {
			    	savedArgs = arguments;
			    	savedThis = this;
			    	return;
			 	}

			    func.apply(this, arguments);

			    isThrottled = true;

			    setTimeout(function() {
			    	isThrottled = false;
			    	if (savedArgs) {
			            wrapper.apply(savedThis, savedArgs);
			            savedArgs = savedThis = null;
			        }
			    }, ms);
			}

			return wrapper;
		}

		let f1000 = throttle(console.log, 1000);

		f1000(1);
		f1000(2);
		f1000(3);

	break;
}