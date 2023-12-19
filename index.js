const server = require("./src/server");
require("./src/mongodb");

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`%s listening at ${port}`)
})