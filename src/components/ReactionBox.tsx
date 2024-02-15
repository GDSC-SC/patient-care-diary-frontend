import { FaCheckCircle, FaHeart, FaThumbsUp } from 'react-icons/fa';
import '../styles/components/Box.css'
import '../styles/components/ReactionBox.css'
interface ReactionBoxProps{
    thumb: number | undefined,
    check: number | undefined,
    like: number | undefined,
}

export function ReactionBox(reactions: ReactionBoxProps){
    return(
        <div className="FlexRow">
            <div className='ReactionElements'>
                <FaThumbsUp/>
                <div className='ReactionElementsSpace'/>
                <div className='ReactionNumber'>{reactions.thumb}</div>
            </div>
            <div className='ReactionElements'>
                <FaCheckCircle/>
                <div className='ReactionElementsSpace'/>
                <div className='ReactionNumber'>{reactions.check}</div>
            </div>
            <div className='ReactionElements'>
                <FaHeart/>
                <div className='ReactionElementsSpace'/>
                <div className='ReactionNumber'>{reactions.like}</div>
            </div>
        </div>
    );
}