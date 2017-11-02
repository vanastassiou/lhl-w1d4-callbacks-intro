// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {
  // Iterates through array
  for (var i = 0; i < arr.length; i++) {
    // Checks if array item's value is equal to criterion
    if (arr[i] === "Waldo") {
      // Invokes second parameter while specifying it's a function (??)
      found(i);
    }
  }
}

function actionWhenFound(indexPosition) {
  console.log("Found Waldo at index", indexPosition);
}


findWaldo(["Alice", "Nancy", "Bob", "Waldo", "Winston"], actionWhenFound);

// Feedback: need to clarify that the findWaldo function DOES need a modification for this to work given our current level of knowledge
