import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/db";
import Notification from "@/app/models/Notification";

// Fetch all Notifications
export async function GET() {
  try {
    await dbConnect();
    const notifs = await Notification.find().sort({ timestamp: -1 });
    
    const formatted = notifs.map(n => ({
      id: n._id.toString(),
      title: n.title,
      message: n.message,
      type: n.type,
      time: n.time,
      isSOS: n.isSOS,
      sosId: n.sosId
    }));

    return NextResponse.json({ success: true, notifications: formatted });
  } catch (error) {
    console.error("Notifs GET API Error:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}

// Create a new Notification
export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    
    const newNotif = await Notification.create({
      title: body.title,
      message: body.message,
      type: body.type,
      isSOS: body.isSOS || false,
      sosId: body.sosId || null,
      time: new Date().toLocaleTimeString()
    });

    const formatted = {
      id: newNotif._id.toString(),
      title: newNotif.title,
      message: newNotif.message,
      type: newNotif.type,
      time: newNotif.time,
      isSOS: newNotif.isSOS,
      sosId: newNotif.sosId
    };

    return NextResponse.json({ success: true, notification: formatted });
  } catch (error) {
    console.error("Notifs POST API Error:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}

// Clear all Notifications
export async function DELETE() {
  try {
    await dbConnect();
    await Notification.deleteMany({});
    return NextResponse.json({ success: true, message: "Notifications cleared" });
  } catch (error) {
    console.error("Notifs DELETE API Error:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
