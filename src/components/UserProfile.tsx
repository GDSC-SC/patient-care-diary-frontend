import { FaUser } from 'react-icons/fa';
import '../styles/components/Box.css'
import '../styles/components/Round.css'
import '../styles/components/UserProfile.css'
import { useState } from 'react';
interface UserProfileProps{
    user: {id: string,
    description: string | undefined,
    profileImgSrc: string | undefined,}
}

export function UserProfile(props: UserProfileProps){
    const items = props.user;
    const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false);

    return(
        <div className = "UserProfile">
            <div className='RoundCenter'></div>
            {
                isImgLoaded?
                <div className='RoundCenter'>
                    <img
                    className='ProfileImg'
                    src={items.profileImgSrc}
                    onError={() => {setIsImgLoaded(false);}}
                    /> 
                </div>
                :
                <div className = "RoundCenter" style={{height: '5vh', width: '5vh', backgroundColor:'grey', marginRight:'3vw'}}>
                    <FaUser color='white'/>
                </div>
            }
            
            
            <div className='FlexColumn'>
                <div className='ProfileID'>{items.id}</div>
                <div className='ProfileDescription'>{items.description || '...'}</div>
            </div>
        </div>
    );
}