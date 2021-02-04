import BaseController from "../utils/BaseController";
import {axiosService} from "../services/AxiosService"
export class ImagesController extends BaseController{

    constructor(){
      super("api/images")
      this.router
        .get('', this.getAll)
    }
  async getAll(req,res,next) {
    try {
      res.send(await axiosService.getImages())
    } catch (error) {
      next(error)
    }
  }
}