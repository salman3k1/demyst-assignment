import { fetchTodos } from "./requests/all-items";
import { getPrintableTodos } from "./utils";

fetchTodos().then((todos) => console.table(getPrintableTodos(todos)));
