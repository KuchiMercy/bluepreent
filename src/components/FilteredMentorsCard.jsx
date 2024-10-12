/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import department from "../assets/icons/department.png";
import schoolIcon from "../assets/icons/school.png";
import verified from "../assets/icons/verified.png";

const FilteredMentorsCard = ({ filteredMentors }) => {
  return (
    <div className=" ">
      {filteredMentors.map(({ id, fullName, image, religion, school }) => (
        <Link key={id} to={`/mentor/${id}`} className="">
          <div className="flex items-center gap-3 my-5">
            <img src={image} alt="" className="rounded-full h-24 w-24" />
            <div>
              <p className=" font-semibold my-3">
                {fullName}
                <img src={verified} alt="" className="inline" />
              </p>
              <div className="flex text-primary gap-1 font-semibold text-xs">
                <img src={schoolIcon} alt="" width={20} /> <p>{school}</p>
              </div>
              <div className=" flex text-xs gap-1  text-primary font-semibold">
                <img src={department} alt="" width={20} />
                <p> {religion}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FilteredMentorsCard;
