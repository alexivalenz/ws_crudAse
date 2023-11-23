export const bdQueries = {
    getAllUsers: 'SELECT * FROM datos_usuarios',
    getUserById: 'SELECT * FROM datos_usuarios WHERE id_usuario = @id',
    addNewUser: 'INSERT INTO datos_usuarios VALUES(@name, @status)',
    deleteUser: 'DELETE FROM datos_usuarios WHERE id_usuario = @id', 
    updateUserById: 'UPDATE datos_usuarios SET nombre_usuario=@name, estatus_usuario=@status WHERE id_usuario=@id',
    nextIdInDB: 'select MAX(id_usuario) as max_id from datos_usuarios;'
}