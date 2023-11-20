export const bdQueries = {
    getAllUsers: 'SELECT * FROM datos_usuarios',
    getUserById: 'SELECT * FROM datos_usuarios WHERE id_usuario = @id',
    addNewUser: 'INSERT INTO datos_usuarios VALUES(@name, @status)'
}