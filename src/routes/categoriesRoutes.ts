import {Router} from "express";
import {categoriesController} from "../controllers/categoriesControllers";

class CategoriesRoutes{
    public router: Router = Router();

    constructor() {
        this.config();
    }

    private config(){
        this.router.get('/', categoriesController.index);
        this.router.get('/:id', categoriesController.getOne);
        this.router.post('/', categoriesController.create);
        this.router.put('/:id', categoriesController.update);
        this.router.delete('/:id', categoriesController.delete);
    }
}

const categoriesRoutes = new CategoriesRoutes();
export default categoriesRoutes.router;