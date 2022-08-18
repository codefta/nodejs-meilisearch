const meiliClient = require("./init");

meiliClient.getIndexes().then((res) => console.log(res));
