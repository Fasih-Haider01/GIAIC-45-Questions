//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.

let personeName: string = "Fasih Haider";

//lowercase
console.log("lowercase :", personeName.toLowerCase());

//uppercase
console.log("uppercase", personeName.toUpperCase());

//titlecase
console.log("titlecase", personeName.replace(/\b\w/g, c => c.toUpperCase()));