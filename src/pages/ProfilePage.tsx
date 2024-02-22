import '../styles/components/Box.css'
import '../styles/pages/ProfilePage.css'
import { MainLayout } from "../components/layout/MainLayout";
import { SaveBtn } from '../components/SaveBtn';
import { MemberApi, MemberType } from '../services/api/MemberApi';
import { memberApi } from '../services/api';
import React, { Ref, useEffect, useRef, useState } from 'react';
import { ProflieImg } from '../components/UserProfile';
import { FaPen } from 'react-icons/fa';

function ProfileList({title, value,onEdit}:{title: string, value?: string, onEdit?(e:string):void}){
    const inputRef = useRef<HTMLInputElement>(null);

    return(
        <div className='FlexRow'>
            <div style={{flex: 2}}><b>{title}</b></div>
            <div style={{flex:5}}>
                {onEdit?
                    <input
                        key={title}
                        value={value}
                        style={{width: 'fit-content'}}
                        onChange={(e)=>{
                            onEdit(e.target.value);
                        }}
                        ref={inputRef}/>
                    :<p>{value}</p>
                }
            </div>
            <div style={{flex:1}} >
                {onEdit?
                    <FaPen onClick={() => {
                        inputRef.current?.focus();
                    }} />
                    : null
                }
            </div>
        </div>
    )
}

export function ProfilePage(){
    const [userData, setUserData] = useState<MemberType>();
    async function fetchData() {
        try {
            setUserData(await memberApi.parseMemberData());
            console.log(userData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData(); 
    }, []);

    const onEditIllness = (value: string) => {
        const newUserData = { ...userData };
        newUserData.illness = value;
        setUserData(newUserData as MemberType);
    }

    return(
        <MainLayout>
            <div className="FlexColumn">
                <div className='BoxL'>
                    <div className='FlexRow'>
                        <h2>Edit Profile</h2>
                        <SaveBtn/>
                    </div>
                </div>
                <div className='FlexColumn'>
                    <div className='BoxL'>
                        <div className='FlexColumn' style={{alignItems: 'center', padding: '1vh'}}>
                            <ProflieImg imgUrl={userData?.picture}/>
                            <div className='FlexRow' onClick={()=>{}}>
                                <h5 style={{margin:0}}>Edit Picture</h5>
                            </div>
                        </div>
                    </div>
                    <div className='ProfileList'>
                            <ProfileList title={'ID'} value={userData?.name}/>
                            <ProfileList title={'Email'} value={userData?.email}/>
                    </div>
                    <div className='ProfileList'>
                        <ProfileList title={'Illness'} value={userData?.illness} onEdit={onEditIllness}/>
                    </div>
                    <div className='ProfileList'>
                        <ProfileList title={'Gender'} value={userData?.gender} onEdit={()=>{}}/>
                    </div>
                    <div className='ProfileList'>
                        <ProfileList title={'Type'} value={userData?.type} onEdit={()=>{}}/>
                    </div>
                    <div className='ProfileList'>
                        <ProfileList title={'Info'} onEdit={() => {}}/>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
