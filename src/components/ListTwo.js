import pointstwo from "../pointstwo";
import SecondItem from "./SecondItem";
import { Items } from "../styles";
const ListTwo = () => {
  const Arr = pointstwo.map((point) => (
    <SecondItem point={point} key={point.id} />
  ));
  return <Items>{Arr}</Items>;
};
export default ListTwo;
