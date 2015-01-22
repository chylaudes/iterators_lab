# Iterators Lab

### Description

In the iterators lab we will be continuing our exploration of
iterators. We have a series of challenges that require you to use the
iterators we discussed in class. We will try to use various testing
methods to verify that your code is working.

### Phase-1

Research the following term and summarize your findings on it two to
three sentences:

* `higher-order function`


Update this README with a description of each of the following and an
example you've created:

* `forEach`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

The forEach, applies the standard 'for' loop.  Applying the criteria on each element on the Array.  forEach doesn't return anything!

Example:

var friends = ["Jim", "Jon", "James"]
friends.forEach (function (buddy) {
	console.log("Hello" +buddy + "!");
});
==>
Hello Jim!
Hello Jon!
Hello James!


* `map`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

The map produces a new array of elements, while applying the criteria of the function on each element.

Example:
var friends = ["Jim", "Jon", "James"]
var lowerCased = friends.map (function (x) {
	return x.toLowercase();
});
console.log(lowerCased);

==>
["jim", "jon", "james"]



* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

The filter creates a new array that passes each element through a test that is provided by the function.

Example:
var friends = ["Jim", "Jon", "James", "Bob"]
var jNames = friends.filter (function(name){
	var j = ["j"]
	return j.indexOf(name) !== -1;
});
return jNames;
},
==>
["Jim", "Jon", "James"]



* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

Reduce takes a whole array and reduces it to one value.  Reduces from left to right

Example:
var numbers [1,2,3,4,5]
var sum = numbers.reduce(function (prev, next) {
	return prev + next;
});
return sum;
},

==>
[15]


* `some`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

Tests to see if the array of elements passes the test that is provided by a function and if one of them passes it returns true.

Otherwise it returns to false if none of the elements in an array passes.

Example:
var isEven = function (num) {
  return num % 2 == 0;
};
[1,2,3].some(isEven);
=> true




* `every`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)


Tests to see if every single element within the array passes through a test provided by the function and if ALL passes then it returns true.

If one of them fails the it returns false.

Example:

var isEven = function (num) {
  return num % 2 == 0;
};

[1,2,3].every(isEven);
=> false

Use the notes provided to help guide you explanation.

### Phase-2

* Run `npm install` from the `iterators_lab` directory.
* Looks at the tests we've written in the `test` folder. Run the tests
  with `npm test` (also from the `iterators_lab` directory). They
  should all fail.
* Get all of the tests to pass by writing the necessary code in
  `src/iterators.js`.

### Phase-3

Refactor the following code using `map` to make only one call to the `map` function versus the two below.


```
var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};

Answers to Phase 3:

var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);
```
var myNumbers = [ -1, 2, -3, 4, -5, 6];


function abs (myNumbers) {
	var absNumbers = myNumbers.map(function(x){
    return Math.sqrt(x * x);
});
	return absNumbers;
}

var absNumbers = map(abs, sqrRoot);

