import { Navigate } from "react-router-dom";
import s from "./News.module.css";

const News = (props) => {
  if (!props.store.getState().auth.isAuth) {
    return <Navigate to="/login" />;
  }
  return <div>News</div>;
};

export default News;
