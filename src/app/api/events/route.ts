import { mongoConnect } from "@/lib/mongoConnect";
import { TEvent } from "@/types/event";
import { NextRequest, NextResponse } from "next/server";


//all events get api
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


//create event api
export async function POST(req: NextRequest) {
  try {
    const { db } = await mongoConnect();
    const body: TEvent = await req.json();

    const { title, date, location, image, description } = body;

    // Basic validation
    if (!title || !date || !location || !image || !description) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create new event
    const newEvent = {
      title,
      date,
      location,
      image,
      description,
      createdAt: new Date(),
    };

    const result = await db.collection("events").insertOne(newEvent);

    return NextResponse.json(
      {
        success: true,
        message: "Event created successfully",
        data: { ...newEvent, id: result.insertedId },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("failed to create event", error);
    return NextResponse.json(
      { success: false, message: "Failed to create event" },
      { status: 500 }
    );
  }
}


