const { MeiliSearch } = require("meilisearch");

const client = new MeiliSearch({
  host: "http://localhost:7700",
  apiKey: "test12345",
});

module.exports = client;
