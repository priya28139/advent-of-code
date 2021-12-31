const fs = require("fs");

let depth_increment_count = 0;
let depth_values = fs.readFileSync("input.txt", "utf8").split("\r\n");

for (let index = 0; index < depth_values.length - 3; index++) {
  if (parseInt(depth_values[index + 3]) > parseInt(depth_values[index])) {
    depth_increment_count++;
  }
}

console.log(depth_increment_count);
