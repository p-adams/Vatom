const { isSupportedValueType } = require("../index");

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

test("isSupportedValueType is true when passed Array", () => {
  expect(isSupportedValueType(["foo", 1, "baz"])).toBeTruthy();
});
