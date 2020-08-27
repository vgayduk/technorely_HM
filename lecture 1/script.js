function solveEquation(coeffArr) {
	const [a = 1, b = 0, c = 0] = coeffArr;
	if (a == 0) {
		console.log('а не может равняться 0');
		return
	}
	let bStr, cStr;
	const d = b*b - 4*a*c;
	b == 0 ? bStr = '' : bStr = ` ${b < 0 ? '-' : '+'} ${b == 1 ? '' : Math.sqrt(b*b)}x`;
	c == 0 ? cStr = '' : cStr = ` ${c < 0 ? '-' : '+'} ${Math.sqrt(c*c)}`;
	console.log(`Уравнение: ${a == 1 ? '' : a}x^2${bStr}${cStr} = 0`);
	console.log(`Дискриминант: ${d}`);
	console.log('Корни:');
	if (d < 0) {
		console.log('Корней нет');
	} else if (d == 0) {
		console.log(`X1 = ${((-b + Math.sqrt(d)) / (2*a)).toFixed(2)}`);
	} else {
		console.log(`X1 = ${((-b + Math.sqrt(d)) / (2*a)).toFixed(2)}`);
		console.log(`X2 = ${((-b - Math.sqrt(d)) / (2*a)).toFixed(2)}`);
	}
}

solveEquation([1,0,-4]);