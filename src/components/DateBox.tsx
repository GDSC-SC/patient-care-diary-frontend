import { FaSave } from "react-icons/fa";
import '../styles/components/Box.css';
import '../styles/components/Round.css';
interface DateBoxProps{
    date: Date;
    needSave: boolean|false;
}

export function DateBox(props: DateBoxProps){
    const date = props.date;
    return(
            <div className="FlexRow">
                <h2>Diary of {formatDate(date)}</h2>
                <div className= 'SaveBtn' onClick={() => {
                }}>
                {props.needSave? 
                    <div className="RoundCenter" style={{height: '5vh', width:'5vh', backgroundColor: 'grey'}}>
                        <FaSave size={'3vh'} color="white"/></div>
                : null}
                </div>
            </div>
    );
}


// Date를 YYYY.MM.DD 형태의 string 형태로 반환하는 함수
function formatDate(date: Date){
    const month = date.getMonth();
    const day = date.getDate();
    var result = `${date.getFullYear()}.`;
    
    if(month <10)
        result += '0';
    result += `${month}.`;

    if(day <10)
        result += '0';
    result += `${day}`;


    return(result);
}