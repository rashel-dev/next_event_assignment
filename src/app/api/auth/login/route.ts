import Jwt from "jsonwebtoken";
import { mongoConnect } from "@/lib/mongoConnect";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcrypt";

const secretKey = process.env.JWT_SECRET_KEY as string;

if(!secretKey){
    throw new Error("JWT_SECRET_KEY is not defined");
}

export async function POST(req:NextRequest){
    try{
        const {db} = await mongoConnect();
        const {email, password} = await req.json();
        
        if (!email || !password) {
            return NextResponse.json({message:"Email and password are required"}, {status:400});
        }

        const user = await db.collection('users').findOne({ email });

        if(!user){
            return NextResponse.json({message:"User not found"}, {status:404});
        }

        //compare password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return NextResponse.json({message:"Invalid password"}, {status:401});
        }

        //generate JWT token
        const token = Jwt.sign({
            id:user._id,
            email:user.email,
            role:user.role
        },secretKey,{expiresIn:"7d"});

        const response = NextResponse.json({
            message:"Login successful",
            token,
            user:{
                id:user._id,
                username:user.username,
                email:user.email,
                role:user.role
            }
        })

        return response;

    }catch(error){
        console.error("Login error:", error);
        return NextResponse.json({message:"Internal server error"}, {status:500});
    }
}