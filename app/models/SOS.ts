import mongoose from "mongoose";

const SOSSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "AegisUser", required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  status: { type: String, enum: ["Active", "Resolved"], default: "Active" },
  timestamp: { type: Date, default: Date.now },
  metadata: {
    userName: String,
    userMobile: String,
    userAge: Number
  }
});

// Using a unique model name "AegisSOS" to avoid conflicts
export default mongoose.models.AegisSOS || mongoose.model("AegisSOS", SOSSchema);
