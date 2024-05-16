import { getTodoById } from "./single-item";

describe("getTodoById", () => {
  test("returns a valid todo item", async () => {
    const todoItem = await getTodoById(1);
    expect(typeof todoItem.userId).toEqual("number");
    expect(typeof todoItem.id).toEqual("number");
    expect(typeof todoItem.title).toEqual("string");
    expect(typeof todoItem.completed).toEqual("boolean");
  });

  test("returns null for an invalid todo id", async () => {
    const todoItem = await getTodoById(0);
    expect(todoItem).toBeNull();
  });
});
