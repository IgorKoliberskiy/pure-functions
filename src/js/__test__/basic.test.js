import getColor from "../basic";

test("Red color if health: 0-14", () => {
  const health = getColor({ name: "Маг", health: 10 });
  expect(health).toBe("critical");
});

test("Yellow color if health: 15-50", () => {
  const health = getColor({ name: "Маг", health: 45 });
  expect(health).toBe("wounded");
});

test("Green color if health: 51-100", () => {
  const health = getColor({ name: "Маг", health: 90 });
  expect(health).toBe("healthy");
});
