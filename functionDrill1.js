function getYearOfBirth(age) {
	return 2000 + (19 - age);
}

function createGreeting(name, age) {
	const yob = getYearOfBirth(age);
	return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob}.`;
}

const greeting = createGreeting("Jonathan", 3);
console.log(greeting);
