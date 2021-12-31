const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    defaultConnection: "default",
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
      },
    },
  };
};