const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, `{PATH} is required.`],
            minlength: [3, "Name must be at least 3 characters"]
        },

        type: {
            type: String,
            required: [true, `{PATH} is required.`],
            minlength: [3, "Type must be at least 3 characters"],
        },

        description: {
            type: String,
            required: [true, `{PATH} is required.`],
            minlength: [3, "Description must  be at least 3  characters"]
        },

        firstSkill: {
            type: String,
        },

        secondSkill: {
            type: String,
        },

        thirdSkill: {
            type: String,
        },
        
        likes: {
            type: Number
        }
    }
)

const Pet = mongoose.model("Pet", PetSchema);

module.exports = { Pet: Pet };