import { FaUser } from 'react-icons/fa';
import '../styles/components/Box.css'
import '../styles/components/Round.css'
import '../styles/components/UserProfile.css'
import { useEffect, useState } from 'react';
interface UserProfileProps{
    user: {id: string,
    description: string | undefined,
    profileImgSrc: string | undefined,}
}

export function ProflieImg({imgUrl} :{imgUrl?: string}){
    const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false);
    useEffect(() => {
        if (imgUrl !== '' && imgUrl != null) {
            setIsImgLoaded(true);
        }
    }, [imgUrl]);
    return(
        <div className = "RoundCenter" style={{height: '5vh', width: '5vh', backgroundColor:'grey', marginRight:'3vw'}}>
            {isImgLoaded?
                <img
                className='ProfileImg'
                src={imgUrl}
                
                onError={() => {setIsImgLoaded(false)}}
                /> 
            :
                <FaUser color='white'/>
        }
        </div>
        
    )
}

export function UserProfile(props: UserProfileProps){
    const items = props.user;

    return(
        <div className = "UserProfile">
            <div className='RoundCenter'></div>
            {
                <ProflieImg imgUrl={items.profileImgSrc}/>
            }
            
            <div className='FlexColumn'>
                <div className='ProfileID'>{items.id}</div>
                <div className='ProfileDescription'>{items.description || '...'}</div>
            </div>
        </div>
    );
}