import {
  faCheckCircle,
  faCopy,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "./Utils/use-toast.js";

export function ConfirmationPage({ setIsOpen }) {
  const [copyText, setCopyText] = useState(
    `REF-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
  );

  const copyTextHandle = () => {
    navigator.clipboard.writeText(copyText);
    toast({
      description: "Text copied: " + copyText,
    });
  };

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="min-h-screen bg-gradient-to-br from-green/50 to-blue/50 flex items-center justify-center p-4 pt-20"
    >
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <div className="mx-auto w-16 h-16 bg-green/30 rounded-full flex items-center justify-center mb-4">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="w-10 h-10 text-green bg-white rounded-full"
            />
          </div>
          <h1 className="text-2xl font-bold text-black mb-2">Thank You!</h1>
          <p className="text-black">
            Your action has been completed successfully. <br />
            Thank you for shopping with us.
          </p>
        </div>

        <div className="flex flex-col justify-center space-y-4 relative">
          <div className="bg-grey/20 rounded-lg p-4">
            <p className="text-sm text-black">Reference Number</p>
            <p className="font-mono text-black font-medium">{copyText}</p>
            <FontAwesomeIcon
              icon={faCopy}
              onClick={copyTextHandle}
              className="text-black/50 xl:block lg:block md:block sm:hidden xs:hidden hover:text-black/80 xs:text-[24px] xl:text-[16px] lg :text-[16px] md:text-[16px] absolute top-4 right-4 cursor-pointer"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/"
              className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium
              text-white bg-green hover:bg-green/90"
            >
              <FontAwesomeIcon icon={faHome} className="w-4 h-4 mr-2" />
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
