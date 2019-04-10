const server = require('./api/server.js');

const port = process.env.PORT || 4400;
server.listen(port, () => console.log(`\n** Running on port http://localhost:4400  ${port} **\n`));
