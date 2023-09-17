import React, { useState } from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import { addName, addAge } from "../store/chatSlice";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const [clickGotIt, setClickGotIt] = useState(false);
  const [selectDate, setSelectDate] = useState(false);
  const [nameState, setNameState] = useState(false);
  const [ageState, setAgeState] = useState(false);
//   const [Date,setDate]= useState("");
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
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            gotItHandler,
            dateHandler,
            clientNameHandler,
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

/* 
  const [gotItClicked, setGotItClicked] = useState(false);
  const [waitingForName, setWaitingForName] = useState(false);
  const [waitingForAge, setWaitingForAge] = useState(false);
  const dispatch = useDispatch();
 

  const handleGotIt = () => {
    const userMessage = createClientMessage("Got it.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));

    const namePrompt = createChatBotMessage("Enter your Name");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, namePrompt],
    }));

    setGotItClicked(true);
    setWaitingForName(true);
  };

  const handleName = (name) => {
    dispatch(addName(name));
    const agePrompt = createChatBotMessage("Select your age", {
      widget: "ageDropdown", // Register the ageDropdown widget
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, agePrompt],
    }));

    setWaitingForName(false);
    setWaitingForAge(true);
  };

  const handleAgeSelect = (age) => {
    const userMessage = createClientMessage(age);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));
    if (age) {
      dispatch(addAge(age));
      setWaitingForAge(false);
    }
   const botMessage = createChatBotMessage("Thank you. In 5 seconds, bot will exit")
   setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage],
  }));

  setTimeout(() => {
    
  }, 5000);
  };
 */

/*
   handleGotIt,
            handleName,
            handleAgeSelect,
            gotItClicked,
            waitingForName,
            waitingForAge,
  */
