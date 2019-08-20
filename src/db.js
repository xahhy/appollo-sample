const sql = require('mssql');

const config = {
  user: 'SA',
  password: '123456.Password',
  server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
  database: 'master',
  port: 1401,
};

async function getAllPersons() {
  try {
    await sql.connect(config);
    const result = await sql.query('SELECT TOP (1000) * FROM [master].[dbo].[Persons]');
    console.dir(result);
    sql.close();
  } catch (err) {
    // ... error checks
  }
}
const result = getAllPersons();
console.log(result);
