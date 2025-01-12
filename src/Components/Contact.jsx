import ContactForm from "./ui/ContactForm.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Contact( { setIsOpen } ) {
  const contactInfo = [
    {
      icon: <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5" />,
      title: "Visit us",
      content: "123 Business Street, Suite 100, Islamabad, CA 94111",
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />,
      title: "Call us",
      content: "+1 (555) 123-4567",
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />,
      title: "Email us",
      content: "contact@example.com",
    },
  ];

  return (
    <div onClick={() => setIsOpen(false)} className="min-h-screen bg-grey/10 py-12 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Get in Touch</h1>
          <p className="text-lg text-grey">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-black mb-6">
              Send us a Message
            </h2>
            <ContactForm />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-black mb-6">
              Contact Information
            </h2>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue/20 rounded-lg text-blue">
                      {info.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-black">
                      {info.title}
                    </h3>
                    <p className="mt-1 text-grey">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-grey">
              <h3 className="text-lg font-medium text-black mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-grey">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
