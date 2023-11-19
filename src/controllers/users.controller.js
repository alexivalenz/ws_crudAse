import {getConnection} from '../DB/connection'; 

export const getAllUsers = async (req, res) =>{
    const pool = await getConnection();
    const result = await pool.request().query("Select * from datos_usuarios");
    console.log('***Peticion GET realizada en getAllUsers***',result);
    
    res.json(result.recordset);
};