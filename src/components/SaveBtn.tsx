import { FaSave } from "react-icons/fa";

export function SaveBtn(){
    return(
        <button style={{border: '0', outline: '0', backgroundColor:'white'}} onClick={() => { }}>
                <div className="RoundCenter" style={{height: '5vh', width:'5vh', backgroundColor: 'grey'}}>
                    <FaSave size={'3vh'} color="white"/>
                </div>
        </button>
    );
}