/* eslint-disable react/prop-types */
import success from "../assets/icons/success.png";
const AcceptWardRequestModal = ({ onClose, isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center md:justify-normal z-50">
      <div
        onClick={onClose}
        className="absolute inset-0  bg-black opacity-50"
      ></div>
      <div className="flex items-center justify-center bg-white shadow-lg rounded-lg w-[80%] md:mx-auto  md:w-[40%] h-auto z-10 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <img src={success} alt="" />
          <p className="font-semibold my-3">Accept Ward Request?</p>
          <p className="text-sm text-center mb-3">
            We&apos;ll send an email to their guardian telling them of your
            decision to mentor their ward. Payment would be made shortly after.
          </p>
          <button
           
            className="bg-primary text-white w-full my-3 py-2 rounded cursor-not-allowed"
          >
            Accept
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-primary w-full mb-3 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptWardRequestModal;
