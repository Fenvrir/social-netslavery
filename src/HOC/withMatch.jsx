import React from "react";
import { useMatch } from "react-router-dom";

export const withMatch = (Component) => {
  const MatchComponent = (props) => {
    let match = useMatch("/profile/:userId/");
    return <Component {...props} match={match} />;
  };

  return MatchComponent;
};
