import { useState } from "react";
import whatsapp from "../assets/icons/whatsapp.png";
import phone from "../assets/icons/phone.png";
import email from "../assets/icons/email.png";
import copy from "../assets/icons/copy.png";
import { IoMdCheckmark } from "react-icons/io";

const MentorsContactDetails = () => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "0819 329 8392";
  const mobileNumber = '0819 329 8392'
  const emailAddress = "oluwakinfowose@gmail.com";

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
        // alert(`${text} copied to clipboard!`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <main>
      <div>
        <h2 className="text-lg text-primary">Mentor&apos;s Contact Details</h2>
        <hr />
        <section className="flex items-center gap-2 my-4 ">
          <img src={whatsapp} alt="" />
          <div>
            <p className="text-xs">WhatsApp number</p>
            <p className="text-sm">
              {" "}
              {phoneNumber}{" "}
              <img
                src={copied ? <IoMdCheckmark /> : copy}
                alt=""
                onClick={() => handleCopy(phoneNumber)}
                className="inline cursor-pointer"
              />
            </p>
          </div>
        </section>
        <section className="flex items-center gap-2 my-4">
          <img src={phone} alt="" />
          <div>
            <p className="text-xs">Mobile number</p>
            <p className="text-sm"> {mobileNumber}</p>
          </div>
        </section>
        <section className="flex items-center gap-2 my-4">
          <img src={email} alt="" />
          <div>
            <p className="text-xs">Email Address</p>
            <p className="text-sm">
              {" "}
              {emailAddress}{" "}
              <img
                src={copied ? <IoMdCheckmark /> : copy}
                alt=""
                onClick={() => handleCopy(emailAddress)}
                className="inline cursor-pointer"
              />{" "}
              {copied}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MentorsContactDetails;
