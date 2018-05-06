const Atom = require("../index");

test("Dereferencing Atom's value with $deref takes correct snapshot of current value", () => {
  expect(Atom(1).$deref()).toBe(1);
});

test("Updating Atom's value with swap increments value from 1 to 2", () => {
  const inc = function(value) {
    return value + 1;
  };
  const atom = Atom(1);
  atom.$swap(inc);
  expect(atom.$deref()).toBe(2);
});

test("Updating Atom's value by calling swap three times value from 1 to 4", () => {
  const inc = function(value) {
    return value + 1;
  };
  const atom = Atom(1);
  atom.$swap(inc);
  atom.$swap(inc);
  atom.$swap(inc);
  expect(atom.$deref()).toBe(4);
});
