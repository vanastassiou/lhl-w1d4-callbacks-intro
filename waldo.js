function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);
    }
  }
}

function actionWhenFound(indexPosition) {
  console.log("Found Waldo at index", indexPosition);
}


findWaldo(["Alice", "Nancy", "Bob", "Waldo", "Winston"], actionWhenFound);

// Feedback: need to clarify that the findWaldo function DOES need a modification for this to work given our current level of knowledge
Also clarify that the objectives/goals need some serious proofreading
