require('dotenv').config();

const server = require('./endpoints/server');

const port = process.env.PORT || 8912;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));
