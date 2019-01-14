function createGreeting(name, age) {
	const yearOfBirth = 2000 + (16 - age);
	return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

const greeting = createGreeting("Jonathan", 3);
console.log(greeting);
