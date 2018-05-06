const Vue = require("vue");

module.exports.isSupportedValueType = ro => ro instanceof Object;

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
