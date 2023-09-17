
import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if(actions.nameState){
        actions.clientNameHandler(message)
    }
   
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

  export default MessageParser;


  /*
 if (actions.waitingForName) {
      actions.handleName(message);
    } else if (actions.waitingForAge) {
      actions.handleAgeSelect(message);
    } else {
      // Handle other user responses here
      // For example, ask for additional information
    }
  */

