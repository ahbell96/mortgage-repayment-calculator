import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto p-8 min-h-screen bg-[#FFFFFF] rounded-lg">
      {children}
    </div>
  );
};

export default Container;
