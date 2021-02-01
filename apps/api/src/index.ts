import app from './app'

app.listen(app.get('port'))
console.log(`The API is at ${app.get('host')}:${app.get('port')}`)