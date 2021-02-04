import { dbContext } from "../db/DbContext";

class TodosService{
  async getTodos(query = {}) {
    return await dbContext.Todos.find(query)
  }
  async create(body) {
    return await dbContext.Todos.create(body)
  }

}

export const todosService= new TodosService()