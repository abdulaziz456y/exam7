import React from 'react'
import './Footer.scss'


export default function Footer() {
  return (
    <div>
     <footer className='footer'>
            <div className="footer__content container">
                <ul className="first__block">
                    <li><a href="./index.html"><img src="img/general/logo.svg" alt="Fotoprokat24" /></a></li>
                    <li className="first"><a href="#">самый удобный в Москве сервис аренды</a></li>
                    <li>&copy; 2015-2019 Fotoprokat24</li>
                    <li>
                        <div className="sm-icons">
                            <img src="/footerImg/facebook.png" alt="facebook" />
                            <img src="/footerImg/twitter.png" alt="twitter" />
                            <img src="/footerImg/vkontakte.png" alt="vkontakte" />
                            <img src="/footerImg/youtube.png" alt="youtube" />
                            <img src="/footerImg/instagram.png" alt="instagram" />
                        </div>
                    </li>
                </ul>
                <div className="sm-icons2">
                    <img src="/footerImg/facebook.png" alt="facebook" />
                    <img src="/footerImg/twitter.png" alt="twitter" />
                    <img src="/footerImg/vkontakte.png" alt="vkontakte" />
                    <img src="/footerImg/youtube.png" alt="youtube" />
                    <img src="/footerImg/instagram.png" alt="instagram" />
                </div>
                <ul>
                    <li className="beginner">Компании</li>
                    <li>O компании</li>
                    <li>Новости</li>
                    <li>Ваканции</li>
                    <li>Политика конфиденциальности</li>
                </ul>
                <ul>
                    <li className="beginner">Клиентам</li>
                    <li>Точки выдачи</li>
                    <li>Скидки</li>
                    <li>Бонусные программы</li>
                </ul>
                <ul>
                    <li className="beginner">Помощь</li>
                    <li>Вопрос-ответы</li>
                    <li>Правила аренды</li>
                    <li>Доставка</li>
                    <li>Оплаты</li>
                </ul>
                <ul>
                    <li className="beginner">Контакты</li>
                    <li>Fotoprokat24</li>
                    <li>г.Москва, Проспект мира, дом 12.</li>
                    <li>Пн-Вс 9:00-21:00</li>
                    <li>+7(999) 999 - 99 - 99</li>
                    <li>
                        <section>
                            <img src="/footerImg/visa.svg" alt="visa" />
                            <img src="/footerImg/mastercard.svg" alt="mastercard" />
                            <img src="/footerImg/robokassa.svg" alt="robokassa" />
                        </section>
                    </li>
                </ul>
                <section className="cardsBank">
                    <img src="/footerImg/visa.svg" alt="visa" />
                    <img src="/footerImg/mastercard.svg" alt="mastercard" />
                    <img src="/footerImg/robokassa.svg" alt="robokassa" />
                </section>
            </div>
        </footer>
    </div>
  )
}
