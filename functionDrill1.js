function getYearOfBirth(age) {
	if (age < 0) {
		throw new Error("Age can not be negative");
	}
	return 2000 + (19 - age);
}

function createGreeting(name, age) {
		const yob = getYearOfBirth(age);
		return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob}.`;
}

try {
	const greeting = createGreeting("Jonathan", -3);
} catch(err) {
	console.log("Error");
}
