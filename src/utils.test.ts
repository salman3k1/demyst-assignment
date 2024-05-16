import { fetchTodos } from "./requests/all-items";
import { getPrintableTodoItem, getPrintableTodos } from "./utils";

jest.mock("./requests/single-item", () => ({
  getTodoById: jest.fn((id) => ({
    userId: 1,
    id,
    title: `Todo ${id}`,
    completed: false,
  })),
}));

describe("getPrintableTodoItem", () => {
  test("returns a printable todo item", () => {
    const printableTodoItem = getPrintableTodoItem({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });
    expect(typeof printableTodoItem.Id).toBe("number");
    expect(typeof printableTodoItem.Title).toBe("string");
    expect(typeof printableTodoItem.Completed).toBe("string");
  });

  test("returns a completed printable todo item correctly", () => {
    const printableTodoItem = getPrintableTodoItem({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: true,
    });
    expect(printableTodoItem).toEqual({
      Id: 1,
      Title: "delectus aut autem",
      Completed: "Yes",
    });
  });

  test("returns an incomplete printable todo item correctly", () => {
    const printableTodoItem = getPrintableTodoItem({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });
    expect(printableTodoItem).toEqual({
      Id: 1,
      Title: "delectus aut autem",
      Completed: "No",
    });
  });

  test("returns a printable todo item when null", () => {
    const printableTodoItem = getPrintableTodoItem(null);
    expect(printableTodoItem).toEqual({
      Id: 0,
      Title: "-",
      Completed: "No",
    });
  });
});

describe("getPrintableTodos", () => {
  test("returns a list of equal number of printable todo items", async () => {
    const todoItems = await fetchTodos();
    const printableTodoItems = getPrintableTodos(todoItems);
    expect(printableTodoItems.length).toEqual(todoItems.length);
  });
});
