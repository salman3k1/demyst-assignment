import { TodoItem } from "./requests/single-item";

export function getPrintableTodos(todos: TodoItem[]) {
  return todos.map((todo) => getPrintableTodoItem(todo));
}

export function getPrintableTodoItem(todo: TodoItem) {
  return {
    Id: todo?.id ?? 0,
    Title: todo?.title ?? "-",
    Completed: todo?.completed ? "Yes" : "No",
  };
}
