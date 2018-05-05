const Vue = require("vue");

module.exports.isSupportedValueType = rv => typeof rv === "object";

// Reference value of type Object or Array -> Vue instance
const Atom = referenceValue => {
  if (!isSupportedValueType(referenceValue)) {
    console.warn(`${referenceValue} must be an Object or Array`);
    return;
  }
  return new Vue({
    data: {
      rv: referenceValue
    },
    methods: {
      swap(currentValue, fn) {
        fn.apply(currentValue);
      },
      reset(rv, newValue) {}
    },
    computed: {
      deref() {
        return rv => {};
      }
    }
  });
};
