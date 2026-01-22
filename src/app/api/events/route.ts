import { mongoConnect } from "@/lib/mongoConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { db } = await mongoConnect();

    //Fetch Data
    const events = await db
      .collection("events")
      .find()
      .toArray();

    return NextResponse.json({
      success: true,
      data: events,
    });
  } catch (error) {
    console.error("failed to fetch events", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch events" },
      { status: 500 }
    );
  }
}
