function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Access the array element
console.log(greeter(user[0])); // Access the first element of the array

// Solution 2: Iterate over the array
user.forEach(name => console.log(greeter(name)));

//Solution 3: Concatenate Array Elements
console.log(greeter(user.join(" "))); // Join array elements into a single string