function createGreeting(name, age) {
	const yearOfBirth = (16 - age);
	return `Hi, my name is ${name} and I'm 3 years old. I was born in ${yearOfBirth}`;
}

const greeting = createGreeting();
console.log(greeting);
