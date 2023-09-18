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
      widgetName: "selectDate",
      widgetFunc: (props) => {
        if (!props.actionProvider.selectDate) {
          return (
            <div className="date-picker">
              {dates.map((date, index) => {
                return (
                  <button
                    onClick={() => props.actionProvider.dateHandler(date)}
                    key={index}
                    className="dates"
                  >
                    {date}
                  </button>
                );
              })}
            </div>
          );
        }
      },
    },
    {
        widgetName:"selectAge",
        widgetFunc: (props)=>{
            if(props.actionProvider.ageState){
                const Ages = Array.from({ length: 23 }, (_, index) => 18 + index)
                return(
                    <select className="age-selector" onChange={(e)=> props.actionProvider.clientAgeHandler(e.target.value)}>
                        <option>Select your age</option>
                        {Ages.map((age, index) =>(
                            <option key={index} value={age}>
                                {age}
                            </option>
                        ))}
                    </select>
                )
            }
        }
    }
  ],
};

export default config;
