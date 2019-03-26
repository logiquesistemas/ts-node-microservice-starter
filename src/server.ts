import errorHandler from 'errorhandler';

import app from './app';

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Inicia o server Express
 */
const server = app.listen(app.get('port'), () => {
  console.log(
    '  Serviço rodando na URL http://localhost:%d em modo %s',
    app.get('port'),
    app.get('env')
  );
  console.log('  CTRL-C para parar\n');
});

export default server;
