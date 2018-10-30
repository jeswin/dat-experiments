#!/usr/bin/env node

var swarm = require("discovery-swarm");

var sw = swarm();

sw.listen(process.argv[2] || 10000);
sw.join("ubuntu-14.04"); // can be any id/name/hash

sw.on("connection", function(connection: any) {
  console.log("found + connected to peer");
});
