import { FaCheckCircle, FaHeart, FaThumbsUp } from 'react-icons/fa';
import '../styles/components/Box.css'
import '../styles/components/ReactionRow.css'
import { useEffect, useState } from 'react';
import { EmojiApi } from '../services/api/EmojiApi';

export interface Emoji{
    emoji: string,
    count: number,
}

function EmojiElement({count, emojiCode, diaryId, setCount, isClicked}
        :{count:number, emojiCode: string, diaryId: number,
          setCount: React.Dispatch<React.SetStateAction<number>>, isClicked: boolean}){
        const emojiApi = new EmojiApi();
        const [clicked, setClicked] = useState<boolean>(isClicked);
        return(
            <div className='ReactionElements' onClick={async ()=>{
                if (!clicked && await emojiApi.create({ emojiCode: emojiCode, diaryId: diaryId })) {
                    setCount((count)=>(count+1));
                    setClicked(true);
                }
                else if (clicked) {
                    emojiApi.delete(diaryId, emojiCode);
                    setCount((count)=>(count-1));
                    setClicked(false);
                }
            }}>
            {emojiCode === "E001" && <FaThumbsUp style={clicked ? {color: 'skyblue'} : {color: 'black'}}/>}
            {emojiCode === "E002" && <FaHeart style={clicked ? {color: 'pink'} : {color: 'black'}}/>}
            {emojiCode === "E003" && <FaCheckCircle style={clicked ? {color: 'green'} : {color: 'black'}}/>}
            <div className='ReactionElementsSpace'/>
            <div className='ReactionNumber'>{count}</div>
            </div>
        );
    }

// clickable : reaction의 숫자를 변화시킬 수 있는지.
export function EmojiBox({diaryId, reactions, myEmojiState}
    :{diaryId: number, reactions: Emoji[], myEmojiState: string}){
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
            <EmojiElement count={good} emojiCode="E001" diaryId={diaryId} setCount={setGood} isClicked={myEmojiState==="GOOD"}/>
            <EmojiElement count={love} emojiCode="E002" diaryId={diaryId} setCount={setLove} isClicked={myEmojiState==="LOVE"}/>
            <EmojiElement count={check} emojiCode="E003" diaryId={diaryId} setCount={setCheck} isClicked={myEmojiState==="CHECK"}/>
        </div>
        </div>
            <div style={{flex:1}}/>
        </div>
    );
}