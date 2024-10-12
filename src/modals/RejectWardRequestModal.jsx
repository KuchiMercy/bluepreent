/* eslint-disable react/prop-types */
import notSuccess from "../assets/icons/notSuccess.png";
const RejectWardRequestModal = ({ isOpen, onClose }) => {
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
          <img src={notSuccess} alt="" />
          <p className="font-semibold my-3">Reject Ward Request?</p>
          <p className="text-sm text-center mb-3">
            Please let Bluepreent know why you’re rejecting this request for you
            to mentor the ward
          </p>
          <textarea
            className="w-full h-16 border rounded-md p-3 focus:outline-none resize:vertical"
            placeholder="Reason for rejection"
          ></textarea>
          <button className="bg-[#992929] text-white w-full my-3 py-2 rounded cursor-not-allowed">
            Reject & Send Email
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

export default RejectWardRequestModal;
