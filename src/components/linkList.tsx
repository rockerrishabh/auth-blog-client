import { Link } from "react-router-dom";

type Props = {
  to: string;
  name: string;
};

function LinkList({ to, name }: Props) {
  return (
    <li className="hover:scale-105">
      <Link to={to} className="hover:text-teal-500">
        {name}
      </Link>
    </li>
  );
}

export default LinkList;
