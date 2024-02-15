import { FaUser } from 'react-icons/fa';
import '../styles/components/Box.css'
import '../styles/components/Round.css'
import '../styles/components/UserProfile.css'
interface UserProfileProps{
    id: string,
    description: string | undefined,
    profileImgSrc: string | undefined,
}

export function UserProfile(props: UserProfileProps){
    const profileImg = <img src={props.profileImgSrc}/>;

    return(
        <div className = "UserProfile">
            <div className='RoundCenter'></div>
            <div className = "RoundCenter" style={{height: '5vh', width: '5vh', backgroundColor:'grey', marginRight:'3vw'}}>
                <FaUser color='white'/>
            </div>
            <div className='FlexColumn'>
                <div className='ProfileID'>{props.id}</div>
                <div className='ProfileDescription'>{props.description || '...'}</div>
            </div>
        </div>
    );
}