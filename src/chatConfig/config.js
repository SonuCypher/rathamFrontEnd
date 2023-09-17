import { createChatBotMessage } from "react-chatbot-kit";
import moment from "moment";

const dates = [
    moment().format("ddd MMM do"),
    moment().add("1", "days").format("ddd MMM do"),
    moment().add("2", "days").format("ddd MMM do"),
    moment().add("3", "days").format("ddd MMM do"),
  ];


const config = {
  botName: "chatbot",
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      widget: "gotIt",
    }),
  ],
  widgets: [
    {
      widgetName: "gotIt",
      widgetFunc: (props) => {
        if (!props.actionProvider.clickGotIt) {
          return (
            <button
              className="got-it-button"
              onClick={props.actionProvider.gotItHandler}
            >
              Got It !
            </button>
          );
        }
      },
    },
    {
        widgetName:"selectDate",
        widgetFunc:(props)=>{
            if(!props.actionProvider.selectDate){
                return (
                    <div className="date-picker">
                     {dates.map((date,index)=>{
                            return(
                                <button onClick={()=>props.actionProvider.dateHandler(date)} key={index} className="dates">
                                   {date} 
                                </button>
                            )
                        })}
                    </div>
                )                                 

            }
        }
    },
  ],
};

export default config;

// widgets:[
//     {
//       widgetName: "gotItButton",
//       widgetFunc: (props) => {
//         return (
//           !props.actionProvider.gotItClicked && (
//             <button
//               className="got-it-button"
//               onClick={props.actionProvider.handleGotIt}
//             >
//               Got it!
//             </button>
//           )
//         );
//       },
//     },
//     {
//       widgetName: "ageDropdown",
//       widgetFunc: (props) => {
//         console.log(props.actionProvider.waitingForAge);
//         if (props.actionProvider.waitingForAge) {
//           const ageOptions = Array.from({ length: 23 }, (_, index) => 18 + index);
//           return (
//             <select
//               className="age-dropdown"
//               onChange={(e) => props.actionProvider.handleAgeSelect(e.target.value)}
//             >
//               <option value="">Select Age</option>
//               {ageOptions.map((age) => (
//                 <option key={age} value={age}>
//                   {age}
//                 </option>
//               ))}
//             </select>
//           );
//         } else {
//           return null;
//         }
//       },
//     },
//   ],


/*
if(!props.actionProvider.clickGotIt){
                return(
                    <div className="flex flex-wrap scroll-my-2 cursor-pointer">
                        {dates.map((date,index)=>{
                            return(
                                <div key={index} className="border border-blue-500 p-2 m-2 text-center rounded-full">
                                   {date} 
                                </div>
                            )
                        })}
                    </div>
                )
            }
*/