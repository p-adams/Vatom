const Vue = require("vue");

module.exports.isSupportedValueType = ro => typeof ro === "object";

// Object | Array -> Vue instance
const Atom = referenceObject => {
  if (!isSupportedValueType(referenceObject)) {
    console.warn(`${referenceObject} must be an Object or Array`);
    return;
  }
  return new Vue({
    data: {
      ro: referenceObject
    },
    methods: {
      // swap: Object, Function -> updated Object
      swap(currentReferenceObject, fn) {
        fn.apply(currentReferenceObject);
      },
      reset(currentReferenceObject, newValue) {}
    },
    computed: {
      deref() {
        return this.ro;
      }
    }
  });
};
