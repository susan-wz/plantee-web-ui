import FixedButton from "./styles"
import { Icon } from "../index"
import { Link } from "react-router-dom";

export default function FixedAddButon( ) {

  return (
    <FixedButton>
      <Link to="/add_plants">
        <Icon symbol="addFilled" size={48} colour="primary" />
      </Link>
    </FixedButton>
  );
}