import s from "../Dialogs.module.css";

const Message = (props) => {
  const message =
    props.id % 2 === 0 ? (
      <div className={s.message__owner}>
        <div>
          <img src={props.avatar} alt="Avatar" />
        </div>
        <div className={s.message}>{props.message}</div>
      </div>
    ) : (
      <div className={s.message__friend}>
        <div className={s.message}>{props.message}</div>
        <div>
          <img src={props.avatar} alt="Avatar" />
        </div>
      </div>
    );

  return <>{message}</>;
};

export default Message;
