var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  var obj = Object.assign({}, object, {key: value});
  return obj;
}
