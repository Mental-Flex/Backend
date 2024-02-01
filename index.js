
const server = require("./src/server");
require("./src/mongodb");


server.listen(3000,"0.0.0.0", () => {
  console.log(`%s listening at 3000`)
})