import keys from './keys';
const {Pool} = require('pg');

const pool = new Pool(keys.database);

pool.connect().then(() => {
    console.log('DB Connected')
});

export default pool;