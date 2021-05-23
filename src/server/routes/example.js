require("dotenv").config();

// get db conn
const db = require('monk')(process.env.URI);

module.exports = function(app) {
    app.get("/api/test", (req, res) => {

        // get collection
        const documents = db.get('documents');

        // insert into collection
        documents.insert({ name: "test-name"});

        res.json({ test: "test" });
      });
}