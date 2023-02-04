import React from "react";
import Style from './footer.module.css'

function Footer({}){
    return (
        <footer className={Style.footer}>
          <div className={Style.footer__main}>
            <div className={Style.container}>
              <div className={Style["footer__main-container"]}>
                <a className={Style.footer__logo} href="/">
                  <span className={`${Style.logo} ${Style["logo--footer"]}`}>
                    
                  </span>
                </a>
                <div className={Style.footer__phone}>
                  <div className={Style["footer__phone-icon"]}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40.5" height="40.5" viewBox="0 0 40.5 40.5"><path fill="none" stroke="#000" strokeWidth={2} strokeMiterlimit={10} d="M31 26.1c-1.3-1.3-2.9-1.3-4.2 0-1 1-2 1.9-2.9 2.9-.3.3-.5.3-.8.1-.6-.3-1.3-.6-1.9-1-2.8-1.8-5.2-4.1-7.3-6.7-1-1.3-2-2.7-2.6-4.2-.1-.3-.1-.5.1-.8 1-.9 1.9-1.9 2.9-2.9 1.3-1.3 1.3-2.9 0-4.3L12 6.9 9.6 4.5c-1.3-1.3-2.9-1.3-4.2 0-1 1-1.9 2-2.9 2.9-.9.9-1.4 2-1.5 3.2-.2 2 .3 4 1.1 5.9 1.4 3.9 3.6 7.4 6.3 10.5 3.6 4.3 7.9 7.7 13 10.1 2.3 1.1 4.6 1.9 7.2 2.1 1.8.1 3.3-.3 4.5-1.7.8-.9 1.8-1.8 2.7-2.7 1.3-1.3 1.3-2.9 0-4.3-1.6-1.3-3.2-2.8-4.8-4.4zm0 0" /><path d="M29.5 19.6l3-.5c-.5-2.8-1.8-5.3-3.8-7.3-2.1-2.1-4.8-3.4-7.7-3.9l-.4 3c2.3.3 4.3 1.3 6 3 1.5 1.6 2.5 3.5 2.9 5.7zm4.7-13.2C30.7 2.9 26.3.7 21.4 0L21 3c4.2.6 8 2.6 11 5.6 2.9 2.9 4.8 6.5 5.4 10.5l3-.5c-.7-4.7-2.9-8.9-6.2-12.2zm0 0" /></svg>
                  </div>
                  <a className={`${Style["footer__phone-link"]} ${Style["js-dynamic-phone"]} ${Style["js-counters-goal"]}`} data-counters-goal="Telephone" href="tel:74955454422" rel="nofollow"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>+84 888 033286</font></font></a>
                </div>
                <div className={Style.footer__email}>
                  <div className={Style["footer__email-icon"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height="38.2" viewBox="-28.9 135.1 595.4 455"><path d="M560.2 197.4l-23.7-23.7-218.7 218.7c-27.4 27.4-73.4 27.4-100.6 0L-1.5 174.9l-23.7 23.7 162.9 162.7-162.9 162.9 23.7 23.7 162.7-162.7 32.3 32.3c19.9 19.9 46 31.1 73.4 31.1 27.4 0 53.4-11.2 73.4-31.1l32.3-32.3 162.7 162.7 23.7-23.7-162.9-162.9 164.1-163.9" /><path d="M514.2 590.1H23.3c-28.6 0-52.2-23.7-52.2-52.2V187.3c0-28.6 23.7-52.2 52.2-52.2h490.9c28.6 0 52.2 23.7 52.2 52.2v350.5c.1 28.6-23.6 52.3-52.2 52.3zM22.1 168.8c-9.9 0-17.4 7.5-17.4 17.4v350.5c0 9.9 7.5 17.4 17.4 17.4H513c9.9 0 17.4-7.5 17.4-17.4V186.1c0-9.9-7.5-17.4-17.4-17.4H22.1v.1z" /></svg>
                  </div>
                  <a className={Style["footer__email-link"]} href="mailto:info@onecam.ru"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>nhatcam.com@gmail.com</font></font></a>
                </div>
                <div className={Style.social}>
                  <a className={Style.social__link} href="https://vk.com" target="_blank" rel="nofollow noopener">
                    <span className={Style.social__icon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17.1" height="9.7" viewBox="0 0 17.1 9.7"><path fill="#FFF" d="M14.7 6.2c.6.6 1.2 1.1 1.7 1.7l.6.9c.2.4 0 .9-.4 1h-2.5c-.6-.1-1.1-.3-1.5-.8-.3-.4-.7-.7-1-1.1l-.4-.4c-.3-.2-.6-.2-.8.2-.3.4-.4.8-.4 1.2 0 .6-.2.7-.8.8-1.2 0-2.4-.1-3.5-.8-1-.6-1.7-1.4-2.4-2.2C2 4.9 1 3 .1 1-.1.6 0 .3.5.3h2.4c.3 0 .5.2.7.5.4 1.1 1 2.1 1.7 3.1.2.3.4.5.6.7.3.2.5.1.6-.2.2-.2.2-.4.2-.6.1-.8.1-1.5 0-2.3-.1-.5-.4-.8-.8-.8-.2 0-.2-.1-.1-.3.2-.3.4-.4.8-.4h2.8c.4.1.5.3.6.7v3.1c0 .2.1.7.4.8.2.1.4-.1.6-.3.7-.7 1.2-1.6 1.6-2.4.2-.4.4-.8.5-1.2.1-.3.3-.4.6-.4h2.9c.5.1.6.3.4.7-.2.7-.7 1.3-1.1 1.9-.5.6-.9 1.2-1.4 1.9-.3.6-.3.9.2 1.4z" /></svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.footer__secondary}>
            <div className={Style.container}>
              <div className={Style["footer__secondary-container"]}>
                <div className={Style["footer__secondary-text"]}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>© Bảo lưu mọi quyền 1999-2023</font></font></div>
                <div className={Style["footer__secondary-text"]}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>số 147 Hoàng Quốc Việt, Tầng 9 Cao ốc Bộ Quốc Phòng</font></font></div>
                <div className={Style["footer__secondary-text"]}>
                  <a href="/sitemap"><font style={{verticalAlign: 'inherit'}} /></a><font style={{verticalAlign: 'inherit'}}><a href="http://filanco.ru/docs/politika-v-otnoshenii-zashchity-personalnyh-dannyh.pdf" rel="nofollow" target="_blank"><font style={{verticalAlign: 'inherit'}}>Thỏa thuận người dùng </font></a><a href="/sitemap"><font style={{verticalAlign: 'inherit'}}>sơ đồ trang web</font></a></font><br />
                  <a href="http://filanco.ru/docs/politika-v-otnoshenii-zashchity-personalnyh-dannyh.pdf" rel="nofollow" target="_blank"><font style={{verticalAlign: 'inherit'}} /></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
}

export default Footer;