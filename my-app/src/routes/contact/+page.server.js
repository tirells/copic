import transporter from "$lib/emailSetup.server.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData()
        const email = "tspence@advocate.nyc.gov";
        const subject = "New Message from Contact Form";
        const body = "<b>Name:</b> " + formData.get("First Name") + " " + formData.get("Last Name") + "<br>" + (formData?.get("Email") ? "<b>Email:</b> " + formData.get("Email") + "<br>": "") + (formData?.get("Phone Number") ? "<b>Phone Number:</b> " + formData.get("Phone Number") + "<br>" : "") + "<b>Message:</b> " + formData.get("Message");

        let html = `<p>${body}</p>`;

        const message = {
            from: "COPIC <tspence@advocate.nyc.gov>",
            to: email,
            bcc: "",
            subject: subject,
            text: body,
            html: html,
        };

        const sendEmail = async (message) => {
            await new Promise((resolve, reject) => {
                transporter.sendMail(message, (err, info) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        resolve(info);
                    }
                });
            });
        };

        await sendEmail(message);

        if (formData.get("Email") != "") {
            const body2 = "We have received your message.";

            let html2 = `<div style="border: 5px solid #2F56A6; border-radius: 25px; padding: 10px; height: auto;">
                            <h1 style="text-align: center;">${body2}</h1>
                            <p style="text-align: center;">You can expect a response back in 1-2 business days.</p>
                         </div>`;

            const message2 = {
                from: "COPIC <tspence@advocate.nyc.gov>",
                to: formData.get("Email"),
                bcc: "",
                subject: "Your Message was Received",
                text: body2,
                html: html2,
            }

            const sendEmail2 = async (message2) => {
                await new Promise((resolve, reject) => {
                    transporter.sendMail(message2, (err, info) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            resolve(info);
                        }
                    });
                });
            };

            await sendEmail2(message2);
        }
        redirect(303, "/contact/thankyou");
    }
}