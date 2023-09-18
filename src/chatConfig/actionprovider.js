import React, { useState } from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import { addName, addAge , toggleChatBot } from "../store/chatSlice";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const [clickGotIt, setClickGotIt] = useState(false);
  const [selectDate, setSelectDate] = useState(false);
  const [nameState, setNameState] = useState(false);
  const [ageState, setAgeState] = useState(false);
const dispatch = useDispatch()

  const gotItHandler = () => {
    const clientMessage = createClientMessage("Got it!");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage],
    }));
    setClickGotIt(true);

    const dateSelector = createChatBotMessage("Pick a slot!", {
      widget: "selectDate",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, dateSelector],
    }));
  };

  const dateHandler = (date)=>{
    const clientMessage = createClientMessage(date)
    setState((prev) => ({
        ...prev,
        messages: [...prev.messages, clientMessage],
      }));
      setSelectDate(true)

      const clientName = createChatBotMessage("Enter your name",{
        delay:1000,
      })
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, clientName],
      }));
      setNameState(true)
  }
  const clientNameHandler=(client)=>{
    dispatch(addName(client))
    const ageSelect = createChatBotMessage("Select your age",{
        widget:"selectAge"
    })
    setState((prev) => ({
        ...prev,
        messages: [...prev.messages, ageSelect],
      }));
      setNameState(false)
      setAgeState(true)
  }

  const clientAgeHandler = (age) => {
    const clientMessage = createClientMessage(age);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage],
    }));
    if (age) {
      dispatch(addAge(age));
      setAgeState(false);
    }
   const exitMessage = createChatBotMessage("Thank you. In 5 seconds, bot will exit")
   setState((prev) => ({
    ...prev,
    messages: [...prev.messages, exitMessage],
  }));


   let timer = 5
  const exitFunction=()=> {
     const timeMessage = createChatBotMessage(`...${timer}`)
   setState((prev) => ({
     ...prev,
     messages: [...prev.messages, timeMessage],
   }));
   timer--;
   if(timer < 0){
     clearInterval(interval)
     dispatch(toggleChatBot(false))
   }}
const interval = setInterval(exitFunction, 1000)
  
}

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            gotItHandler,
            dateHandler,
            clientNameHandler,
            clientAgeHandler,
            clickGotIt,
            selectDate,
            nameState,
            ageState
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;


