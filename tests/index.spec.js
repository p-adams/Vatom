const Vatom = require("../index");

test("Dereferencing Vatom's value with $deref takes correct snapshot of current value", () => {
  expect(Vatom(1).$deref()).toBe(1);
});

test("Updating Vatom's value with swap increments value from 1 to 2", () => {
  const inc = function(value) {
    return value + 1;
  };
  const vatom = Vatom(1);
  vatom.$swap(inc);
  expect(vatom.$deref()).toBe(2);
});

test("Updating Vatom's value by calling swap three times increments value to 4", () => {
  const inc = function(value) {
    return value + 1;
  };
  const vatom = Vatom(1);
  vatom.$swap(inc);
  vatom.$swap(inc);
  vatom.$swap(inc);
  expect(vatom.$deref()).toBe(4);
});

test("Updating Vatom's value by calling swap increments all values in array by 1", () => {
  const inc = function(values) {
    return values.map(value => value + 1);
  };
  const vatom = Vatom([1, 2, 3]);
  vatom.$swap(inc);
  expect(vatom.$deref()).toEqual(expect.arrayContaining([2, 3, 4]));
});

test("Updating Vatom's value by calling swap on Todos sets todo to complete", () => {
  const setCompletedToTrue = function(todos, id) {
    return todos.map(
      todo => (todo.id === id ? { ...todo, completed: true } : todo)
    );
  };
  const todos = [
    { id: 0, text: "Learn Vue", completed: false },
    { id: 1, text: "Learn React", completed: true }
  ];
  const vatom = Vatom(todos);
  vatom.$swap(setCompletedToTrue, 0);
  expect(vatom.$deref()[0].completed).toBeTruthy();
});

test("Calling reset on VVatom should reset to new value", () => {
  const users = [{ key: "4", username: "foo" }];
  const vatom = Vatom(users);
  vatom.$reset({ count: 20 });
  expect(vatom.$deref()).toEqual(expect.objectContaining({ count: 20 }));
});
