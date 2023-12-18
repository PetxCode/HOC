import { FC } from "react";
import { diffButton } from "../../utils/choiceSizes";
import { cn } from "../../utils/cn";
import { iPropsButton } from "../../utils/interface";

const GlobalButton: FC<iPropsButton> = ({
  buttonName,
  className,
  choice,
  size,
  ...props
}) => {
  return (
    <button {...props} className={cn(diffButton({ choice, size }), className)}>
      {buttonName}
    </button>
  );
};

export default GlobalButton;
