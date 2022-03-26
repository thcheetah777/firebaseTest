// Firebase Test
/*^*^*^*^*^*^*^*
index.js
The server.
*^*^*^*^*^*^*^*/

const express = require("express");
const app = express();
const port = 8000;

app.use(express.static("./"));
app.listen(port, () => {
  console.log(`Listening on port 8000`);
});
