function unflatten(object) {
    var result = {};
    Object.keys(object).forEach(function (k) {
        setValue(result, k, object[k]);
    });
    return result;
}

var object = { "firstName": "John", "lastName": "Green", "car.make": "Honda", "car.model": "Civicanges" };

console.log(unflatten(object));