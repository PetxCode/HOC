import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { diffButton } from "./choiceSizes";
import { VariantProps } from "class-variance-authority";

export interface iProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  color?: string;
  basedColor?: string;
  icon?: ReactNode;
  icon2?: ReactNode;
}

export interface iProps2 extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export interface iPropsButton
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof diffButton> {
  buttonName?: string;
}

export interface iPropsMovie {
  searchMovie: Array<{}>;
}
