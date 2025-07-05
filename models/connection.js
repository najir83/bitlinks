// models/shortUrl.js

import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "message is required"],
  },
  message:{
     type: String,
    required: [true, "message is required"],
  }
});

// Prevent model overwrite issue in dev
export default mongoose.models.URL || mongoose.model("URL", URLSchema);
