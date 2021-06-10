import { Router } from 'express';
import { indexController } from '../controllers/indexControllers';


class IndexRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(){
        this.router.get('/', indexController.index);
        this.router.post('/', indexController.create);
        this.router.put('/:id', indexController.update);
        this.router.delete('/:id', indexController.delete);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router

