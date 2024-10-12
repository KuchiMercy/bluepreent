/* eslint-disable react/prop-types */
import Avatar from "../components/Avatar";
import stars from "../assets/images/Stars.png";
import mail from "../assets/icons/Message.png";

const FormCard = ({ headingText }) => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-primary text-white w-[50%] my-5 rounded-lg hidden relative md:block">
      <div className="w-[85%] mx-auto">
        <div className="my-20">
          <img src={stars} alt="" className="my-5 animate-pulse" />
          <h1 className="font-medium text-[50px] leading-10 my-5">
            {headingText}
          </h1>
          <div className="leading-6">
            <p>Create a free account and get full access to all features. </p>
            <p>Get started in 2 minutes.</p>
          </div>

          <div className="my-5">
            <Avatar />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-4 py-3 text-xs">
          <p>&copy; Bluepreet {year}</p>
          <p>
            <img src={mail} alt="" className="inline pr-1" />
            hello@blueepreet.ng
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
