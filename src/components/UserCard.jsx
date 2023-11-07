import React from 'react'
import Section from './Section';
import '../css/UserCard.css';

function UserCard({user})
{
    const {pfp, displayName, username, aboutMe, dateJoined, links} = user;
    let dateJoinedFormatted = new Date(dateJoined).toLocaleDateString('en-us', {day:"2-digit", month:"short", year:"numeric"});

    return (
        <div className="usercard">
            <div className="card-head">
                <img src={pfp} alt={username} className='pfp'/>
                <div className="names">
                    <h1>{displayName}</h1>
                    <p>{username}</p>
                </div>
            </div>

            <div className="card-text">
                <div className="sections">
                    <Section title="ABOUT ME" text={aboutMe}/>
                    <Section title="DISCORD MEMBER SINCE" text={dateJoinedFormatted}/>
                </div>
                <div className="card-foot">
                    {links.map((link) =>
                        <div key={link.url} className="link">
                            <a href={link.url}>{link.siteName}</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
  )
}

export default UserCard