const server = require("./src/server");
const { conn } = require("./src/db.js");
const loadApi = require("./src/helpers/loadApi");
const PORT = 3001;

conn
  .sync()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
    loadApi();
  })
  .catch((error) => console.error(error));
