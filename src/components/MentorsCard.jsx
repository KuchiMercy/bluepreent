/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import verified from "../assets/icons/verified.png";

// const MentorsCard = ({ mentors }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 ">
//       {mentors.map(({ id, fullName, image, religion, school }) => (
//         <motion.div key={id} whileHover={{ scale: 1.1 }}>
//           <Link
//             to={`/mentor/${id}`}
//             style={{ backgroundImage: `url(${image})` }}
//             className="h-96 w-[90%] md:h-60 bg-cover bg-center flex items-end justify-left text-white rounded-xl mx-auto relative -z-50  "
//           >
//             <div
//               className="absolute inset-0 rounded-xl"
//               style={{
//                 background:
//                   "linear-gradient(to bottom left, transparent 20%, #292A2B 100%)",
//               }}
//             ></div>
//             <div className="p-4 z-50">
//               <p className="text-sm">
//                 {fullName}
//                 <img src={verified} alt="" className="inline" />
//               </p>
//               <div className="text-xs">
//                 <p>{religion}</p>
//                 <p>{school}</p>
//               </div>
//             </div>
//           </Link>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default MentorsCard;

/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import verified from "../assets/icons/verified.png";

const MentorsCard = ({ mentors }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 ">
      {mentors.map(({ id, fullName, image, religion, school }) => (
        <motion.div key={id} whileHover={{ scale: 1.1 }}>
          <div className="relative h-96 w-[90%] md:h-60 mx-auto">
            {/* Background image with lower z-index */}
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="h-full w-full bg-cover bg-center rounded-xl absolute top-0 left-0 z-10"
            ></div>
            <div
              className="absolute inset-0 rounded-xl z-10"
              style={{
                background:
                  "linear-gradient(to bottom left, transparent 20%, #292A2B 100%)",
              }}
            ></div>

            {/* The Link with z-index lower than the navbar */}
            <Link
              to={`/mentor/${id}`}
              className="flex items-end justify-left text-white p-4 relative z-20 h-full"
            >
              <div>
                <p className="text-sm">
                  {fullName}
                  <img src={verified} alt="" className="inline" />
                </p>
                <div className="text-xs">
                  <p>{religion}</p>
                  <p>{school}</p>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MentorsCard;
