import "./styles.css";

const Button = (props) => {
  return (
    <div className="header">
      
      <button disabled={props.disabled} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
};

export { Button };
