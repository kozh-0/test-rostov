import spaceX from '../img/spaceX.png';


const links = ["Главная", "Технологии", "График полетов", "Гарантии", "О компании", "Контакты"]

export default function Header() {

    return (
        <header>
            <div className='header container'>
                <div className='header_logo'>
                    <img src={spaceX} alt="spaceX" />
                </div>
                <div className='header_links'>
                    {links.map(el => (
                        <span key={el} className='header_links_item'>{el}</span>
                    ))}
                </div>
            </div>
        </header>
    )
}
