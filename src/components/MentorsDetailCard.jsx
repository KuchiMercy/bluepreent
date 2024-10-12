import { useState } from "react";
import shield from "../assets/icons/Shield.png";
import lock from "../assets/icons/Lock.png";
import MentorPaymentModal from "../modals/MentorPaymentModal";
import MentorsContactDetails from "./MentorsContactDetails";

export const mentorFee = "24,850";

const MentorsDetailCard = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [showContactDetails, setShowContactDetails] = useState(false);
  const handleOpenPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };
  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };
  const handlePaymentSuccess = () => {
    setIsPaymentModalOpen(false);
    setShowContactDetails(true);
  };

  const data = [
    { id: 1, image: shield, text: "Verified, Reliable Mentor" },
    { id: 2, image: shield, text: "Whatsapp & Mobile Numbers" },
    { id: 3, image: shield, text: "V1 - 1 Sessions" },
    { id: 4, image: shield, text: "Flat fee, no hidden costs" },
  ];

  return (
    <div>
      <main>
        <div className="shadow-xl py-6 px-10">
          {showContactDetails ? (
            <MentorsContactDetails />
          ) : (
            <>
              {" "}
              <p className="text-lg text-gray-700">Reserve this mentor</p>
              <p className="text-primary text-xl font-semibold my-1">
                &#8358;{mentorFee}
              </p>
              <hr className="my-5" />
              <ul className="">
                {data.map(({ image, text, id }) => (
                  <li key={id} className="flex items-center gap-2 py-1 ">
                    <img src={image} alt="" />
                    <p className="text-sm text-gray-700">{text}</p>
                  </li>
                ))}
              </ul>
              <div
                onClick={handleOpenPaymentModal}
                className="flex items-center gap-2 justify-center bg-primary py-2 rounded my-3"
              >
                <img src={lock} alt="" />
                <button className=" text-white text-sm">
                  Reveal Contact Details
                </button>
              </div>
              {/* Modal */}
              <MentorPaymentModal
                isOpen={isPaymentModalOpen}
                onClose={handleClosePaymentModal}
                onPaymentSuccess={handlePaymentSuccess}
              />
              {showContactDetails ? <MentorsContactDetails /> : null}
              <p className="text-sm text-gray-700 text-center">
                Meetup should only take place at school
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default MentorsDetailCard;
