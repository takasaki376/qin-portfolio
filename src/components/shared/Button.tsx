import { FC, ReactNode } from "react";

type BottonProps = {
  children: ReactNode;
};

export const Button: FC<BottonProps> = (props) => {
  return <button className="rounded-full bg-black">{props.children}</button>;
};
