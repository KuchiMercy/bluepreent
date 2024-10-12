/* eslint-disable react/prop-types */
const Button = ({ children, type }) => {
  return (
    <div>
      <button
        type={`${type}`}
        className={`text-sm rounded-3xl font-semibold hover:scale-105 px-6 py-2 text-white bg-primary `}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
