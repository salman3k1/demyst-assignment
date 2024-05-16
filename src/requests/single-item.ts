import axios from "./../lib/axios";
import { AxiosResponse } from "axios";

export type TodoItem = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function getTodoById(id: number): Promise<TodoItem | null> {
  try {
    const res: AxiosResponse<TodoItem> = await axios.get(`/todos/${id}`);
    return res.data;
  } catch (e) {
    return null;
  }
}
