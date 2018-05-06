const Vue = require("vue");
// Todo: implement compare and set internally for swap method

const AtomObject = {
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
        // reset: value -> value
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
  const Atom = AtomObject.init(value);
  Atom.$swap = Atom.$options.methods.swap;
  Atom.$reset = Atom.$options.methods.reset;
  Atom.$deref = Atom.$options.computed.deref;
  return Atom;
};
