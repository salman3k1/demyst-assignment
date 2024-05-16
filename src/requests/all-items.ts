import { TodoItem, getTodoById } from "./single-item";

export function fetchTodos(): Promise<(TodoItem | null)[]> {
  const todoPromises: Promise<TodoItem | null>[] = [];
  const numberOfItems = 20;
  for (let todoIndex = 2; todoIndex <= numberOfItems * 2; todoIndex += 2) {
    todoPromises.push(getTodoById(todoIndex));
  }
  return Promise.all(todoPromises);
}
