const meiliClient = require("./init");

const query = process.argv[2];
console.log(query);

meiliClient
  .index("products")
  .search(query)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
