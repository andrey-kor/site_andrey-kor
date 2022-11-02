import { Link } from 'react-router-dom'
import resumeFile from '../../files/korneev-cv.pdf'
import './AboutBlock.css'

export const AboutBlock = () => {
    return (
        <div className="about__wrapper">
            <div className="about__image-colunm">
                <div className="about-image__wrapper"></div>
            </div>
            <div className="about__content-colunm">
                <div className="media-links__wrapper">
                    <a href={resumeFile} target="_blank">
                        <div className="media-link media-link_pink">Открыть резюме</div>
                    </a>
                    <a href="https://github.com/andrey-kor" target="_blank">
                        <div className="media-link media-link_green">Мой GitHub</div>
                    </a>
                </div>
                <div className="about-text__wrapper">
                    <p>
                        Привет! Я ― Андрей, frontend-разработчик. Прошёл длинный путь 
                        от преподавателя робототехники на Arduino до разработчика интерфейсов, 
                        попутно набравшись опыта в дизайне, управлении и инженерии.   
                    </p>
                </div>
                <div className="about-link-more__wrapper">
                    <Link to="/about" className="about__link-more">узнать больше</Link>
                </div>
            </div>
        </div>
    )
}