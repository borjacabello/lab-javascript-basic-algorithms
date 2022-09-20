console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Pepi"; // driver
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Pepita"; // navigator
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
};

// Iteration 3: Loops
// 3.1
let capitals = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    capitals += hacker1[i].toUpperCase();
  } else {
    capitals += hacker1[i].toUpperCase() + " ";
  }
}
console.log(capitals);

// 3.2
let reverseOrder = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseOrder += hacker2[i];
}
console.log(reverseOrder);

//3.3
let larger;

if (hacker1.length > hacker2.length) {
  larger = hacker1;
} else if (hacker1.length === hacker2.length) {
  larger = hacker1;
} else {
  larger = hacker2;
};

for (let i = 0; i < larger.length; i++) {
    if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.");
        break;
    } else if (hacker1[i] > hacker2[i]) {
        console.log("Yo, the navigator goes first definitely.");
        break;
    } else { // si las letras son iguales
        if ( !(i === larger.length - 1) ) {  // si no estamos en la última letra de la palabra más larga
            continue;
        } else {
            if (hacker1.length < hacker2.length) {
                console.log("The driver's name goes first.");
            } else if (hacker1.length > hacker2.length) {
                console.log("Yo, the navigator goes first definitely.");
            } else {
                console.log("What?! You both have the same name?");
            };
        };
    };
};

// Bonus 1
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat nulla sodales dui semper, vitae ultrices augue laoreet. Etiam eget pellentesque purus, id finibus nibh. Quisque nec lacus id felis faucibus fermentum posuere vitae lorem. Mauris ultrices ullamcorper elit efficitur egestas. Aenean sollicitudin lectus nisi, quis molestie lorem posuere cursus. Donec nisi leo, sodales ac nibh vitae, lobortis consequat massa. Duis finibus pretium odio, quis sodales ex sagittis sed. Aliquam posuere varius elementum. Mauris at vestibulum lectus. Maecenas pharetra tincidunt consequat. Phasellus lacus libero, condimentum sit amet elit vel, placerat vehicula magna. Ut vitae blandit augue, feugiat varius leo. Vestibulum molestie semper convallis. Praesent elementum lobortis lobortis. Pellentesque orci ante, tempus et metus ut, elementum volutpat turpis. Nam ultricies quam elementum, tempor quam eget, vestibulum sem. Donec ut bibendum libero. Suspendisse ullamcorper cursus tempor. Etiam accumsan cursus quam lobortis varius. Integer non suscipit nunc. Sed auctor rhoncus lectus at dictum. Donec nec enim orci. Praesent ultricies dui quis tincidunt malesuada. Vestibulum fermentum arcu vestibulum justo lacinia, tempus porttitor nibh bibendum. Vestibulum nulla quam, molestie a erat molestie, porta egestas dui. Mauris viverra, metus a egestas lobortis, leo mi auctor urna, id facilisis purus tellus eget purus. Nullam efficitur vulputate tincidunt. Maecenas pretium tellus a luctus commodo. Suspendisse potenti. Vivamus ex tortor, consectetur ut sodales maximus, dapibus sit amet massa. Vivamus at luctus lectus, eleifend cursus nisi. Nulla ut sodales leo. Vivamus laoreet, dui id aliquam ultrices, mi sem aliquam massa, at facilisis arcu ipsum quis tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eget nisi a mauris egestas condimentum. Nullam ut lobortis sapien, ut molestie justo. Suspendisse porta massa at leo lobortis sagittis. Quisque luctus, mi eu malesuada tempor, tortor nunc tempus tellus, eget mattis tortor augue vitae nisi.";

let counter = 1;
for (let i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i-1] === " ") {
        counter++;
    };
};
console.log(`Total words: ${counter}`);

let etCounter = 0;
for (let i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === "e" && loremIpsum[i+1] === "t") {
        etCounter++;
    }
}
console.log(`Number of times "et" appears: ${etCounter}`);




// Bonus 2 - STILL TRYING
/* let phraseToCheck = "I'm learning Javascript!";
let modifiedPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
    if ( 65 <= phraseToCheck.charCodeAt(i) || phraseToCheck.charCodeAt(i) <= 90 || 
    97 <= phraseToCheck.charCodeAt(i) || phraseToCheck.charCodeAt(i) <= 122) {
        modifiedPhrase += phraseToCheck[i];
    }
}
console.log(modifiedPhrase);
/* for (let i = 0, j = phraseToCheck.length -1; i !== j; i++, j--) */
