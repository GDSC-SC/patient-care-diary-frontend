import { FaSave } from "react-icons/fa";
import '../styles/components/Box.css';
import '../styles/components/Icon.css';
interface DateBoxProps{
    date: Date;
    needSave: boolean|false;
}

export function DateBox(props: DateBoxProps){
    const date = props.date;
    return(
        <div className="BoxL">
            <div className="FlexRow">
                Diary of {formatDate(date)}
                <div className= 'SaveBtn' onClick={() => {

                }}>
                {props.needSave? 
                    <div className="IconRound" style={{height: '5vh', width:'5vh', backgroundColor: 'grey'}}>
                        <FaSave size={'3vh'} color="white"/></div>
                    
                : null}
                </div>
                
            </div>
        </div>
    )
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