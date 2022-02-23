import React from "react";

const Message = ({ variant, children }) => {
  return <h3 className={`alert-${variant}`}>{children}</h3>;
};

export default Message;
