const { Atom } = require("../index");

test("Dereferencing Atom's reference object takes correct snapshot of current reference object", () => {
  const count = new Atom(1);
  expect(count.deref()).toBe(1);
});
