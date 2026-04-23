import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number },
  mobileNumber: { type: String },
  role: { type: String, enum: ["Public", "Police", "Admin"], default: "Public" },
  beltNumber: { type: String }, 
  createdAt: { type: Date, default: Date.now }
});

// Using a unique model name "AegisUser" to avoid conflicts
export default mongoose.models.AegisUser || mongoose.model("AegisUser", UserSchema);
