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

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error)
    }
}