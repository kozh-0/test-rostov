import { useState } from 'react';
import { Link } from 'react-router-dom';
import spaceX from '../img/spaceX.png';

const links = [
    { title: 'Технологии', route: '/tech' },
    { title: 'График полетов', route: '/schedule' },
    { title: 'Гарантии', route: '/guarantees' },
    { title: 'О компании', route: '/about' },
    { title: 'Контакты', route: '/contacts' }
];


export default function Header() {
    const [isOpened, setIsOpened] = useState(true);
    return (
        <header>
            <div className='header container'>
                <Link to='/'>
                    <div className='header_logo'>
                        <img src={spaceX} alt="spaceX" />
                    </div>
                </Link>
                <div className='header_links' style={isOpened ? {display: 'flex'} : {display: 'none'}}>
                    {links.map(el => (
                        <Link
                            key={el.title}
                            className='header_links_item'
                            to={el.route}
                            onClick={() => setIsOpened(false)}
                        >{el.title}</Link>
                    ))}
                    <button className='close' onClick={() => setIsOpened(false)}>X</button>
                </div>
                <button className='burger' onClick={() => setIsOpened(!isOpened)}>
                    &equiv;
                </button>
            </div>
        </header>
    )
}
