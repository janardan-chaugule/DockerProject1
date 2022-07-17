import path from 'path'
var Pool = require('pg-pool')

import {migrate} from 'postgres-migrations'

const poolConfig = {
    database:  process.env.DATABASE,
    user:  process.env.DB_USER,
    password:  process.env.DB_PASSWORD,
    host:  process.env.DB_HOST,
    port:  process.env.DB_PORT,
    max: Number(process.env.DB_POOL_SIZE),
    idleTimeoutMillis:Number(process.env.DB_POOL_CLIENT_IDLE_TIMEOUT),
    connectionTimeoutMillis:Number(process.env.DB_POOL_CLIENT_CONNECTION_TIMEOUT)
}

const pool = new Pool(poolConfig);

const db = {
    runMigrations : async function() :Promise<void> {
        console.log(process.env);
        const client = await pool.connect();
        try{
            console.log(path.resolve(__dirname,'migration/sql'));
            await migrate({client},path.resolve(__dirname,'migration/sql'));
        }catch(err){
            console.log('Migration failed',err);
        }
        finally{
            client.release();
        }
    }
}

export default db;