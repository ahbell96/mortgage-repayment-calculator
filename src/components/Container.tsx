import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div
      className="container mx-auto bg-[#FFFFFF] "
      style={{ borderRadius: "30px" }}
    >
      {children}
    </div>
  );
};

export default Container;
