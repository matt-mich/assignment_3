var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB, { useNewUrlParser: true } );
mongoose.set('useCreateIndex', true);

// user schema
var MovieSchema = new Schema({
    title: { type: String, required: true, index: { unique: true }},
    year: { type: String, required: true},
    genre: { type: String, required: true},
    actor_char_1: { type: [String,String], required: true},
    actor_char_2: { type: [String,String], required: true},
    actor_char_3: { type: [String,String], required: true},
});

// hash the password before the user is saved
MovieSchema.pre('save', function(next) {
    next();
});

// return the model
module.exports = mongoose.model('Movie', MovieSchema);