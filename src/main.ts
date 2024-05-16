import { fetchTodos } from "./requests/all-items";
import { getPrintableTodos } from "./utils";

const todoPromises = fetchTodos();
todoPromises.then((todos) => console.table(getPrintableTodos(todos)));
