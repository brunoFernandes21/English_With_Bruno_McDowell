import sendEmail from "@/lib/sendEmail";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const EmailBox = () => {
  const [showGeneralError, setShowGeneralError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    emailError: "",
    generalError: "",
  });
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (nameInput === "" || emailInput === "") {
      setLoading(false);
      setShowGeneralError(true);
      setErrorMessage({
        emailError: "",
        generalError: "Please enter your name and email!",
      });
    } else {
      setTimeout(() => {
        setShowGeneralError(false);
        setErrorMessage({
          emailError: "",
          generalError: "",
        });
        setNameInput("");
        setEmailInput("");
        sendEmail(nameInput, emailInput);
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="flex flex-col gap-4 justify-between relative">
          {showGeneralError && (
            <span className="text-red-600 dark-text-white">
              {errorMessage.generalError}
            </span>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                className={`${
                  errorMessage.generalError
                    ? "border-red-600"
                    : "border-slate-300"
                } rounded-md flex-1 p-3 ps-4 text-sm text-slate-500 border border-slate-300 dark:bg-[#020817] dark:text-white dark:placeholder:text-slate-300 focus:outline-none w-full`}
                placeholder="Your name"
                value={nameInput}
                onChange={(event) => setNameInput(event?.target.value)}
              />
              {nameInput !== "" && (
                <IoMdCloseCircle
                  className="absolute cursor-pointer right-2 top-3 text-xl text-slate-500 dark:text-slate-200"
                  onClick={() => {
                    setNameInput("");
                    setShowGeneralError(false);
                    setErrorMessage({ emailError: "", generalError: "" });
                  }}
                />
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                className={`${
                  errorMessage.generalError || errorMessage.emailError
                    ? " border-red-600"
                    : "border-slate-300"
                } rounded-md  flex-1 p-3 ps-4 text-sm text-slate-500 border border-slate-300 dark:bg-[#020817] dark:text-white dark:placeholder:text-slate-300 focus:outline-none w-full`}
                placeholder="Your email"
                value={emailInput}
                onChange={(event) => setEmailInput(event?.target.value)}
              />

              {emailInput !== "" && (
                <IoMdCloseCircle
                  className="absolute cursor-pointer right-2 top-3 text-xl text-slate-500 dark:text-slate-200"
                  onClick={() => {
                    setEmailInput("");
                    setShowGeneralError(false);
                    setErrorMessage({ emailError: "", generalError: "" });
                  }}
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="rounded-md flex items-center justify-center py-[10.8px] px-4 bg-indigo-500 hover:bg-indigo-700 transition-all ease-in-out duration-500 text-center text-sm font-semibold leading-6 text-white shadow-sm cursor-pointer"
          >
            {!loading ? (
              "Yes, I want early access!"
            ) : (
              <Loader2 className="animate-spin" />
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default EmailBox;
