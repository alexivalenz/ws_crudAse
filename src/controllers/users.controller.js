import {getConnection, sql, bdQueries} from '../DB'; 

export const getAllUsers = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(bdQueries.getAllUsers);
        console.log('***Peticion GET realizada en getAllUsers***',result);
    
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getUserById = async (req, res) => {
    const {id} = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('id', id)
        .query(bdQueries.getUserById);

        console.log('***Peticion GET realizada en getUserById***', result.recordset[0]);
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const addNewUser = async (req, res) => {
    const {name, status} = req.body
    let statusCode = 0;

    if(name == null || status == null){
        return res.status(400).json({msg: 'Bad Request. Asegurese de llenar todos los campos de la peticion'})
    }

    if(status == 'Activo') statusCode = 1;

    try {
        const pool = await getConnection();
        await pool
        .request()
        .input('name', sql.VarChar, name)
        .input('status', sql.Int, statusCode)
        .query(bdQueries.createNewUser)

        console.log('***Peticion POST realizada en createNewUser***');
        res.json({name, status, statusCode})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const deleteUserById = async (req, res) => {
    const {id} = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('id', id)
        .query(bdQueries.deleteUser);

        console.log('***Peticion DELETE realizada en deleteUser***');
        res.send(result)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}