import app from './app';

import '../src/DB/connection';

app.listen(app.get('port'))

console.log('Servidor corriendo en puerto',app.get('port'))