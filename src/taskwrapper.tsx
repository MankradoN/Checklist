import { ReactNode } from "react";

interface TaskWrapperProps {
  title: string;
  children: ReactNode;
}

const Taskwrapper: React.FC<TaskWrapperProps> = ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    <div>{children}</div>
  </div>
);

export default Taskwrapper;
