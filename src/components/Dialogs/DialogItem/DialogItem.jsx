import { NavLink } from "react-router-dom";
import s from "../Dialogs.module.css";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <div className={s.dialog__avatar}>
        <img src={props.avatar} alt="Avatar" />
      </div>
      <div className={s.dialog__name}>
        <NavLink to={path} className={props.active}>
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
