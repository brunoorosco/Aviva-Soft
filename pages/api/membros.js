const Users = require('../../db/models/MembersModels')

export default async (req, res) => {
    
 await Users.findAll().then(user => {
        //res.json({ user })
        res.statusCode = 200;
        res.json({ user });
      })
    
   
 };