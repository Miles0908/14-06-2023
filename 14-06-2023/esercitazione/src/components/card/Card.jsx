import "./index.css";
const Card = ({ props }) => {


  return (
    <div className="Card">
      <h4 className="Card__text">TO DO: {props.todo}</h4>
      <p className="Card__id">To-do's id: {props.id}</p>
      <p className="Card__id">User's id: {props.userId}</p>
    
      <span className="check-label">
        {props.completed ? "Did: " : "To do: "}
        {console.log(props.completed)}
        <input
          type="checkbox"
          name="check"
          id="Card__check"
          checked={props.completed}

        />
      </span>

      <span className="Card__info--like">❤️🧡💚🤎💜</span>
      
      
    </div>
  );
};
export default Card;
