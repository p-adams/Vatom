const Vue = require("vue");

const Vatom = {
  // Any type of value -> a Vue instance where that value is
  // a reactive data property
  init: value =>
    new Vue({
      data: {
        value
      },
      methods: {
        // Function & optional arguments
        // Swaps value stored as data
        // updateFunction should be free of side effects
        // as it may be called multiple times
        swap(updateFunction, args = {}) {
          this.value = this.$set(
            this,
            "value",
            updateFunction.apply(null, [this.value, args])
          );
        },
        // a new value
        reset(newValue) {
          this.value = newValue;
        }
      },
      computed: {
        deref() {
          return this.value;
        }
      }
    })
};

module.exports = function(value) {
  const vatom = Vatom.init(value);
  vatom.$swap = vatom.$options.methods.swap;
  vatom.$reset = vatom.$options.methods.reset;
  vatom.$deref = vatom.$options.computed.deref;
  return vatom;
};
