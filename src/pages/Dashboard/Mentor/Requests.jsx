import reject from "../../../assets/icons/reject.png";
import accept from "../../../assets/icons/accept.png";
import { useState } from "react";
import AcceptWardRequestModal from "../../../modals/AcceptWardRequestModal";
import RejectWardRequestModal from "../../../modals/RejectWardRequestModal";
const Requests = () => {
  const wards = [
    {
      id: 1,
      initials: "JG",
      fullName: "James Golden",
      department: "Geology Science",
      accept: accept,
      reject: reject,
    },
    {
      id: 2,
      initials: "AO",
      fullName: "Adeola Omotunyi",
      department: "Computer Science",
      accept: accept,
      reject: reject,
    },

    {
      id: 3,
      initials: "SJ",
      fullName: "Salvon Jack",
      department: "Mathematics Science",
      accept: accept,
      reject: reject,
    },
    {
      id: 4,
      initials: "AO",
      fullName: "Adeola Omotunyi",
      department: "Computer Science",
      accept: accept,
      reject: reject,
    },
    {
      id: 5,
      initials: "TA",
      fullName: "Tayo Adeleke",
      department: "Computer Science",
      accept: accept,
      reject: reject,
    },
  ];
  const [acceptWard, setAcceptWard] = useState(false);
  const [rejectWard, setRejectWard] = useState(null);

  const handleCloseAcceptWardModal = () => {
    setAcceptWard(false);
  };

  const handleAcceptWard = (wardId) => {
    setAcceptWard(wardId);
  };

  const handleCloseRejectWardModal = () => {
    setRejectWard(null);
  };
  const handleRejectWard = (wardId) => {
    setRejectWard(wardId);
  };
  return (
    <main className="mx-2 py-5 my-10 flex flex-col gap-x-5 gap-y-10 lg:flex-row">
      {/*  */}
      <section className="shadow-md p-5 lg:w-[60%]">
        <div>
          <h2 className="text-lg font-semibold">Requests</h2>
          <p className="text-sm">Here&apos;s a list of all your requests</p>
        </div>
        {/* Ward Requests */}
        {wards.map((ward) => (
          <main key={ward.id} className="bg-[#fbfbfc] shadow py-1 px-2 my-3">
            <div className="flex items-center justify-between my-5">
              <div className="flex items-center gap-3">
                <div className="border rounded-full p-2 font-semibold bg-pink-200 text-primary">
                  {ward.initials}
                </div>
                <div>
                  <p className="font-semibold text-md">{ward.fullName}</p>
                  <p className="text-xs">{ward.department}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button onClick={() => handleAcceptWard(ward.id)} className="shadow p-1">
                  <img src={ward.accept} alt="" />
                </button>
                <button onClick={() => handleRejectWard(ward.id)} className="shadow p-1">
                  <img src={ward.reject} alt="" />
                </button>
              </div>
            </div>
          </main>
        ))}
      </section>
      <AcceptWardRequestModal
        isOpen={acceptWard}
        onClose={handleCloseAcceptWardModal}
      />
      <RejectWardRequestModal
        isOpen={!!rejectWard}
        onClose={handleCloseRejectWardModal}
      />
      {/*  */}
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
      </section>
    </main>
  );
};

export default Requests;
