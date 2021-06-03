import points from "../points";
import PointsItem from "./PointsItem";
import { Items } from "../styles";
const PointsList = () => {
  const newArray = points.map((point) => (
    <PointsItem point={point} key={point.id} />
  ));
  return <Items>{newArray}</Items>;
};
export default PointsList;
