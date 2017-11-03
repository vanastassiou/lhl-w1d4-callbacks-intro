function findWaldo(arr, found) {
  arr.forEach(function (currentValue, i) {
    if (arr[i] === "Waldo") {
      found(i);
    }
  });
}

function actionWhenFound(indexPosition) {
  console.log("Found Waldo at index", indexPosition);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

/*  The scoping made Kevin angry and call JavaScript bad names, so here's better.
Recall the syntax for forEach from MDN:

arr.forEach(function callback(currentValue, index, array) {
    //your iterator
}[, thisArg])

*/

function findWaldo(arr, found) {
  arr.forEach(function callback(currentValue, i) {
    if (currentValue === "Waldo") {
      found(i);
    }
  });
}
