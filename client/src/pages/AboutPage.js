import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Slider } from '../components/Slider'
import { StepsGallery } from '../components/StepsGallery'
import sliderAboutData from '../data/sliderAboutPage.json'
import stepsGalleryAboutData from '../data/steps-gallery-about-page.json'
import '../styles/aboutPage.css'

export const AboutPage = () => {
    console.log('render')

    const nextText = useRef()
    const observer = useRef()

    const [animationStart, setAnimationStart] = useState(false)

    useEffect(() => {
        if (observer.current) observer.current.disconnect()

        const callback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                setAnimationStart(true)
            }
        }
        observer.current = new IntersectionObserver(callback)
        observer.current.observe(nextText.current)
    }, [])

    return (
        <div className="content-wrapper">
            <div className="content">
                <div className="content__body">
                    <div className="about-title-wrapper">
                        <h1 className="main-title">ОБО МНЕ</h1>
                        <div className="media-links__wrapper media-links-about__wrapper">
                            {/* A place to link for the downloaded file */}
                            <a href="https://github.com/andrey-kor" target="_blank">
                                <div className="media-link media-link_green">Мой GitHub</div>
                            </a>
                        </div>
                    </div>
                    <div className="about-intro__wrapper">
                        <div className="about-intro__column">
                            <div className="about-intro__img-wrapper">
                                
                            </div>
                        </div>
                        <div className="about-intro__column">
                            <div className="about-intro__text-wrapper">
                                <p className="about-intro__text">
                                    Привет! Я - Андрей, frontend-разработчик. <br /> Прошёл длинный путь 
                                    от преподавателя робототехники и программиста на С++ до разработчика интерфейсов, 
                                    попутно набравшись опыта в дизайне, управлении и инженерии. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="text">
                        Начиная с детства я увлекаюсь электроникой: <span className="text_accent">в 12 лет пошел в радиокружок</span>, 
                        и с того момента постоянно что-то изобретал. 
                        Поступив в университет, хобби только нарастило обороты, в результате чего на третьем курсе мы совместно 
                        с преподавателем создали кружок для школьников, <span className="text_accent">где я стал преподавателем электроники и робототехники.</span>
                        Я составлял программы занятий, обучал детей, <span className="text_accent">руководил командами</span> во время разработки школьниками собственных устройств. 
                    </p>
                    <p className="text">
                        Так долгое время я программировал на С++, а если быть точнее - работал с контроллерами Arduino, ESP-32 и им подобными. 
                        Это позволяет создавать уникальные устройства, которых нет в мире вообще, или они стоят гораздо дороже кастомных версий. 
                    </p>
                    <p className="text">
                        Вот несколько примеров моих последних работ.
                    </p>
            
                    <Slider 
                        slides={sliderAboutData} 
                        targetSlider={'little'}
                    />
            
                    <p className="text">
                        При работе над подобными устройствами есть одна особенность, которая с течением времени становилась для меня всё более весомой:
                        <span className="text_accent"> невозможность удалённой работы</span>, причём абсолютная. Писать код в отрыве от реального устройства, 
                        на котором он будет запускаться, невозможно, а значит устройство, какого бы размера оно ни было, должно быть всегда с тобой. 
                        Разумеется, это что-то за гранью фантастики.
                    </p>
                    <p className="text">
                        Но перед тем, как писать код, необходимо сначала собрать это устройство - поработать с электроникой, возможно создать 3D-модель, 
                        напечатать её на 3D-принтере, или, например, вырезать что-то на лазерном резчике. После - отладить устройство, используя различные приборы: 
                        мультиметр, осциллограф и т.п. Думаю, вы уже догадались к чему я веду: разработка электроники и её программирование возможна только на стационарном
                        рабочем месте с постоянным доступом к огромному количеству оборудования. 
                    </p>
                    <p className="text">
                        Так получилось, что на предыдущем месте работы помимо программирования я стал всё больше и больше работать с дизайном. 
                    </p>
                    
                    <StepsGallery 
                        slides={stepsGalleryAboutData}
                        animationStart={animationStart}
                    />

                    <p className="text" ref={nextText}>
                        Благодаря техническому бэкграунду <span className="text_accent">мне удавалось создавать очень понятные для пользователей инструкции и схемы</span> (сужу по их отзывам). 
                        Так я стал делать первые шаги в дизайне и всё больше понимал, что внешний вид продукта и удобство его использования - чрезвычайно важные вещи. 
                        И всё же придумывание уникальных макетов и сочетание цветов давалось мне не так легко, чтобы копнуть в эту нишу глубже. 
                    </p>
                    <div className="note">
                        
                    </div>
                    <p className="text">
                        Так я плавно пришёл к мысли о том, что чистое программирование без электроники - это наверное то, что я так долго искал; в частности, разработка интерфейсов 
                        включает ещё и визуальную составляющую. Будет не совсем честно сказать, что frontend-разработкой я увлёкся только после этого. Я начал изучать базовые вещи ещё учась 
                        в университете, правда относился к этому скорее как к хобби. Со временем я стал уделять всё больше внимания этому направлению.
                    </p>
                    <div className="about-page__finding-wrapper"> 
                        <div className="about-page__finding-block">
                            <h2 className="finding__title">
                                Таким образом, frontend-разработка для меня - это невероятно удачная комбинация составляющих моего прошлого опыта: 
                            </h2>
                            <div className="finding-content">
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td className="finding__icon"></td>
                                            <td className="finding__text">Из программирования - логика построения систем;</td>
                                        </tr>
                                        <tr>
                                            <td className="finding__icon"></td>
                                            <td className="finding__text">Из дизайна - принципы взаимодействия с пользователем и приятные интерфейсы;</td>
                                        </tr>
                                        <tr>
                                            <td className="finding__icon"></td>
                                            <td className="finding__text">Из преподавания - передача знаний коллегам;</td>
                                        </tr>
                                        <tr>
                                            <td className="finding__icon"></td>
                                            <td className="finding__text">Из координирования работы - руководство командой (верю, что дойду до этого).</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="to-main-page-link__wrapper">
                        <Link to="/" className="to-main-page-link">На главную страницу</Link>
                    </div>
                </div>
                <div className="footer-holder"></div>
            </div>
        </div>
    )
}
