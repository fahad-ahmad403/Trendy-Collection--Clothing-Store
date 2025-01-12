import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { validateEmail } from "../Utils/validation.js";
import InputField from "../ui/InputField.jsx";
import TextArea from "../ui/TextArea.jsx";
import Buttons from "../ui/Buttons.jsx";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { toast } from "../Utils/use-toast.js";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name ? "Name is required" : "",
      email: !validateEmail(formData.email) ? "Valid email is required" : "",
      message: !formData.message ? "Message is required" : "",
    };

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }
    toast({
      description: "Message sent successfully!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        label="Name"
        name="name"
        autoComplete="on"
        type="text"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Your Name"
      />

      <InputField
        label="Email"
        name="email"
        autoComplete="on"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="Your Email"
      />

      <TextArea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Your message here..."
      />

      <Buttons type="submit">
        Send Message
        <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4 ml-2" />
      </Buttons>
    </form>
  );
}

export default ContactForm;
