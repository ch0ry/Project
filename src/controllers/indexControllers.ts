import {Request, Response} from 'express';
import pool from '../database';
const {Pool} = require('pg');

class IndexController{
    public async index (req :Request, res: Response) {
        const unorganizedCustomers = await pool.query('SELECT * FROM proyectofinal."Customers";');
        let customers: any = [];
        for (let i = 0; i < unorganizedCustomers.rows.length; i+=2){
            customers.push([unorganizedCustomers.rows[i], unorganizedCustomers.rows[i+1]]);
        }
        console.log(customers);
        res.json(unorganizedCustomers.rows);
    }

    public async create (req: Request, res: Response): Promise<void> {
        let values = [req.body.method_description, req.body.shipping_method_cost];
        await pool.query('INSERT INTO proyectofinal."Shipping_Methods" (method_description, shipping_method_cost) values($1, $2);', values);
        pool.end();
        res.json('Created element with id ');
    }


    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM proyectofinal."Shipping_Methods" WHERE shipping_methods_id = $1', [id]);
        pool.end();
        res.json('Deleted element with id ' + id);
    }
    public update (req: Request, res: Response) {
        res.send('Updating game ' + req.params.id);
    }

}

export const indexController = new IndexController();
