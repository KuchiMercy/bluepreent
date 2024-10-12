/* eslint-disable react/prop-types */

const GuardianSignupModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center md:justify-normal z-50">
      <div
        onClick={onClose}
        className="absolute inset-0  bg-black opacity-50"
      ></div>
      <div className="bg-white shadow-lg rounded-lg w-3/4  md:w-[40%] h-auto z-10 p-6 relative md:ml-14">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default GuardianSignupModal;
