var sort = function (arr) {
    var _a;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
            }
        }
    }
    console.log(arr);
};
var user = {
    id: 1,
    age: 44,
    name: "sudhir",
    salary: 40000
};
var user = {
    id: 2,
    age: 34,
    name: "salman",
    salary: 17000
};
