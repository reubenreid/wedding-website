import { BsPlusSquare } from "react-icons/bs";

export const IconButton = ({
  onClick,
  icon,
}: {
  onClick: () => void;
  icon: React.ReactNode;
}) => {
  return <button onClick={onClick}>{icon}</button>;
};
