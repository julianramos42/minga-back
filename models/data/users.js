import User from "../User.js";
import 'dotenv/config.js'
import '../../config/database.js'

let users = [
    {   
        name: "julian",
        mail: "alejandro@mh.com.ar",
        password: "dada",
    }
]

User.insertMany(users)