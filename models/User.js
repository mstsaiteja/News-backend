const Mongoose = require('mongoose')
const Schema = Mongoose.Schema;

const UsersSchema = new Schema({
    name: String,
    username: String,
    password: String
})

const UserModel = Mongoose.model('users',UsersSchema);

module.exports = UserModel;