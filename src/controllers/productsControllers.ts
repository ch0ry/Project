import {Request, Response} from "express";
import pool from "../database";

class ProductsController{

    public async index (req: Request, res: Response){
        const products = await pool.query('SELECT * FROM proyectofinal."Products";');
        res.json(products.rows);
    }

    public async create (req: Request, res: Response){
        let values = [req.body.product_category_id, req.body.product_name, req.body.product_price]
        await pool.query('INSERT INTO proyectofinal."Products" (product_category_id, product_name, product_price) VALUES($1, $2, $3)', values);
        let id_val = await pool.query('SELECT product_id FROM proyectofinal."Products" WHERE product_category_id = $1 and product_name = $2 and product_price = $3', values);
        res.json('Created item with id ' + id_val.rows[0].product_id);
    }

    public async update(req: Request, res: Response){
        const { id } = req.params;
        let newVals = [req.body.product_category_id, req.body.product_name, req.body.product_price, id];
        await pool.query('UPDATE proyectofinal."Products" SET product_category_id = $1, product_name = $2, product_price = $3 WHERE product_id = $4', newVals);
        res.json('Done')
    }

    public async delete(req: Request, res: Response){
        const { id } = req.params;
        await pool.query('DELETE FROM proyectofinal."Products" WHERE product_id = $1', [id]);
        console.log('Delete');
        res.json('Item deleted')
    }

    public async getOne(req: Request, res: Response){
        const { id } = req.params;
        const row = await pool.query('SELECT * FROM proyectofinal."Products" WHERE product_id = $1', [id]).subscribe();
        console.log(row);
        if (row.rows.length === 0){
            res.json("Product not found");
        }
        else res.json(row.rows[0]);
    }
}

export const productsController = new ProductsController();
