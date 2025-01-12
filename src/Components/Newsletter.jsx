import { useState } from "react";
import { useToast } from "./Utils/use-toast.js";
import { Toaster } from "./ui/toaster.jsx";

function Newsletter() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const { toast } = useToast();

  function submitNewsletter(e) {
    e.preventDefault();

    if (input.length === 0 || !(input.includes("@gmail.com"))) {
      setError("error");
    } else {
      setInput("");
      setError(null);
      toast({
        description: "Newsletter successfully subscribed! 🎉",
      });
    }
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 bg-grey/15">
      <div className="bg-purple rounded-2xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight text-orange sm:text-4xl">
              Join Our Newsletter
            </h2>
            <p className="mt-4 text-lg text-white">
              Subscribe to get special offers, free giveaways, and exclusive
              deals.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-8 relative">
            <form className="sm:flex">
              <input
                type="email"
                required
                value={input}
                onChange={(e) => setInput(e.target.value)}
                id="input"
                className="w-full px-5 py-3 text-base text-black placeholder-grey border border-transparent rounded-md outline-none"
                placeholder="Enter your email"
              />
              {error && (
                <p className=" absolute top-14 text-xs text-red font-bold">
                  *Please enter valid email.
                </p>
              )}
              <button
                type="submit"
                onClick={submitNewsletter}
                className="mt-3 xs:mt-8 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange bg-purple hover:bg-orange hover:text-purple sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Subscribe
              </button>
              <Toaster />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
