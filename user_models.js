const { readFileSync } = require("fs");

const loadUser = ()=> JSON.parse(readFileSync('vnl2022.json'))
    
module.exports = {loadUser}