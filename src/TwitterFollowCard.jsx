import './TwitterFollowCard.css'
import { useState } from 'react'

export const TwitterFollowCard = ({ name = "anonymus" , userName="anonymus", initialIsFollowing}) => {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
        {/* esto es un comentario */}
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="Profile Avatar" />
            <div className='tw-followCard-info'>
                <strong>{ name }
                </strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{isFollowing ? 'Siguiendo' : 'Seguir'}</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}
