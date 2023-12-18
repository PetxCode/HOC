import { cva } from "class-variance-authority";

export const diffButton = cva(
  "border rounded-md m-2 transition-all duration-200",
  {
    variants: {
      choice: {
        pry: "px-4 py-2 ",
        sec: " px-6 py-3  bg-green-500 hover:bg-green-600 text-white ",
        danger: "px-4 py-2 bg-red-500 hover:bg-red-600 text-white ",
      },
      size: {
        sm: "text-[12px]",
        md: "text-[18px]",
        lg: "text-[25px]",
        lg2: "text-[15px] w-[90%]",
      },
    },
    defaultVariants: {
      choice: "pry",
      size: "sm",
    },
  }
);
