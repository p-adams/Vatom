const { convertArrayToObject, isSupportedValueType } = require("../index");

const users = [
  { id: 1, username: "foo" },
  { id: 2, username: "bar" },
  { id: 3, username: "baz" }
];

test("isSupportedValueType is false when passed string", () => {
  expect(isSupportedValueType("meow")).toBeFalsy();
});

test("isSupportedValueType is false when passed number", () => {
  expect(isSupportedValueType(1)).toBeFalsy();
});

test("isSupportedValueType is false when passed boolean", () => {
  expect(isSupportedValueType("meow")).toBeFalsy();
});

test("isSupportedValueType is true when passed Object", () => {
  expect(isSupportedValueType({ key: 1, value: "foo" })).toBeTruthy();
});

test("isSupportedValueType is falsy when passed Array that contains scalar values", () => {
  expect(
    isSupportedValueType(["foo", { id: 1, name: "bar" }, "baz"])
  ).toBeFalsy();
});

test("isSupportedValueType is truthy when passed Array that contains object", () => {
  expect(isSupportedValueType(users)).toBeTruthy();
});

test("convertArrayToObject correctly converts array to object", () => {
  expect(convertArrayToObject(users, "id")).toBeInstanceOf(Object);
});
