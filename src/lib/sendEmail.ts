import { toast } from "@/hooks/use-toast";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const sendEmail = async (name: string, email: string) => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_APP_PRIVATE_ID;

  const templateParams = {
    user_name: name,
    user_email: email,
  };
  try {
    await emailjs.send(
      serviceId as string,
      templateId as string,
      templateParams,
      {
        publicKey: publicKey as string,
      }
    );
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
