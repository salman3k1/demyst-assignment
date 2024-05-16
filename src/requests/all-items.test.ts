import { fetchTodos } from "./all-items";

jest.mock("./single-item", () => ({
  getTodoById: jest.fn((id) => ({
    userId: 1,
    id,
    title: `Todo ${id}`,
    completed: false,
  })),
}));

describe("fetchTodos", () => {
  test("returns 20 todo items", async () => {
    const todoItems = await fetchTodos();
    expect(todoItems.length).toBe(20);
  });

  test("returns todo items with even ids", async () => {
    const todoItems = await fetchTodos();
    const itemsWithEvenIds = todoItems.filter((item) => item.id % 2 === 0);
    expect(itemsWithEvenIds.length).toBe(todoItems.length);
  });
});
