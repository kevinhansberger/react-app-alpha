import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { AiOutlineHome } from 'react-icons/ai'
import { ImBullhorn } from 'react-icons/im'
import { GiPublicSpeaker, GiVote, GiWallet } from 'react-icons/gi'

const BottomNavBar = props => {
    const history = useHistory()
    const [activeTabs, setActiveTabs] = useState(props.name)
    useEffect(() => {
        switch (activeTabs) {
            case 'home':
                history.push('/')
                break;
            case 'about':
                history.push('/about')
                break;
            case 'volunteer':
                history.push('/volunteer')
                break;
            case 'vote':
                history.push('/vote')
                break;
            case 'donate':
                history.push('/donate')
                break;
            default:
                history.push('/')
                break;
        }
    }, [activeTabs, history])

    return (
        <div className='bottom-nav'>
            <div className='bn-tab'>
                {activeTabs === 'home' ?
                    <AiOutlineHome
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('home')}
                    /> :
                    <AiOutlineHome
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('home')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'about' ?
                    <GiPublicSpeaker
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('about')}
                    /> :
                    <GiPublicSpeaker
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('about')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'volunteer' ?
                    <ImBullhorn
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('volunteer')}
                    /> :
                    <ImBullhorn
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('volunteer')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'vote' ?
                    <GiVote
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('vote')}
                    /> :
                    <GiVote
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('vote')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'donate' ?
                    <GiWallet
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('donate')}
                    /> :
                    <GiWallet
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('donate')}
                    />}
            </div>
        </div>
    )
}

export default BottomNavBar
