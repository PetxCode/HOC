import { FC, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { iProps } from "../../utils/interface";

const Input: FC<iProps> = ({
  placeholder,
  className,
  basedColor,
  color,
  icon,
  icon2,
  ...props
}) => {
  const myInput: React.MutableRefObject<any> = useRef(null);
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    if (state) {
      myInput.current.focus();
    }
  }, [state]);

  return (
    <div
      className={twMerge(
        `
      flex border w-[350px] h-[50px] rounded-md m-2 px-2 items-center
      ${
        state
          ? `${color ? color : "border-blue-500"}`
          : `${basedColor ? basedColor : ""}`
      } transition-all duration-300
      `,
        className
      )}
      onClick={() => {
        setState(true);
      }}
    >
      {icon && <div>{icon}</div>}
      <input
        ref={myInput}
        {...props}
        placeholder={`${placeholder}`}
        className="w-full h-full outline-none pl-1 "
        onBlur={() => {
          setState(false);
        }}
      />
      {icon2 && <div>{icon2}</div>}
    </div>
  );
};

export default Input;
