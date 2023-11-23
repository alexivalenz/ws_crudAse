import {getConnection, sql, bdQueries} from '../DB'; 

export const getAllUsers = async (req, res) => {
    
    try {
        const pool = await getConnection();
        const result = await pool.request().query(bdQueries.getAllUsers);
        let name;
        let id, status;
        let modifyResult=[];

        for(let i=0; i<result.recordset.length; i++)
        {
            id = result.recordset[i].id_usuario;
            name = result.recordset[i].nombre_usuario;

            (result.recordset[i].estatus_usuario == 1) ? status = 'Activo' : status = 'Cancelado';
            modifyResult.push({id, name, status})
        }
        console.log(modifyResult)
        res.json(modifyResult)
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
    let statusCode = 0, success = 0;

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
        .query(bdQueries.addNewUser)

        success = 1;
        console.log('***Peticion POST realizada en createNewUser***');
        res.json({name, status, statusCode, success})
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

export const updateUserById = async (req, res) => {
    const {name, status} = req.body;
    const {id} = req.params;

    let statusCode = 0;

    if(name == null || status == null){
        return res.status(400).json({msg: 'Bad Request. Asegurese de llenar todos los campos de la peticion'})
    }
    if(status == 'Activo') statusCode = 1;

    try {
        const pool = await getConnection();
        await pool
        .request()
        .input('id', sql.Int, id)
        .input('name', sql.VarChar, name)
        .input('status', sql.Int, statusCode)
        .query(bdQueries.updateUserById)

        console.log('***Peticion PUT realizada en updateUserById***');
        res.json({name, status})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const nextIdInDB = async (req, res) => {
    
    try {
        const pool = await getConnection();
        const result = await pool.request().query(bdQueries.nextIdInDB);
        let nextId;
        (result.recordset[0].max_id == 'NULL') ? nextId = 1 : nextId = result.recordset[0].max_id + 1;
        console.log(nextId)
        res.json({"nextId":nextId})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};