var knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env["AWS_RDS_HOST_URL"],
    user: process.env["AWS_RDS_USER"],
    password: process.env["AWS_RDS_PASSWORD"],
    database: process.env["AWS_RDS_DATABASE"],
  },
});

console.log(process.env["AWS_RDS_DATABASE"]);

knex('customer').insert({
  github: process.env["CIRCLE_USERNAME"],
});
