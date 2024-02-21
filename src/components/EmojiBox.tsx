import { FaCheckCircle, FaHeart, FaThumbsUp } from 'react-icons/fa';
import '../styles/components/Box.css'
import '../styles/components/ReactionRow.css'
import { useEffect, useState } from 'react';
import { EmojiApi } from '../services/api/EmojiApi';

export interface Emoji{
    emoji: string,
    count: number,
}

function EmojiElement({count, emojiCode, clickable, diaryId, setCount}
    :{count:number, emojiCode: string, clickable: boolean, diaryId: number, setCount: React.Dispatch<React.SetStateAction<number>>}){
    const emojiApi = new EmojiApi();
    return(
        <div className='ReactionElements' onClick={async ()=>{
            if (clickable && await emojiApi.create({ emojiCode: emojiCode, diaryId: diaryId }))
                setCount((count)=>(count+1));
        }}>
        {emojiCode === "E001" && <FaThumbsUp/>}
        {emojiCode === "E002" && <FaHeart/>}
        {emojiCode === "E003" && <FaCheckCircle/>}
        <div className='ReactionElementsSpace'/>
        <div className='ReactionNumber'>{count}</div>
        </div>
    );
}

// clickable : reaction의 숫자를 변화시킬 수 있는지.
export function EmojiBox({diaryId, reactions, clickable}: {diaryId: number, reactions: Emoji[], clickable: boolean}){
    const [good, setGood] = useState<number>(0);
    const [love, setLove] = useState<number>(0);
    const [check, setCheck] = useState<number>(0);
    useEffect(() => {
        reactions.forEach((emoji) => {
            if (emoji.emoji === "GOOD") {
                setGood(emoji.count);
            } else if (emoji.emoji === "LOVE") {
                setLove(emoji.count);
            } else if (emoji.emoji === "CHECK") {
                setCheck(emoji.count);
            }
        });
    })

    return(
        <div className="FlexRow" style={{marginTop:'1vh'}}>
        <div style={{flex:1}}/>
        <div style={{flex:3}}>
        <div className="FlexRow" style={{margin: '0 auto'}}>
            <EmojiElement count={good} emojiCode="E001" clickable={clickable} diaryId={diaryId} setCount={setGood}/>
            <EmojiElement count={love} emojiCode="E002" clickable={clickable} diaryId={diaryId} setCount={setLove}/>
            <EmojiElement count={check} emojiCode="E003" clickable={clickable} diaryId={diaryId} setCount={setCheck}/>
        </div>
        </div>
            <div style={{flex:1}}/>
        </div>
    );
}