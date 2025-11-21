import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  shortCode: { type: String },
  longUrl: { type: String },
});

const Url = mongoose.model("shortUrl", urlSchema);

export default Url;
