import '../styles/components/Box.css'
import '../styles/pages/ProfilePage.css'
import { MainLayout } from "../components/layout/MainLayout";
import { SaveBtn } from '../components/SaveBtn';
import { MemberApi, MemberType } from '../services/api/MemberApi';
import { memberApi } from '../services/api';
import React, { Ref, useEffect, useRef, useState } from 'react';
import { ProflieImg } from '../components/UserProfile';
import { FaPen } from 'react-icons/fa';

function ProfileList({title,value,onEdit}:{title: string, value?: string, onEdit?(e:string):void}){
    const inputRef = useRef<HTMLInputElement>(null);

    return(
        <div className='FlexRow'>
            <div style={{flex: 2}}><b>{title}</b></div>
            <div style={{flex:5}}>
                {onEdit?
                    <input
                        key={title}
                        value={value}
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
    // userData 변경으로 인한 잦은 리랜더링을 막기 위해 state 따로 생성
    const [illness, setIllness] = useState<string>();
    const [gender, setGender] = useState<string>();
    const [type, setType] = useState<string>();
    const [info, setInfo] = useState<string>('');
    async function fetchData() {
        try {
            const userData = await memberApi.parseMemberData()
            setUserData(userData);
            setIllness(userData?.illness);
            setGender(userData?.gender);
            setType(userData?.type);
            // setInfo(userData?.info);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData(); 
    }, []);

    const onEditIllness = (value: string) => {
        setIllness(value);
    }

    const onEditGender = (value:string) =>{
        setGender(value);
    }

    const onEditType = (value:string) =>{
        setType(value);
    }
    
    const onEditInfo = (value:string) =>{
        setInfo(value);
    }

    const save = ()=>{
        memberApi.signUp({gender: gender||'', illenss: illness||'', type: type || ''});
        console.log('hello');
    }

    return(
        <MainLayout>
            <div className="FlexColumn">
                <div className='BoxL'>
                    <div className='FlexRow'>
                        <h2>Edit Profile</h2>
                        <SaveBtn clickHandler={save}/>
                    </div>
                </div>
                <div className='FlexColumn'>
                    <div className='BoxL'>
                        <div className='FlexColumn' style={{alignItems: 'center', alignContent:'center', padding: '1vh'}}>
                            <ProflieImg imgUrl={userData?.picture}/>
                            <div className='FlexRow' onClick={()=>{}}>
                                <h5 style={{margin:0, paddingTop:'1vh'}}>Edit Picture</h5>
                            </div>
                        </div>
                    </div>
                    <div className='ProfileList'>
                            <ProfileList title={'ID'} value={userData?.name}/>
                            <ProfileList title={'Email'} value={userData?.email}/>
                    </div>
                    <div className='ProfileList'>
                        <ProfileList title={'Illness'} value={illness} onEdit={onEditIllness}/>
                    </div>
                    <div className='ProfileList'>
                        <ProfileList title={'Gender'} value={gender} onEdit={onEditGender}/>
                    </div>
                    <div className='ProfileList'>
                        <ProfileList title={'Type'} value={type} onEdit={onEditType}/>
                    </div>
                    <div className='ProfileList'>
                        <ProfileList title={'Info'} value={info} onEdit={onEditInfo}/>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
