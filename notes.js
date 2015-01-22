var myNumbers = [ -1, 2, -3, 4, -5, 6];


function abs (myNumbers) {
	var absNumbers = myNumbers.map(function(x){
    return Math.sqrt(x * x);
});
	return absNumbers;
}






// square: function (myNumbers) {
// 	var sqrNumbers = myNumbers.map(function(x){
//     return x * x;
// });
// 	return sqrNumbers;
// }

// var sqrRoot = function(myNumbers) {
// 	var absNumbers = myNumbers.map(function(x){
// 	return Math.sqrt(x);
// 	});
//   return sqrRoot;
// };


// var sqrNumbers = map(myNumbers, square);
var absNumbers = map(abs, sqrRoot);