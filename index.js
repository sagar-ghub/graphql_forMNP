const { createHandler } = require("graphql-http/lib/use/express");
const { schema } = require("./graphqlSchema");
const express = require("express"); // yarn add express

// Create a express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/rkit", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.all("/graphql", createHandler({ schema }));

app.listen({ port: 4000 });
console.log("Listening to port 4000");
