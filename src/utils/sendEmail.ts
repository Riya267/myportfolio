import emailjs from "@emailjs/browser";
import { RefObject } from "react";


const sendEmail = async (formRef: RefObject<HTMLFormElement>) => {
    if(formRef.current){
        emailjs
        .sendForm(
            process.env.EMAIL_SERVICE_KEY,
            process.env.EMAIL_TEMPLATE_KEY,
            formRef.current,
            process.env.EMAIL_PUBLIC_KEY,
        )
        .then(
            (result:any) => {
            console.log(result.text);
            console.log("message sent");
            },
            (error:any) => {
            console.log("error.text", error.text);
            }
        );
    }
};

export default sendEmail;
