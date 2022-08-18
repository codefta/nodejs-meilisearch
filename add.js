const meiliClient = require("./init.js");
const products = require("./data.json");

meiliClient
  .index("products")
  .addDocuments(products)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
