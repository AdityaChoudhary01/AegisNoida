import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/db";
import User from "@/app/models/User";

const INITIAL_ADMIN = {
  email: "admin@aegis.gov",
  password: "noida_secure_root",
  name: "Master Administrator",
  role: "Admin",
  mobileNumber: "+91 9999-000-001",
  age: 34
};

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { email, password, role, beltNumber } = body;

    // 1. Admin Verification
    if (role === "Admin") {
      if (email === INITIAL_ADMIN.email && password === INITIAL_ADMIN.password) {
        // Ensure Admin exists in DB
        let adminUser = await User.findOne({ email: INITIAL_ADMIN.email });
        if (!adminUser) {
          adminUser = await User.create(INITIAL_ADMIN);
        }
        return NextResponse.json({ success: true, message: "Admin Access Granted", user: INITIAL_ADMIN });
      }
      return NextResponse.json({ success: false, message: "Invalid Administrative Credentials" }, { status: 401 });
    }

    // 2. Police Verification (Simulated but tracked)
    if (role === "Police") {
      let policeUser = await User.findOne({ email });
      if (!policeUser) {
        policeUser = await User.create({
          name: "Officer " + (beltNumber || "Unknown"),
          email,
          password: "police_default", // Simplified for this implementation
          role: "Police",
          beltNumber
        });
      }
      return NextResponse.json({
        success: true,
        message: "Police Dispatch Authorized",
        user: { name: policeUser.name, email: policeUser.email, role: policeUser.role, beltNumber: policeUser.beltNumber }
      });
    }

    // 3. Public Verification
    const found = await User.findOne({ email, password, role: "Public" });
    if (found) {
      return NextResponse.json({
        success: true,
        message: "Identity Verified",
        user: {
          id: found._id,
          name: found.name,
          email: found.email,
          role: found.role,
          mobileNumber: found.mobileNumber,
          age: found.age
        }
      });
    }

    return NextResponse.json({ success: false, message: "Identity Not Found or Invalid Password. Please Register." }, { status: 404 });

  } catch (error) {
    console.error("Login API Error:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
