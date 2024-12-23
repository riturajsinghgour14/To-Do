const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    title: {
        type : String,
        require:[true, "Please Fill Title"],
    },
    description : {
        type : String,
        require:[true, "Please Fill Description"],
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Todo",TodoSchema);
