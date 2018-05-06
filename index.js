const Vue = require("vue");

// Value -> Vue instance
module.exports.Atom = value => {
  return new Vue({
    data: {
      value
    },
    methods: {
      // swap: Function -> value
      swap(updateFunction, args) {
        this.value = updateFunction.apply(null, args);
      },
      // reset: value -> value
      reset(newValue) {}
    },
    computed: {
      deref() {
        return this.value;
      }
    }
  });
};
