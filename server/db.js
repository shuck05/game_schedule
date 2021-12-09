const { table } = require("console");
const path = require("path");

const dbPath = path.resolve(__dirname, "database.sqlite");

const knex = require("knex")({
  client: "sqlite3",
  connection: { filename: dbPath },
  useNullAsDefault: true,
});

knex.schema
  .hasTable("users")
  .then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable("users", (table) => {
          table.increments("id").primary(),
            table.string("username"),
            table.string("password");
        })
        .then(() => {
          // Log success message
          console.log("Table 'Users' created");
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
    }
  })
  .then(() => {
    // Log success message
    console.log("done");
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`);
  });

/*
knex
  .select("*")
  .from("users")
  .then((data) => console.log("data:", data))
  .catch((err) => console.log(err));
*/

// Export the database
module.exports = knex;
