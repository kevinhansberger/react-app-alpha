import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { RiHomeSmile2Line, RiHomeSmile2Fill, RiUser5Fill, RiSearchEyeFill } from 'react-icons/ri'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { RiUser5Line } from 'react-icons/ri'

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
                    <RiHomeSmile2Fill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('home')}
                    /> :
                    <RiHomeSmile2Line
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('home')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'about' ?
                    <RiSearchEyeFill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('about')}
                    /> :
                    <BiSearchAlt
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('about')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'volunteer' ?
                    <AiFillHeart
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('volunteer')}
                    /> :
                    <AiOutlineHeart
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('volunteer')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'vote' ?
                    <RiUser5Fill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('vote')}
                    /> :
                    <RiUser5Line
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('vote')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'donate' ?
                    <AiFillHeart
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('donate')}
                    /> :
                    <AiOutlineHeart
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('donate')}
                    />}
            </div>
        </div>
    )
}

export default BottomNavBar 
