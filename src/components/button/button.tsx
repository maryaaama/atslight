import React from "react";
interface data {
  className: string,
  name: string
}

const Button = ({ className, name }: any) => {
  return (
    <div>
      <button
        className={`${className}`}
      >
        {name}
      </button>
    </div>
  );
};
export default Button;
