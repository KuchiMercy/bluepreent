import image from "../assets/images/photo12.jpeg";
import imageTwo from "../assets/images/photo2.jpeg";
import imageThree from "../assets/images/photo3.jpeg";
import imageFour from "../assets/images/photo4.jpeg";
import imageFive from "../assets/images/photo5.jpeg";

export default function Avatar() {
  return (
    <div className="flex items-center text-sm gap-3">
      <div className="flex -space-x-1 overflow-hidden">
        <img
          alt=""
          src={image}
          className="inline-block h-8 w-8 rounded-full ring-1 ring-white"
        />
        <img
          alt=""
          src={imageTwo}
          className="inline-block h-8 w-8 rounded-full ring-1 ring-white"
        />
        <img
          alt=""
          src={imageThree}
          className="inline-block h-8 w-8 rounded-full ring-1 ring-white"
        />
        <img
          alt=""
          src={imageFour}
          className="inline-block h-8 w-8 rounded-full ring-1 ring-white"
        />
        <img
          alt=""
          src={imageFive}
          className="inline-block h-8 w-8 rounded-full ring-1 ring-white"
        />
      </div>
      <div>
        {" "}
        <p className="text-sm">Join 40,000+ users</p>
      </div>
    </div>
  );
}
