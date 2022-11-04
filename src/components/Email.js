import emailjs from "@emailjs/browser";
import { Email_Services, TemplateID, PublicKey } from "../config";
const sendMessage = (e) => {
  e.preventDefault();

  emailjs.sendForm(Email_Services, TemplateID, e.target, PublicKey).then(
    (result) => {
      console.log(result.text);
      console.log("message send");
    },
    (error) => {
      console.log(error.text);
    }
  );
  e.target.reset();
};
export default sendMessage;
