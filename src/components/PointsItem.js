const PointsItem = (props) => {
  return (
    <div>
      <img src={props.point.image} alt="championship" />
      <p>{props.point.championship}</p>
    </div>
  );
};
export default PointsItem;
