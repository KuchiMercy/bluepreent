/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import MentorAddWardModal from "./MentorAddWardModal";

const MentorPaymentModal = ({ isOpen, onClose, onPaymentSuccess }) => {
  const [isAddWardModalOpen, setIsAddWardModalOpen] = useState(false);
  const [wards, setWards] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const MAX_WARDS = 2;
  const BASE_AMOUNT = 24850;
  if (!isOpen) return null;

  const handleCloseAddWardModal = () => {
    setIsAddWardModalOpen(false);
  };

  const handleAddWard = (newWard) => {
    if (
      newWard &&
      newWard.wardFirstName &&
      newWard.wardLastName &&
      newWard.department
    ) {
      setWards((prevWards) => [...prevWards, newWard]);
    }
  };
  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const lastInitial = lastName.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
  };
  const handleCancel = () => {
    setIsAddWardModalOpen(false);
    setWards([]);
  };
  // Payment Function
  const handlePay = () => {
    setIsProcessing(true);
    const totalAmount = wards.length * BASE_AMOUNT;
    console.log(`Total amount: #${totalAmount} for wards:`, wards);
    //  a delay for the payment process
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccessModalOpen(true);
      setWards([]);
      onPaymentSuccess();
    }, 2000);
  };
  // Calculate total amount based on the number of wards
  const totalAmount = wards.length * BASE_AMOUNT;

  // Button text based on the number of wards
  const payButtonText = isProcessing
    ? "Processing..."
    : `Pay $${totalAmount} for ${wards.length} ward${
        wards.length > 1 ? "s" : ""
      }`;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black opacity-50 "
      ></div>
      <div className="bg-white shadow-lg rounded-lg w-3/4  md:w-[40%] h-auto z-10 p-6 relative md:ml-14">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <h2 className="font-semibold text-xl">Select ward(s)</h2>
        <p className="text-sm">Who do you want this mentor to mentor</p>
        <main className="grid grid-cols-2 gap-4 my-10">
          {wards.length >= MAX_WARDS && (
            <p className="text-red-500 text-sm col-span-2 flex items-center justify-center p-2 gap-1 border border-primary bg-tertiary rounded-sm">
              Maximum amount of wards reached.
            </p>
          )}

          {wards.length > 0 ? (
            wards.map((ward, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border border-gray-300 rounded-md px-2 py-3 my-3 bg-gray-200"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white">
                  {getInitials(ward.wardFirstName, ward.wardLastName)}
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{`${ward.wardFirstName} ${ward.wardLastName}`}</h3>

                  <p className="text-xs py-1">{ward.department}</p>
                </div>
              </div>
            ))
          ) : (
            <div
              className="flex items-center gap-2  px-2 py-3 border border-gray-300 rounded text-gray-500 text-sm cursor-pointer"
              onClick={() => setIsAddWardModalOpen(true)}
            >
              <FaPlus />
              <span>Add a Ward</span>
            </div>
          )}

          {/* Add another ward button only if under the limit */}
          {wards.length < MAX_WARDS && (
            <div
              className="flex items-center gap-2  px-2 py-2 border border-gray-300 rounded text-gray-500 text-sm cursor-pointer "
              onClick={() => setIsAddWardModalOpen(true)}
            >
              <FaPlus />
              <span>Add a Ward</span>
            </div>
          )}
        </main>
        <button
          onClick={handlePay}
          className={`w-full border border-gray-300 text-primary my-2 flex items-center justify-center py-2 text-sm rounded ${
            wards.length === 0 || isProcessing
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-primary text-white"
          }`}
          disabled={wards.length === 0 || isProcessing}
        >
          {payButtonText}
        </button>
        <button
          onClick={handleCancel}
          className="w-full border border-gray-300 text-primary my-2 flex items-center justify-center py-2 text-sm rounded"
        >
          Cancel
        </button>
      </div>
      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: 60 }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white shadow-lg rounded-lg w-3/4 md:w-[30%] p-6 z-10">
            <h2 className="text-lg font-semibold mb-4">Payment Successful</h2>
            <p>Your payment has been processed successfully!</p>
            <button
              onClick={() => {
                setIsSuccessModalOpen(false);
                onClose();
              }}
              className="mt-4 w-full bg-primary text-white py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/*  */}
      <MentorAddWardModal
        isOpen={isAddWardModalOpen}
        onClose={handleCloseAddWardModal}
        onAddWard={handleAddWard}
      ></MentorAddWardModal>
    </div>
  );
};

export default MentorPaymentModal;
