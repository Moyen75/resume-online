import React from 'react';
import Details from '../Details/Details';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const Profile = () => {
    return (
        <div className='profile'>
            <PersonalInfo />
            <Details />
        </div>
    );
};

export default Profile;