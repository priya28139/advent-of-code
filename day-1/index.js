const fs = require("fs");

let depth_increment_count = 0;
let depth_values = fs.readFileSync("input.txt", "utf8").split("\r\n");

for (let index = 1; index < depth_values.length; index++) {
  if (parseInt(depth_values[index]) > parseInt(depth_values[index - 1])) {
    depth_increment_count++;
  }
}

console.log(depth_increment_count);
