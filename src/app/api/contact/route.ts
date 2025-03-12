import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import sendEmail from "@/lib/sendMail";

export const POST = async (req: NextRequest) => {
    try {
        const { name, email, message } = await req.json();

        await Promise.all([
            prisma.contact.create({
                data: {
                    name,
                    email,
                    message,
                },
            }),
            sendEmail(name, email, message),
        ]);

        return NextResponse.json({ message: "Received data" }, { status: 200 });
    } catch (error) {
        console.error(`Error occurred, ${error}`);

        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
};
