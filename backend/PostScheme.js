import mongoose from 'mongoose'
  
  const Schema = new mongoose.Schema({
    rank: { type: String, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    date_of_injury: { type: String, required: true },
    type_of_injury: { type: String, required: true },
    current_temp: { type: Number, required: true },
    status: { type: String, required: true }
  },{
    versionKey:false
  });

export default Schema