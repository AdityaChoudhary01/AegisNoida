import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  type: { type: String, enum: ["General", "Alert", "Emergency"], default: "General" },
  isSOS: { type: Boolean, default: false },
  sosId: { type: String, required: false },
  time: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

// Using a unique model name "AegisNotification" to avoid conflicts
export default mongoose.models.AegisNotification || mongoose.model("AegisNotification", NotificationSchema);
