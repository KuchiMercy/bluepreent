import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import emailIcon from "../../../assets/icons/email.png";
import copyIcon from "../../../assets/icons/copy.png";
import whatsappIcon from "../../../assets/icons/whatsapp.png";

const Wards = () => {
  const [copied, setCopied] = useState(false);
  const [selectedParent, setSelectedParent] = useState(null);

  const wards = [
    {
      id: 1,
      name: "Malcom Mason",
      parent: {
        initials: "BM",
        fullName: "Brown Mason",
        phoneNumber: "0819 329 8392",
        emailAddress: "mason@gmail.com",
      },
    },
    {
      id: 2,
      name: "Adeola Omotunyi",
      parent: {
        initials: "AO",
        fullName: "Alice Omotunyi",
        phoneNumber: "0814 934 8768",
        emailAddress: "alice@gmail.com",
      },
    },
    {
      id: 3,
      name: "Amanda Olise",
      parent: {
        initials: "AO",
        fullName: "Andrew Olise",
        phoneNumber: "090 456 8709",
        emailAddress: "olise@gmail.com",
      },
    },
    {
      id: 4,
      name: "James Golden",
      parent: {
        initials: "JG",
        fullName: "Janet Golden",
        phoneNumber: "070 459 0843",
        emailAddress: "janet@gmail.com",
      },
    },
    {
      id: 5,
      name: "Tayo Adeleke",
      parent: {
        initials: "TA",
        fullName: "Tunde Adeleke",
        phoneNumber: "070 450 2309",
        emailAddress: "tunde@gmail.com",
      },
    },
    {
      id: 6,
      name: "Salvon Jack",
      parent: {
        initials: "SJ",
        fullName: "Samuel Jack",
        phoneNumber: "080 456 0843",
        emailAddress: "jack@gmail.com",
      },
    },
  ];

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleWardClick = (parentDetails) => {
    setSelectedParent(parentDetails);
  };

  return (
    <main className="mx-2 py-5 flex flex-col gap-x-5 gap-y-10 lg:flex-row">
      <section className="shadow-md p-5 lg:w-[60%]">
        <h1 className="text-lg font-semibold">Wards</h1>
        <p className="text-sm">Here&apos;s a list of all your wards</p>
        {/* Wards Lists */}
        <section className="grid grid-cols-2 text-sm gap-3 my-5">
          {wards.map((ward) => (
            <div
              key={ward.id}
              className="flex flex-col items-center justify-center border p-2 rounded cursor-pointer active:border-2 active:border-primary"
              onClick={() => handleWardClick(ward.parent)}
            >
              <div className="bg-[#f3def6] rounded-full p-2 w-fit font-medium">
                {ward.parent.initials}
              </div>
              <p className="font-semibold">{ward.name}</p>
              <p className="text-primary">Computer Science</p>
            </div>
          ))}
        </section>
      </section>
      <section className="lg:w-[40%]">
        <div className="bg-[#0a2433] p-4 rounded">
          <p className="text-white text-sm">Analytics</p>
          <div className="flex items-center gap-2 ">
            <p className="text-[40px] text-[#80d014]">26%</p>
            <p className="text-white text-sm leading-5">
              Increase in wards this <b>month</b> congrats!
            </p>
          </div>
        </div>
        <div className="border my-5 px-2">
          <div className="border-b py-3">
            <p className="text-primary font-semibold">Parent Details</p>
          </div>
          {selectedParent ? (
            <div className="flex items-center gap-5 pt-3">
              <div>
                {/* Name */}
                <div className="flex items-center gap-5 my-4">
                  <div className="border rounded-full p-2 font-semibold">
                    {selectedParent.initials}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500">Name</p>
                    <p className="text-sm">{selectedParent.fullName}</p>
                  </div>
                </div>

                <section className="flex flex-col mt-3">
                  <div className="flex items-center gap-5 my-4">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500">
                        WhatsApp number
                      </p>
                      <p className="text-sm">
                        {selectedParent.phoneNumber}{" "}
                        <img
                          src={copied ? <IoMdCheckmark /> : copyIcon}
                          alt="Copy"
                          onClick={() => handleCopy(selectedParent.phoneNumber)}
                          className="inline cursor-pointer"
                        />
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 my-4">
                    <img src={emailIcon} alt="Email" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500">
                        Email Address
                      </p>
                      <p className="text-sm">
                        {selectedParent.emailAddress}{" "}
                        <img
                          src={copied ? <IoMdCheckmark /> : copyIcon}
                          alt="Copy"
                          onClick={() =>
                            handleCopy(selectedParent.emailAddress)
                          }
                          className="inline cursor-pointer"
                        />
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-700 py-3">
              Click on a ward to see parent details.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Wards;
