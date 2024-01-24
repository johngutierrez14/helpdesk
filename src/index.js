const { Config } = require('./config/config');
const app = require('./app');

app.listen(Config.PORT, () => console.log(`app listening on port http://localhost:${Config.PORT}`));