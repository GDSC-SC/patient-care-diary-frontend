import { FaSave } from "react-icons/fa";

export function SaveBtn({clickHandler}:{clickHandler?: ()=>void}){
    return(
        <button style={{border: '0', outline: '0', backgroundColor:'white'}} onClick={clickHandler}>
                <div className="RoundCenter" style={{height: '5vh', width:'5vh', backgroundColor: 'grey'}} >
                    <FaSave size={'3vh'} color="white"/>
                </div>
        </button>
    );
}