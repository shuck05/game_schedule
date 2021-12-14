const { table } = require("console");
const path = require("path");

const dbPath = path.resolve(__dirname, "database.sqlite");

const knex = require("knex")({
  client: "sqlite3",
  connection: { filename: dbPath },
  useNullAsDefault: true,
});

knex.schema.hasTable("users").then((exists) => {
  if (!exists) {
    return knex.schema
      .createTable("users", (table) => {
        table.increments("id").primary(),
          table.string("username"),
          table.string("password");
      })
      .then(() => {
        // Log success message
        console.log("Table 'users' created");
      })
      .catch((error) => {
        console.error(`There was an error creating table 'users': ${error}`);
      });
  }
});

knex.schema.hasTable("events").then((exists) => {
  if (!exists) {
    return knex.schema
      .createTable("events", (table) => {
        table.increments("id").primary(),
          table.string("eventName"),
          table.string("teams"),
          table.string("trainers"),
          table.string("participants"),
          table.string("admins");
      })
      .then(() => {
        // Log success message
        console.log("Table 'events' created");
      })
      .catch((error) => {
        console.error(`There was an error creating table 'events': ${error}`);
      });
  }
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
