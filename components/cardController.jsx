import style from "../styles/CardController.module.css"

export default function CardController(props) {
    return (
      <div className={style.CardController}>
        <button className={`btn btn-outline-primary fw-semibold overflow-hidden px-1 ${style.customizedButton}`} onClick={props.addNewTaskList}>+ New List</button>
      </div>
    );
}