const SecondItem = (props) => {
  return (
    <div>
      <img src={props.point.image} alt="work" />
      <p>{props.point.work}</p>
    </div>
  );
};
export default SecondItem;
