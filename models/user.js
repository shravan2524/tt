var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	screw: Number,
    paperBag: Number,
    clamp: Number,
    glass: Number
}),

User = mongoose.model('User', userSchema);

module.exports = User;