import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import five from "../assets/images/photo5.jpeg";
import six from "../assets/images/photo6.jpeg";
import twelve from "../assets/images/photo12.jpeg";
import quote from "../assets/icons/quote.png";
import rating from "../assets/icons/rating.png";

const Testimonial = () => {
  const testimonial = [
    {
      id: 1,
      image: five,
      fullName: "James Olakunle",
      comment:
        "“Bluepreent helped my child to be something in life, this was something I knew but never expected the process to be this smooth. Bluepreent is the best and best.”",
    },
    {
      id: 2,
      image: twelve,
      fullName: "Damian Shelby",
      comment:
        "“Bluepreent helped my child to be something in life, this was something I knew but never expected the process to be this smooth. Bluepreent is the best and best.”",
    },
    {
      id: 3,
      image: six,
      fullName: "Olakunle Shelby",
      comment:
        "“Bluepreent helped my child to be something in life, this was something I knew but never expected the process to be this smooth. Bluepreent is the best and best.”",
    },
  ];
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 469,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slideRight = () => {
    sliderRef.current.slickNext();
  };
  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      <main className="flex flex-col lg:flex-row bg-[#FDFDFD] py-14 px-5 ">
        {/*  */}
        <section className=" lg:w-[30%]">
          <p className="text-prmary text-primary">Testimonial</p>
          <h2 className="text-[20px] font-semibold ">
            What some parents think about mentors from bluepreent
          </h2>
          <div>
            <button
              onClick={slideLeft}
              className="focus:bg-primary focus:text-white hover:text-white hover:bg-primary p-4 rounded-full"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={slideRight}
              className="focus:bg-primary focus:text-white hover:text-white hover:bg-primary p-4 rounded-full"
            >
              <FaChevronRight />
            </button>
          </div>
        </section>

        {/*  */}
        <section className="w-full lg:w-[70%] ">
          <Slider ref={sliderRef} {...settings}>
            {testimonial.map(({ id, image, fullName, comment }) => (
              <div
                key={id}
                className="-z-50 shadow-lg text-center py-5 px-3 bg-white"
              >
                <div className="flex justify-center -translate-y-5 ">
                  <img src={image} alt="" className="rounded-full w-12 h-12 " />
                </div>
                <div className="flex justify-center">
                  <img src={quote} alt="" />
                </div>
                <div className="text-[17px] text-primary py-3">{fullName}</div>
                <div className="flex justify-center">
                  <img src={rating} alt="" />
                </div>
                <div className="text-gray-700 text-sm py-4">{comment}</div>
              </div>
            ))}
          </Slider>
        </section>
      </main>
    </>
  );
};

export default Testimonial;
