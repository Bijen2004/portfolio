"use server";

import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactForm from "@/email/ContactForm";

const resend = new Resend(process.env.RESEND_API);


export const sendEmail = async (formData : FormData)=>{

    const message = formData.get('message');
    const senderEmail = formData.get('senderEmail');

    if(!validateString(senderEmail,500)){
        return{
            error:"Invalid sender email"
        }
    }

    if(!validateString(message,5000)){
        return{
            error:"Invalid message"
        }
    };

    let data;

    try{
        data =await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to :'shrbijen31@gmail.com',
            subject: 'Message from portfolio contact form',
            reply_to:senderEmail as string,
            react : React.createElement(ContactForm,{message:message as string,senderEmail:senderEmail as string})
        })
    }
    catch(error : unknown){ return {
        error : getErrorMessage(error)
    }
}

return {
    data,
};
};

