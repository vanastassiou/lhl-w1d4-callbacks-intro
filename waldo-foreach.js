function findWaldo(arr, found) {
  arr.forEach(function(currentValue, i) {
    if (arr[i] === "Waldo") {
      found(i);
    }
  });
}

function actionWhenFound(indexPosition) {
  console.log("Found Waldo at index", indexPosition);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
