import cstyle from "../styles/CardController.module.css";

export default function CardController(props) {
    return (
    <div className={cstyle.CardController}>
      <button className={`btn btn-outline-primary fw-semibold overflow-hidden px-1 ${cstyle.customizedButton}`} onClick={props.addNewTaskList}> + New List </button>
    </div>
    );
}