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

    return (
        <header>
            <div className='header container'>
                <Link to='/'>
                    <div className='header_logo'>
                        <img src={spaceX} alt="spaceX" />
                    </div>
                </Link>
                <div className='header_links'>
                    {links.map(el => (
                        <Link
                            key={el.title}
                            className='header_links_item'
                            to={el.route}
                        >{el.title}</Link>
                    ))}
                </div>
            </div>
        </header>
    )
}
