const mongoose = require("mongoose")

const locaisSchema = new mongoose.Schema(
    {
        nome:{
            type: String,
            required: true,
            unique: true,
        },
        dataDaOcorrência:{
            type: String,
            required: true,
        
        },
        tipoDeCrime: {
            type: String,
            required: true,
        },
        bairro: {
            type: String,
            required: true,
        },
       
    }
);

const Model = mongoose.model("locais",locaisSchema);

module.exports = Model 