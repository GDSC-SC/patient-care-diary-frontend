import { FaCheckCircle, FaHeart, FaThumbsUp } from 'react-icons/fa';
import '../styles/components/Box.css'
import '../styles/components/ReactionRow.css'
import { emojiApi } from "../services/api";
import { useEffect, useState } from 'react';

export interface Emoji{
    emoji: string,
    count: number,
}

function EmojiElement({count, emojiCode, diaryId, isClicked, onClick}
        :{count:number, emojiCode: string, diaryId: number, isClicked: boolean, onClick: ()=>void}){
        return(
            <div className='ReactionElements' onClick={async ()=>{
                if (!isClicked) {
                    await emojiApi.update({ emojiCode: emojiCode, diaryId: diaryId });
                }
                else {
                    emojiApi.delete(diaryId, emojiCode);
                }
                onClick();
            }}>
            {emojiCode === "E001" && <FaThumbsUp style={isClicked ? {color: 'skyblue'} : {color: 'black'}}/>}
            {emojiCode === "E002" && <FaHeart style={isClicked ? {color: 'pink'} : {color: 'black'}}/>}
            {emojiCode === "E003" && <FaCheckCircle style={isClicked ? {color: 'green'} : {color: 'black'}}/>}
            <div className='ReactionElementsSpace'/>
            <div className='ReactionNumber'>{count}</div>
            </div>
        );
    }

export function EmojiBox({diaryId}:{diaryId: number}){
    const [renderCount, setRenderCount] = useState(0);
    const [emojis, setEmojis] = useState<Emoji[]>([]);
    const [myEmoji, setMyEmoji] = useState<string>("NONE");
    useEffect(()=>{
        const fetchEmojis = async () => {
            const {emojiCounts, myEmojiState}:{emojiCounts:Emoji[], myEmojiState:string} = await emojiApi.get(diaryId);
            setEmojis(emojiCounts);
            setMyEmoji(myEmojiState);
        }
        fetchEmojis();
    }, [diaryId, renderCount]);

    return (
        <div className="FlexRow" style={{ marginTop: '1vh' }}>
            <div style={{ flex: 1 }} />
            <div style={{ flex: 3 }}>
                <div className="FlexRow" style={{ margin: '0 auto' }}>
                    <EmojiElement
                        count={emojis.find((emoji) => emoji.emoji === "GOOD")?.count || 0}
                        emojiCode="E001"
                        diaryId={diaryId}
                        isClicked={myEmoji === "GOOD"}
                        onClick={()=>{setRenderCount(prevCount => prevCount + 1);console.log(renderCount)}}
                    />
                    <EmojiElement
                        count={emojis.find((emoji) => emoji.emoji === "LOVE")?.count || 0}
                        emojiCode="E002"
                        diaryId={diaryId}
                        isClicked={myEmoji === "LOVE"}
                        onClick={()=>{setRenderCount(prevCount => prevCount + 1);console.log(renderCount)}}
                    />
                    <EmojiElement
                        count={emojis.find((emoji) => emoji.emoji === "CHECK")?.count || 0}
                        emojiCode="E003"
                        diaryId={diaryId}
                        isClicked={myEmoji === "CHECK"}
                        onClick={()=>{setRenderCount(prevCount => prevCount + 1);console.log(renderCount)}}
                    />
                </div>
            </div>
            <div style={{ flex: 1 }} />
        </div>
    );
}