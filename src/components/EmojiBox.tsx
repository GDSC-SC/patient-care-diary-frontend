import { FaCheckCircle, FaHeart, FaThumbsUp } from 'react-icons/fa';
import '../styles/components/Box.css'
import '../styles/components/ReactionRow.css'
import { useEffect, useState } from 'react';
import { EmojiApi } from '../services/api/EmojiApi';

export interface Emoji{
    emoji: string,
    count: number,
}

function EmojiElement({countProp, emojiCode, diaryId, isClicked}
        :{countProp:number, emojiCode: string, diaryId: number, isClicked: boolean}){
        console.log("emojiCode", emojiCode, isClicked)
        const emojiApi = new EmojiApi();
        const [count, setCount] = useState<number>(countProp);
        const [clicked, setClicked] = useState<boolean>(isClicked);
        useEffect(()=>{
            setCount(countProp);
            setClicked(isClicked);
        }, [diaryId, countProp, isClicked, emojiCode]);
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
export function EmojiBox({diaryId, emojis, myEmojiState}
    :{diaryId: number, emojis: Emoji[], myEmojiState: string}){
    console.log(diaryId, "EmojiBox rendered.")
    return (
        <div className="FlexRow" style={{ marginTop: '1vh' }}>
            <div style={{ flex: 1 }} />
            <div style={{ flex: 3 }}>
                <div className="FlexRow" style={{ margin: '0 auto' }}>
                    <EmojiElement
                        countProp={emojis.find((emoji) => emoji.emoji === "GOOD")?.count || 0}
                        emojiCode="E001"
                        diaryId={diaryId}
                        isClicked={myEmojiState === "GOOD"}
                    />
                    <EmojiElement
                        countProp={emojis.find((emoji) => emoji.emoji === "LOVE")?.count || 0}
                        emojiCode="E002"
                        diaryId={diaryId}
                        isClicked={myEmojiState === "LOVE"}
                    />
                    <EmojiElement
                        countProp={emojis.find((emoji) => emoji.emoji === "CHECK")?.count || 0}
                        emojiCode="E003"
                        diaryId={diaryId}
                        isClicked={myEmojiState === "CHECK"}
                    />
                </div>
            </div>
            <div style={{ flex: 1 }} />
        </div>
    );
}