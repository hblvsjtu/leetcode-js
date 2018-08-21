/**
 * 
 * @authors LvHongbin (hblvsjtu)
 * @date    2018-08-21 11:31:52
 * @version v1.0.0
 * @description remove-repeat
 */

/**
 * test sample
 */
var arr1 = [1, 2, 3, 2, 2, 1];
var arr2 = [1, 1];

// Set
var removeRepeat1 = function(arr) {
	var a = new Set(arr);
	return [...a];
}

console.log(removeRepeat1(arr1));
console.log(removeRepeat1(arr2));


// splice
var removeRepeat2 = function(arr) {
	var len = arr.length;
	if (len < 2) return arr;
	arr.sort();
	for (var i = 1; i < len; i++) {
		if (arr[i] === arr[i - 1]) {
			arr.splice(i, 1);
			len--;
		}

	}
	return [...arr];
}

console.log(removeRepeat2(arr1));
console.log(removeRepeat2(arr2));