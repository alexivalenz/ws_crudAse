import sql from 'mssql';

const dbSettings = {
    user: 'devUser',
    password: 'devpassword',
    server: 'localhost',
    database: 'usuarios',
    options:{
        encrypt: true, 
        trustServerCertificate : true,
    }
}

async function getConnection(){
    const pool = await sql.connect(dbSettings);
    const result = await pool.request().query("SELECT * FROM datos_usuarios");
    console.log(result)
}

getConnection();
