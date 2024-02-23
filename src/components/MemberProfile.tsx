import { FaUser } from 'react-icons/fa';
import '../styles/components/Box.css'
import '../styles/components/Round.css'
import '../styles/components/UserProfile.css'
import { useEffect, useState } from 'react';
import { MemberType } from '../services/api/MemberApi';

export function ProflieImg({imgUrl} :{imgUrl?: string}){
    const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false);
    useEffect(() => {
        if (imgUrl !== '' && imgUrl != null) {
            setIsImgLoaded(true);
        }
    }, [imgUrl]);
    return(
        <div className = "RoundCenter" style={{height: '5vh', width: '5vh', backgroundColor:'grey'}}>
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

export function MemberProfile({ member }: { member: MemberType }){
    return(
        <div className = "UserProfile">
            <div className='RoundCenter'></div>
            {
                <div style={{marginRight: '3vw'}}>
                    <ProflieImg imgUrl={member.picture}/>
                </div>
            }
            
            <div className='FlexColumn'>
                <div className='ProfileID'>{member.name}</div>
                <div className='ProfileDescription'>{member.illness|| ''}</div>
            </div>
        </div>
    );
}