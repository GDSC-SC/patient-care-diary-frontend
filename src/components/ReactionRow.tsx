import { FaCheckCircle, FaHeart, FaThumbsUp } from 'react-icons/fa';
import '../styles/components/Box.css'
import '../styles/components/ReactionRow.css'
import { useEffect, useState } from 'react';

// clickable : reaction의 숫자를 변화시킬 수 있는지.
function ReactionBox({reactions, clickable}: {reactions: {emoji:string, count:number}[], clickable: boolean}){
    const [thumb, setThumb] = useState<number>(0);
    const [check, setCheck] = useState<number>(0);
    const [like, setLike] = useState<number>(0);
    useEffect(() => {
        reactions.forEach((emoji) => {
            if (emoji.emoji === "GOOD") {
                setThumb(emoji.count);
            } else if (emoji.emoji === "CHECK") {
                setCheck(emoji.count);
            } else if (emoji.emoji === "LOVE") {
                setLike(emoji.count);
            }
        });
    })

    return(
        <div className="FlexRow" style={{margin: '0 auto'}}>
            <div className='ReactionElements' onClick={()=>{
                    if (clickable)
                        setThumb(thumb+1);
                }}>
                <FaThumbsUp/>
                <div className='ReactionElementsSpace'/>
                <div className='ReactionNumber'>{thumb}</div>
            </div>
            <div className='ReactionElements' onClick={()=>{
                    if (clickable)
                        setCheck(check+1);
                }}>
                <FaCheckCircle/>
                <div className='ReactionElementsSpace'/>
                <div className='ReactionNumber'>{check}</div>
            </div>
            <div className='ReactionElements' onClick={()=>{
                    if (clickable)
                        setLike(like+1);
                }}>
                <FaHeart/>
                <div className='ReactionElementsSpace'/>
                <div className='ReactionNumber'>{like}</div>
            </div>
        </div>
    );
}

export function ReactionRow({reactions, clickable}: {reactions: {emoji:string, count:number}[], clickable: boolean}){
    return(
        <div className="FlexRow" style={{marginTop:'1vh'}}>
                        <div style={{flex:1}}/>
                        <div style={{flex: 3}}>
                            <ReactionBox reactions={reactions} clickable={clickable}/>
                        </div>
                        <div style={{flex:1}}/>
        </div>
    )
}