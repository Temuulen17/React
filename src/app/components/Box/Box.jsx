export const Card = (props) => {
  console.log(props.color, `props`);
  return (
    <div
      className="  w-[377px] h-[290px] border-2 rounded-2xl overflow-auto text-center"
      style={{ backgroundColor: props.color }}
    >
      {props.text}
      <img src={props.image} />
      {props.texts}
    </div>
  );
};
