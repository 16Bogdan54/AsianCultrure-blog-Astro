import type { FC, ReactNode } from "react";
import { Flowbite } from "flowbite-react";

interface FlowbiteWrapperProps {
  children: ReactNode;
}

const FlowbiteWrapper: FC<FlowbiteWrapperProps> = ({ children }) => {
  return <Flowbite>{children}</Flowbite>;
};

export default FlowbiteWrapper;
