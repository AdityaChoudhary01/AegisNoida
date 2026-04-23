import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/db";
import User from "@/app/models/User";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    if (body.role === "Admin") {
      return NextResponse.json({ success: false, message: "Action Restricted: Cannot create Admin accounts." }, { status: 403 });
    }

    const existingUser = await User.findOne({ email: body.email });
    if (existingUser) {
      return NextResponse.json({ success: false, message: "Identity already exists in Matrix." }, { status: 400 });
    }

    const newUser = await User.create(body);

    return NextResponse.json({
      success: true,
      message: "Identity Established Successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        beltNumber: newUser.beltNumber,
        mobileNumber: newUser.mobileNumber,
        age: newUser.age
      }
    });

  } catch (error) {
    console.error("Register API Error:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
