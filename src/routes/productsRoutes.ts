import {Router} from "express";
import {productsController} from "../controllers/productsControllers";


class ProductsRoutes{
    public router: Router = Router();

    constructor() {
        this.config();
    }

    private config(){
        this.router.get('/', productsController.index);
        this.router.get('/:id', productsController.getOne);
        this.router.post('/', productsController.create);
        this.router.put('/:id', productsController.update);
        this.router.delete('/:id', productsController.delete);
    }
}

const productsRoutes = new ProductsRoutes();
export default productsRoutes.router;