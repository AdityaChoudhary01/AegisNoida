import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/db";
import SOS from "@/app/models/SOS";

// Fetch all SOS Alerts
export async function GET() {
  try {
    await dbConnect();
    // Sort by most recent
    const sosAlerts = await SOS.find().sort({ timestamp: -1 });
    
    // Format to match the frontend expected structure
    const formatted = sosAlerts.map(alert => ({
      id: alert._id.toString(),
      lat: alert.lat,
      lng: alert.lng,
      timestamp: new Date(alert.timestamp).toLocaleTimeString(),
      userName: alert.userName,
      userEmail: alert.userEmail,
      userMobile: alert.userMobile,
      userAge: alert.userAge,
      status: alert.status
    }));

    return NextResponse.json({ success: true, sosAlerts: formatted });
  } catch (error) {
    console.error("SOS GET API Error:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}

// Trigger a new SOS
export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    
    const newSOS = await SOS.create({
      lat: body.lat,
      lng: body.lng,
      userName: body.user?.name || "Anonymous User",
      userEmail: body.user?.email || "N/A",
      userMobile: body.user?.mobileNumber || "91-XXXXXXXXXX",
      userAge: body.user?.age || 25,
      status: "Active"
    });

    const formatted = {
      id: newSOS._id.toString(),
      lat: newSOS.lat,
      lng: newSOS.lng,
      timestamp: new Date(newSOS.timestamp).toLocaleTimeString(),
      userName: newSOS.userName,
      userEmail: newSOS.userEmail,
      userMobile: newSOS.userMobile,
      userAge: newSOS.userAge,
      status: newSOS.status
    };

    return NextResponse.json({ success: true, sos: formatted });
  } catch (error) {
    console.error("SOS POST API Error:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}

// Resolve an SOS
export async function PATCH(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    
    const updated = await SOS.findByIdAndUpdate(body.id, { status: "Resolved" }, { new: true });
    if (!updated) {
      return NextResponse.json({ success: false, message: "SOS Not Found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "SOS Resolved" });
  } catch (error) {
    console.error("SOS PATCH API Error:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
