import { toast } from "@/hooks/use-toast";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const sendEmail = async (name: string, email: string) => {
  const templateParams = {
    user_name: name,
    user_email: email,
  };
  try {
    await emailjs.send("service_e0rwnxb", "template_alxn4o6", templateParams, {
      publicKey: "kLAn_I40p7zrS9KIb",
    });
    toast({
      title: "You have been added to the waitlist",
      description: "Thank you for showing interest in the course",
    });
  } catch (error) {
    if (error instanceof EmailJSResponseStatus) {
      console.log("Failed to send email", error);
      return;
    }
    console.log("Error sending email", error);
  }
};

export default sendEmail;
