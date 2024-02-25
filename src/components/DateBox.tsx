import '../styles/components/Box.css';
import '../styles/components/Round.css';
import { SaveBtn } from "./SaveBtn";
interface DateBoxProps{
    date: Date|number[]|String,
    needSave: boolean|false,
    clickHandler?: () => void,
}

export function DateBox(props: DateBoxProps){
    const date = props.date;
    return(
            <div className="FlexRow">
                <h2>Diary of {formatDate(date)}</h2>
                {props.needSave? <SaveBtn clickHandler={props.clickHandler||undefined}/>: null}
            </div>
    );
}


// Date를 YYYY.MM.DD 형태의 string 형태로 반환하는 함수
function formatDate(date: Date|number[]|String){
    if (date instanceof Array){
        return `${date[0]}.${date[1]}.${date[2]}`;
    } else if (typeof date === 'string'){
        return date.slice(0, 4) + '.' + date.slice(4, 6) + '.' + date.slice(6, 8);
    } else if (date instanceof Date) {
        return `${date.getFullYear()}.${(date.getMonth()+1).toString().padStart(2, '0')}.${(date.getDate()).toString().padStart(2, '0')}`;
    }
}