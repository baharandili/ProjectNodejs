function getDoubleDigitCombinations(input) {
  let result = [];
  const first = input[0];
  const last = input[1];

  result.push(first + last);
  result.push(last + first);

  return result;
}


function getTripleDigitCombinations(input) {
  let result = [];
  let main; // This is the number in question.
  let other1; // These are the other numbers.
  let other2;

  for (i = 0; i < input.length; i++) {
    let arr = input.slice(); // Make a copy of the input array.
    
    main = input[i];
    arr.splice(i, 1); // Remove the main element from the array …
    other1 = arr[0]; // … so that you are left with the other two numbers.
    other2 = arr[1];

    console.log(`Main is ${main}`);
    console.log(`other1 is ${other1} and other2 is ${other2}`);

    const arr2 = getDoubleDigitCombinations([other1, other2]); // Get the combinations of the others.

    result.push(main + arr2[0]); // Concatenate main with both of the others combinations.
    result.push(main + arr2[1]);
  }

  return result;
}

let result2 = getTripleDigitCombinations([ "1", "2","3", "8", "9", "7","1", "1", "2", "3", "1", "6", "9", "1", "2", "3", "6", "1", "1", "2" ]);



console.log("result2 is ...");

for (i = 0; i < result2.length; i++) {
  console.log(result2[i]);
}