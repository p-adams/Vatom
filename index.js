const Vue = require("vue");

// Value -> Vue instance
const AtomObject = {
  init: value =>
    new Vue({
      data: {
        value
      },
      methods: {
        // Function
        swap(updateFunction) {
          this.value = this.$set(
            this,
            "value",
            updateFunction.apply(null, [this.value])
          );
        },
        // reset: value -> value
        reset(newValue) {}
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
