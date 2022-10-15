require("dotenv").config({ path: "./.env" })
const mysql       = require('promise-mysql2')
const url_db      = process.env.URL_DB
const usuario_db  = process.env.USUARIO_DB
const password_db = process.env.PASSWORD_DB
const schema      = process.env.SCHEMA
const port_db     = process.env.PORT_DB

const pool = mysql.createPool(
    { host: url_db,
      user: usuario_db,
      password: password_db,
      database: schema,
      port: port_db,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0 }
);

async function listarProdutos() {      //Fluxo Construção de Boxes
  const connection = await pool.getConnection();
  let sql = "select * from produtos";
  try { const [rows] = await connection.query(sql); connection.release(); return rows; }
  catch (error) { console.log(error)}
}

module.exports = listarProdutos