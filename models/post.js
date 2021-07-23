const mongoose = require("mongoose");

let postSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

// this method is already implied such that it would be uppercase and singular
// the plural is implied as the collection
module.exports = mongoose.model("Post", postSchema);

// this method is specific and isn't implied
// module.exports = mongoose.model("Post", postSchema, "posts");
