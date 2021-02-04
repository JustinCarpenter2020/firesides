import BaseController from "../utils/BaseController";
import {todosService} from "../services/TodosService"
export class TodosController extends BaseController{

    constructor(){
      super("api/:user/todos")
      this.router
        .get('', this.getAll)
        .post('', this.createTodo)
    }
  async createTodo(req,res,next) {
    try {
      req.body.user = req.params.user
      res.send(await todosService.create(req.body))
    } catch (error) {
      next(error)
    }
  }
  async getAll(req,res,next) {
    try {
      req.query.user = req.params.user
      res.send(await todosService.getTodos(req.query ))
    } catch (error) {
      next(error)
    }
  }
}