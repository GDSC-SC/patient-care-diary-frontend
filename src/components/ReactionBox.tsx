import { FaCheckCircle, FaHeart, FaThumbsUp } from 'react-icons/fa';
import '../styles/components/Box.css'
import '../styles/components/ReactionBox.css'
import { useState } from 'react';
interface ReactionBoxProps{
    thumb: number | undefined,
    check: number | undefined,
    like: number | undefined,
}


// clickable : reaction의 숫자를 변화시킬 수 있는지.
export function ReactionBox({reactions, clickable}: {reactions: ReactionBoxProps, clickable: boolean}){
    const [thumb, setThumb] = useState<number>(reactions.thumb||0);
    const [check, setCheck] = useState<number>(reactions.check||0);
    const [like, setLike] = useState<number>(reactions.like||0);
    return(
        <div className="FlexRow">
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