import mongoose from "mongoose";

const SOSSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "AegisUser", required: false },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  status: { type: String, enum: ["Active", "Resolved"], default: "Active" },
  timestamp: { type: Date, default: Date.now },
  userName: { type: String, default: "Anonymous User" },
  userEmail: { type: String, default: "N/A" },
  userMobile: { type: String, default: "91-XXXXXXXXXX" },
  userAge: { type: Number, default: 25 }
}, { timestamps: true });

// Using a unique model name "AegisSOS" to avoid conflicts
export default mongoose.models.AegisSOS || mongoose.model("AegisSOS", SOSSchema);
