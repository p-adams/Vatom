const Vue = require("vue");

module.exports.isSupportedValueType = ro => {
  const isObject = obj => Object.getPrototypeOf(obj) === Object.prototype;
  // if reference object is an array
  // make sure that it is an array of objects
  let arrayContainsObject;
  if (Array.isArray(ro)) {
    arrayContainsObject =
      ro.findIndex(obj => !isObject(obj)) > -1 ? false : true;
  }
  return arrayContainsObject || isObject(ro);
};

module.exports.convertArrayToObject = (array, key) =>
  array.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {});

// Object | Array -> Vue instance
const Atom = referenceObject => {
  if (!isSupportedValueType(referenceObject)) {
    console.warn(`${referenceObject} must be an object or array of objects`);
    return;
  }
  if (Array.isArray(referenceObject))
    referenceObject = convertArrayToObject(referenceObject);

  return new Vue({
    data: {
      ro: referenceObject
    },
    methods: {
      // swap: Function -> Object
      swap(updateFunction) {
        updateFunction.apply(this.ro);
      },
      // reset: Object -> Object
      reset(newValue) {}
    },
    computed: {
      deref() {
        return this.ro;
      }
    }
  });
};
