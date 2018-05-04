const Vue = require("vue");

// Scalar or compound value -> Vue instance

const createAtom = ({ value }) => {
  return new Vue({
    data: {
      value
    },
    methods: {
      swap(currentValue, fn) {
        fn.apply(currentValue);
      },
      reset(atom, newValue) {}
    },
    computed: {
      deref() {
        return atom => {};
      }
    }
  });
};

console.log(createAtom({ value: { key: 1, value: "meow" } }).$data.value.key);

exports = {
  createAtom
};
