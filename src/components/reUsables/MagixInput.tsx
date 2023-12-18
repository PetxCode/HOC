import React, { FC, useEffect, useRef, useState } from "react";
import { iProps2 } from "../../utils/interface";

const MagixInput: FC<iProps2> = ({
  children,
  placeholder,
  value,
  ...props
}) => {
  const myInput: React.MutableRefObject<any> = useRef(null);
  const [state, setState] = useState<boolean>(true);

  useEffect(() => {
    if (state) {
      myInput.current.focus();
    }
  }, [state]);

  return (
    <div
      className="m-2 border rounded-md w-[350px] px-2 relative h-[50px] "
      onClick={() => {
        setState(true);
      }}
    >
      <div
        className={`absolute transition-all duration-200 text-[lightgray] ${
          state ? `top-0 text-[13px]` : "top-3"
        }
        ${!!value && "top-0 text-[13px]"}
      
      `}
      >
        {placeholder ? `${placeholder}` : "placeholder"}
      </div>
      <input
        {...props}
        ref={myInput}
        className="w-full h-full outline-none mt-1 bg-transparent "
        onBlur={() => {
          setState(false);
        }}
      />
    </div>
  );
};

export default MagixInput;
