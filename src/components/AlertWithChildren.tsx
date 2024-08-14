import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AlertWithChildren = (props: Props) => {
  return <div>{props.children}</div>;
};

export default AlertWithChildren;
