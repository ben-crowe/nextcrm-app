"use server";

import { getServerSession } from "next-auth";
import { render } from "@react-email/render";

import { SendMailToAll } from "./schema";
import { InputType, ReturnType } from "./types";

import { prismadb } from "@/lib/prisma";
import resendHelper from "@/lib/resend";
import { authOptions } from "@/lib/auth";
import { createSafeAction } from "@/lib/create-safe-action";
import MessageToAllUsers from "@/emails/admin/MessageToAllUser";
import sendEmail from "@/lib/sendmail";

const handler = async (data: InputType): Promise<ReturnType> => {
  // Temporarily disabled for deployment - TODO: Implement after schema is complete
  return {
    error: "Feature temporarily disabled during QR migration.",
  };

  /*
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      error: "You must be authenticated.",
    };
  }

  //Only admin can send mail to all users
  if (!session.user.isAdmin) {
    return {
      error: "You are not authorized to perform this action.",
    };
  }

  const resend = await resendHelper();

  const { title, message } = data;

  if (!title || !message) {
    return {
      error: "Title and message are required.",
    };
  }

  try {
    const users = await prismadb.user.findMany({
      // where: {
      //   email: {
      //     //contains: "pavel@softbase.cz",
      //     equals: "pavel@softbase.cz",
      //   },
      // },
    });
    
    // All code commented out for deployment
    */
};

export const sendMailToAll = createSafeAction(SendMailToAll, handler);
