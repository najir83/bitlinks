// models/shortUrl.js

import mongoose from "mongoose";

const URLSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "url is required"],
  },
  shorturl: {
    type: String,
    required: [true, "shorturl is required"],
  },
});

// Prevent model overwrite issue in dev
export default mongoose.models.URL || mongoose.model("URL", URLSchema);
