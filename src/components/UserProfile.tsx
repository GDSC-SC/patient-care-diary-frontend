import { FaUser } from 'react-icons/fa';
import '../styles/components/Box.css'
import '../styles/components/Round.css'
import '../styles/components/UserProfile.css'
import { useState } from 'react';
interface UserProfileProps{
    id: string,
    description: string | undefined,
    profileImgSrc: string | undefined,
}

export function UserProfile(props: UserProfileProps){
    const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false);

    return(
        <div className = "UserProfile">
            <div className='RoundCenter'></div>
            {
                isImgLoaded?
                <div className='RoundCenter'>
                    <img
                    className='ProfileImg'
                    src={props.profileImgSrc}
                    onError={() => {setIsImgLoaded(false);}}
                    /> 
                </div>
                :
                <div className = "RoundCenter" style={{height: '5vh', width: '5vh', backgroundColor:'grey', marginRight:'3vw'}}>
                    <FaUser color='white'/>
                </div>
            }
            
            
            <div className='FlexColumn'>
                <div className='ProfileID'>{props.id}</div>
                <div className='ProfileDescription'>{props.description || '...'}</div>
            </div>
        </div>
    );
}