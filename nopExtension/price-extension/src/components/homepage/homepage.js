import React from "react";
import Style from './homepage.module.css';
import { Pane, Dialog } from "evergreen-ui";
import Popup from "../popup/Popup";

function HomePage({}){

    const [isShown, setIsShown] = React.useState(false)

    return (
        <Pane>
            <Dialog
                isShown={isShown}
                title="Dialog title"
                onCloseComplete={() => setIsShown(false)}
                confirmLabel="Custom Label 1"
                hasFooter={false}
                hasHeader={false}
                 overlayProps={{ className:`${Style.popup} ${Style["popup--visible"]}` }} 
                 contentContainerProps={{className: Style['popup__container']}}
                    width={524}
                    minHeightContent={760}
                    preventBodyScrolling
                >
                <Popup></Popup>
                
            </Dialog>

          <section className={Style.section}>
            <div className={Style.container}>
              <h1>
                <font style={{verticalAlign: 'inherit'}}>
                  <font style={{verticalAlign: 'inherit'}}>Giám sát video đám mây</font>
                </font>
              </h1>
              <div className={`${Style.row} ${Style["flex-cross-center"]}`}>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["pv-1"]} ${Style.flex} ${Style["flex-main-center"]} ${Style["flex-cross-start"]}`}>
                  <picture>
                    <source srcSet="https://onecam.ru/src/img/promo-section_02.webp" type="image/webp" />
                    <img className={Style["img-responsive"]} src="https://onecam.ru/src/img/promo-section_02.png" alt="" />
                  </picture>
                </div>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["pv-1"]}`}>
                  <p>
                    <font style={{verticalAlign: 'inherit'}}>
                      <font style={{verticalAlign: 'inherit'}}>Với dịch vụ của chúng tôi, bạn có thể:</font>
                    </font>
                  </p>
                  <ul>
                    <li>
                      <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}>Xem chương trình phát sóng trực tuyến từ máy ảnh của bạn từ mọi nơi trên thế giới</font>
                      </font>
                    </li>
                    <li>
                      <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}>Chọn khoảng thời gian bạn quan tâm trong kho lưu trữ hồ sơ và tải xuống máy tính cá nhân của bạn</font>
                      </font>
                    </li>
                    <li>
                      <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}>Nhanh chóng tìm thấy phần mong muốn của kho lưu trữ bằng biểu đồ hoạt động</font>
                      </font>
                    </li>
                  </ul>
                </div>
              </div>
              <h2>
                <font style={{verticalAlign: 'inherit'}}>
                  <font style={{verticalAlign: 'inherit'}}>Làm thế nào để kết nối</font>
                </font>
              </h2>
              <div className={Style.row}>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["col-lg-3"]}`}>
                  <div className={Style.feature}>
                    <div className={`${Style.feature__icon} ${Style["feature__icon--bordered"]}`}>
                      <svg className={Style["features-icon"]} xmlns="http://www.w3.org/2000/svg" width="73.1" height={74} viewBox="0 0 73.1 74">
                        <path className={`${Style["features-icon__fill-none"]} ${Style["features-icon__stroke-color-dark"]}`} fill="none" stroke="#181b28" strokeWidth="2.835" strokeMiterlimit={10} d="M36.1 1.4c-7.6 0-14.8 2.3-20.9 6.8-.7.5-.9 1.5-.4 2.2l5.7 9.3c.2.4.6.7 1.1.8.5.1.9 0 1.3-.3 3.6-2.6 7.8-4 12.2-4 11.5 0 20.8 9.3 20.8 20.8s-9.3 20.8-20.8 20.8c-4.4 0-8.6-1.4-12.2-4-.4-.3-.8-.4-1.3-.3-.5.1-.8.4-1.1.8l-5.7 9.3c-.5.7-.3 1.7.4 2.2 6.1 4.4 13.3 6.8 20.9 6.8 19.6 0 35.6-16 35.6-35.6S55.7 1.4 36.1 1.4z">&nbsp;</path>
                        <path className={`${Style["features-icon__fill-color-main"]} ${Style["features-icon__stroke-color-dark"]}`} fill="#dd182b" stroke="#181b28" strokeWidth="2.835" strokeMiterlimit={10} d="M26.8 48.7c-.3.5-.4 1.2-.1 1.7.3.5.8.9 1.5.9h11.2c.6 0 1.1-.3 1.4-.7L49.2 38c.4-.6.4-1.3 0-1.8l-8.4-12.6c-.3-.5-.8-.7-1.4-.7H28.2c-.6 0-1.2.3-1.5.9-.3.5-.3 1.2.1 1.7l3.9 5.8H7.3c-3.2 0-5.8 2.6-5.8 5.8 0 3.2 2.6 5.8 5.8 5.8h23.5l-4 5.8z">&nbsp;</path>
                      </svg>
                    </div>
                    <div className={Style.feature__text}>
                      <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}>Đăng ký hoặc ủy quyền vượt qua</font>
                      </font>
                    </div>
                  </div>
                </div>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["col-lg-3"]}`}>
                  <div className={Style.feature}>
                    <div className={`${Style.feature__icon} ${Style["feature__icon--bordered"]}`}>
                      <svg className={Style["features-icon"]} xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="68.5 60.5 69.6 85.2">
                        <path className={Style["features-icon__fill-color-main"]} fill="#dd182b" d="M103.2 129.5l-1.7-7.9 5.4-9 1.9-19.3 2.8-.2 3.7 1v20.7l2.7-1.8 4.4 2.4 3.2-1.2 4.8 3.3 3.3-2.9 3.2 3.4v18.3l-2.4 4.2-3.8 3.2-20.1-.6-3.8-2.6-2.4-5.3z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M86.9 77.6c-.7 0-1.3.6-1.3 1.3 0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9c0-1.6 1.3-2.9 2.9-2.9.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3c-3.1 0-5.6 2.5-5.6 5.6 0 3.1 2.5 5.6 5.6 5.6s5.6-2.5 5.6-5.6c-.1-.8-.6-1.4-1.4-1.4zm0 15.7c-.7 0-1.3.6-1.3 1.3 0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9c.7 0 1.3-.6 1.3-1.3s-.6-1.4-1.4-1.4c-3.1 0-5.6 2.5-5.6 5.6 0 3.1 2.5 5.6 5.6 5.6s5.6-2.5 5.6-5.6c0-.7-.5-1.3-1.3-1.3zm15.7 2.8h-10c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3h10c.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3zm0-5.7h-10c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3h10c.7 0 1.3-.6 1.3-1.3 0-.7-.6-1.3-1.3-1.3zm-2.9 21.4h-7.1c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3h7.1c.7 0 1.3-.6 1.3-1.3s-.5-1.3-1.3-1.3zm2.9-5.7h-10c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3h10c.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3zm12.8-25.6H92.6c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3h22.8c.7 0 1.3-.6 1.3-1.3 0-.8-.6-1.3-1.3-1.3zm-5.7-5.7H92.6c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3h17.1c.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3zm-22.8 34.1c-.7 0-1.3.6-1.3 1.3 0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9c.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6c-.1-.8-.6-1.4-1.4-1.4z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M121.1 60.5H72.7c-2.3 0-4.2 1.9-4.2 4.2v59.8c0 2.3 1.9 4.2 4.2 4.2h24.2c.7 0 1.3-.6 1.3-1.3 0-.7-.6-1.3-1.3-1.3H72.7c-.8 0-1.5-.7-1.5-1.5V64.7c0-.8.7-1.5 1.5-1.5h48.4c.8 0 1.5.7 1.5 1.5v44.1c0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3V64.7c.1-2.3-1.8-4.2-4.1-4.2z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M133.7 114.6c-1.2-.1-2.5.2-3.5 1-.8-1.3-2.1-2.2-3.7-2.4-1.2-.1-2.5.2-3.5 1-.8-1.3-2.1-2.2-3.7-2.4-.9-.1-1.9.1-2.7.5v-17c0-1.4-.6-2.7-1.6-3.6-1-.9-2.4-1.4-3.8-1.2-2.5.2-4.4 2.5-4.4 5.1v17l-3.9 3.9c-2.1 2.1-2.9 5-2.3 7.9l3 12.7c1.2 5.1 5.7 8.7 11 8.7h12c6.2 0 11.3-5.1 11.3-11.3v-14.7c.2-2.7-1.7-4.9-4.2-5.2zm1.7 19.9c0 4.8-3.9 8.6-8.6 8.6h-12c-4 0-7.5-2.7-8.4-6.7l-3-12.7c-.5-2 .1-4 1.5-5.4l2-2v4.6c0 .7.6 1.3 1.3 1.3s1.3-.6 1.3-1.3V95.5c0-1.2.9-2.3 2-2.4.6-.1 1.3.1 1.7.6.5.4.7 1 .7 1.7v23.5c0 .7.6 1.3 1.3 1.3s1.3-.6 1.3-1.3v-2.1c0-.6.3-1.2.7-1.7.5-.4 1.1-.6 1.7-.6 1.1.1 2 1.2 2 2.4v3.4c0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3v-2.1c0-.6.3-1.2.7-1.7.5-.4 1.1-.6 1.7-.6 1.1.1 2 1.2 2 2.4v3.4c0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3v-2.1c0-.6.3-1.2.7-1.7.5-.4 1.1-.6 1.7-.6 1.1.1 2 1.2 2 2.4l.5 14.8z">&nbsp;</path>
                      </svg>
                    </div>
                    <div className={Style.feature__text}>
                      <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}>Chọn gói Cloud Video Surveillance</font>
                      </font>
                    </div>
                  </div>
                </div>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["col-lg-3"]}`}>
                  <div className={Style.feature}>
                    <div className={`${Style.feature__icon} ${Style["feature__icon--bordered"]}`}>
                      <svg className={Style["features-icon"]} xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="630.2 439 76.1 76.1">
                        <path className={Style["features-icon__fill-color-main"]} fill="#dd182b" d="M676.4 476.2l4.4-2.3 5.3-.4 10.8-.7 6.4.7 1.3.2.5 6 .2 7.7-.4 7.3h-20.1l-6.7-.9-4.4-5.9-.6-5.3z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M704.7 471.9h-1.9v-13.1c0-3.1-2.4-5.5-5.3-5.5H696v-8.8c0-3.1-2.3-5.5-5-5.5h-.3l-55.4 14.2h-.1c-2.7.2-5 2.6-5 5.5v50.8c0 3.1 2.4 5.5 5.3 5.5h61.9c3.1 0 5.5-2.4 5.5-5.5v-13.4h1.8c1 0 1.6-.7 1.6-1.6v-21c0-1-.8-1.6-1.6-1.6zm-13.5-29.8c.8.2 1.6 1.1 1.6 2.4v8.7h-44.7l43.1-11.1zm8.5 67.5c0 1.3-1 2.4-2.3 2.4h-61.9c-1.3 0-2.3-1.1-2.3-2.4v-50.8c0-1.3 1-2.4 2.3-2.4h61.7c1.3 0 2.3 1.1 2.3 2.4v13.1h-16c-6.8 0-12.1 5.3-12.1 12.1s5.5 12.1 12.1 12.1h16.2v13.5zm3.4-16.5h-19.6c-4.9 0-8.9-4.1-8.9-8.9s4.1-8.9 8.9-8.9h19.6v17.8z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M681.7 484.4c0 1 .8 1.6 1.6 1.6h1.5c.8 0 1.6-.7 1.6-1.6 0-1-.8-1.6-1.6-1.6h-1.4c-1.1 0-1.7.6-1.7 1.6z">&nbsp;</path>
                      </svg>
                    </div>
                    <div className={Style.feature__text}>
                      <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}>Nạp tiền vào số dư trong Tài khoản cá nhân của bạn</font>
                      </font>
                    </div>
                  </div>
                </div>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["col-lg-3"]}`}>
                  <div className={Style.feature}>
                    <div className={`${Style.feature__icon} ${Style["feature__icon--bordered"]}`}>
                      <svg className={Style["features-icon"]} xmlns="http://www.w3.org/2000/svg" width="80.3" height="84.4" viewBox="0 0 80.3 84.4">
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M73.2 0H0v2.5h6.2v12.4h5v5h1.2v6.2c0 15.1 12.3 27.3 27.3 27.3S67 41.1 67 26.1v-6.2h1.2v-5h5V2.5h6.2V0h-6.2zm-8.7 26.1c0 13.7-11.1 24.8-24.8 24.8S14.9 39.8 14.9 26.1v-6.2h49.7v6.2zm1.3-8.7H13.7v-2.5h52.1v2.5zm-57.1-5V2.5h62.1v9.9H8.7z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M39.7 48.4c6.2 0 11.2-5 11.2-11.2S45.9 26 39.7 26s-11.2 5-11.2 11.2 5.1 11.2 11.2 11.2zm0-19.9c4.8 0 8.7 3.9 8.7 8.7s-3.9 8.7-8.7 8.7S31 42 31 37.2s3.9-8.7 8.7-8.7z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M39.7 43.4c3.4 0 6.2-2.8 6.2-6.2S43.1 31 39.7 31c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2zm0-9.9c2.1 0 3.7 1.7 3.7 3.7 0 2.1-1.7 3.7-3.7 3.7-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M39.357 39.33l-1.768-1.768 2.475-2.474 1.768 1.767zM33.5 6.2H36v2.5h-2.5zm5 0H41v2.5h-2.5zm4.9 0h2.5v2.5h-2.5z">&nbsp;</path>
                        <circle className={Style["features-icon__fill-color-main"]} fill="#dd182b" cx="61.5" cy="26.5" r="11.9" />
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M61.3 41.6c-8.4 0-15.3-6.9-15.3-15.3S52.9 11 61.3 11s15.3 6.9 15.3 15.3-6.8 15.3-15.3 15.3zm0-26.7c-6.3 0-11.4 5.1-11.4 11.4S55 37.7 61.3 37.7s11.4-5.1 11.4-11.4-5.1-11.4-11.4-11.4z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-main"]} fill="#dd182b" d="M67.4 47.4l-5.7 9.9-5.7-9.9c-6 2.4-10.2 8.3-10.2 15.2V82h31.8V62.5c0-6.8-4.2-12.7-10.2-15.1z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M78.4 84.4H44.3c-1.1 0-2-.9-2-2V61.7c0-8 4.8-15.1 12.2-18.1.9-.4 2 0 2.4.8l4.4 7.6 4.4-7.6c.5-.9 1.5-1.2 2.4-.8 7.4 3 12.2 10.1 12.2 18.1v20.7c0 1.1-.9 2-1.9 2zm-32.2-4h30.2V61.7c0-5.8-3.2-11-8.2-13.7L63 57c-.4.6-1 1-1.7 1s-1.4-.4-1.7-1l-5.2-9c-5 2.7-8.2 7.9-8.2 13.7v18.7z">&nbsp;</path>
                      </svg>
                    </div>
                    <div className={Style.feature__text}>
                      <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}>Điều chỉnh cài đặt video và máy ảnh</font>
                      </font>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={`${Style.section} ${Style["bg-gray"]} ${Style["out-of-bounds-pic"]} ${Style["out-of-bounds-pic--iphone"]} ${Style["bg-image-apartments"]}`}>
            <div className={`${Style.container} ${Style["out-of-bounds-pic__relative"]}`}>
              <h2>
                <span style={{verticalAlign: 'inherit'}}>
                  <span style={{verticalAlign: 'inherit'}}>Nhìn khắp nơi</span>
                </span>
              </h2>
              <div className={Style.row}>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["pv-1"]}`}>
                  <p className={Style["mb-0"]}>
                    <span style={{verticalAlign: 'inherit'}}>
                      <span style={{verticalAlign: 'inherit'}}>Dịch vụ của chúng tôi có sẵn trên nền tảng Windows</span>
                    </span>
                  </p>
                  <div className={`${Style.flex} ${Style["flex-main-center"]}`}>
                    <a className={Style["p-1"]} href="/files/ONECAMSetup.zip" target="_blank" rel="nofollow noopener" download>
                      <picture>
                        <source srcSet="https://onecam.ru/src/img/icon__windows.webp" type="image/webp" />
                        <img className={`${Style["img-responsive"]} ${Style["blend-multiply"]}`} src="https://onecam.ru/src/img/icon__windows.webp" alt="" />
                      </picture>
                    </a>
                  </div>
                  <p className={Style["mb-0"]}>
                    <span style={{verticalAlign: 'inherit'}}>
                      <span style={{verticalAlign: 'inherit'}}>Bạn cũng có thể tải xuống ứng dụng di động cho iPhone và Android để giám sát từ xa và làm việc với các bản ghi video từ camera giám sát của mình.</span>
                    </span>
                  </p>
                  <div className={`${Style.flex} ${Style["flex-main-around"]}`}>
                    <a className={Style["p-1"]} href target="_blank" rel="nofollow noopener">
                      <picture>
                        <source srcSet="https://onecam.ru/src/img/icon__app-store.webp" type="image/webp" />
                        <img className={`${Style["img-responsive"]} ${Style["blend-multiply"]} ${Style.w147}`} src="https://onecam.ru/src/img/icon__app-store.webp" alt="" />
                      </picture>
                    </a>
                    <a className={Style["p-1"]} href target="_blank" rel="nofollow noopener">
                      <picture>
                        <source srcSet="https://onecam.ru/src/img/icon__google-play.webp" type="image/webp" />
                        <img className={`${Style["img-responsive"]} ${Style["blend-multiply"]} ${Style.w175}`} src="https://onecam.ru/src/img/icon__google-play.webp" alt="" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["pv-1"]} ${Style["text-center"]}`}>
                  <picture>
                    <source srcSet="https://onecam.ru/src/img/iphone.webp" type="image/webp" />
                    <img className={Style["out-of-bounds-pic__image"]} src="https://onecam.ru/src/img/iphone.webp" alt="" />
                  </picture>
                </div>
              </div>
            </div>
          </section>
          <section className={Style.section}>
            <div className={Style.container}>
              <h2>
                <font style={{verticalAlign: 'inherit'}}>
                  <font style={{verticalAlign: 'inherit'}}>Thuận lợi</font>
                </font>
              </h2>
              <div className={Style.row}>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["col-lg-4"]}`}>
                  <div className={Style.feature}>
                    <div className={Style.feature__icon}>
                      <svg className={Style["features-icon"]} xmlns="http://www.w3.org/2000/svg" height={82} viewBox="0 0 82.1 82">
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M29.1 44.1c-.7.7-1.9 2-1.9 2L13.4 59.9l-8.8 4.9c-.2.1-.4.3-.6.6L.1 73.3c-.3.5-.2 1.2.3 1.6l4.9 4.9c.3.3.6.4 1 .4.2 0 .4 0 .6-.1l7.9-3.9c.2-.1.5-.3.6-.6l4.9-8.8L34 53s1.2-1.2 1.9-2l-6.8-6.9zM18.2 64.9c-.1.1-.2.2-.2.3l-4.8 8.5L6.6 77l-3.5-3.5L6.4 67l8.5-4.8c.1-.1.2-.1.3-.2l13.9-13.9L32 51 18.2 64.9zM79.5 7.5l-4.9-4.9C71.4-.7 66-.9 62.5 2.1l-8.7 7.5-.3.3-8.4 14-5.4 1.8c-.5.2-.8.5-.9 1-.1.5 0 1 .4 1.3l14.7 14.7c.3.3.6.4 1 .4h.3c.5-.1.8-.5 1-.9l1.8-5.4 14.2-8.6.3-.3 7.3-8.5c3.1-3.3 2.9-8.7-.3-11.9zm-1.6 10.2L70.7 26l-14.5 8.8c-.3.2-.5.4-.6.8l-1.3 3.8L51 36l-4.9-4.9-3.3-3.3 3.8-1.3c.3-.1.6-.3.8-.6L56 11.6l8.5-7.4c2.4-2 6.1-1.9 8.3.3l4.9 4.9c2.1 2.2 2.2 5.9.2 8.3z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-main"]} fill="#dd182b" d="M20.7 30.7l-5.8.6-6.5-1.1L3.3 25l-1.6-6.9 1.1-4.9 10.5 8.7 6.9-7.5-9.1-9.7 5.6-.6L23 5.2l4.5 4.6 2.2 5.3-.8 7.8 31 30.5 6.1-.8 4.9 1.4 5 3.8 2.5 5.6-.1 3.7-.8 4.3-10.3-8.8-7.3 6.9 8.9 9.6-2.4 1.5-5.5-.9-5.8-2.2-4.1-6.6-.4-7.2 1.2-1.9z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M75.6 55.9c-4.1-4.1-10.1-5.5-15.5-3.7L30.5 22.6c1.8-5.4.3-11.5-3.7-15.5C22.4 2.7 16 1.4 10.3 3.6c-.4.2-.8.6-.9 1-.1.5 0 .9.4 1.3l8.8 8.8-5.9 5.9L4 11.8c-.3-.3-.8-.5-1.3-.4-.5.1-.8.4-1 .9C-.5 18 .8 24.4 5.1 28.7c4.1 4.1 10.1 5.5 15.5 3.7l11 11 2 2 2.9 2.9 2 2L50.2 62c-1.8 5.4-.3 11.5 3.7 15.5 2.9 2.9 6.8 4.5 10.8 4.5 1.9 0 3.8-.3 5.6-1.1.4-.2.8-.6.9-1 .1-.5 0-.9-.4-1.3L62 69.8l5.9-5.9 8.8 8.8c.3.3.8.5 1.3.4.5-.1.8-.4 1-.9 2.2-5.6.9-12-3.4-16.3zM77 69.1L68.9 61c-.5-.5-1.4-.5-2 0L59 68.8c-.3.3-.4.6-.4 1s.1.7.4 1l8.2 8.2c-4.1.8-8.3-.4-11.3-3.4-3.5-3.5-4.6-8.8-2.8-13.4.2-.5.1-1.1-.3-1.5L22 29.8c-.3-.3-.6-.4-1-.4-.2 0-.3 0-.5.1-4.6 1.8-9.9.7-13.4-2.8-3-3-4.2-7.2-3.4-11.3l8.2 8.2c.5.5 1.4.5 2 0l7.9-7.9c.5-.5.5-1.4 0-2l-8.2-8.2c3.9-.7 8.2.5 11.2 3.5 3.5 3.5 4.6 8.8 2.8 13.4-.2.5-.1 1.1.3 1.5l30.8 30.8c.4.4 1 .5 1.5.3 4.6-1.8 9.9-.7 13.4 2.8 3 3 4.2 7.3 3.4 11.3z">&nbsp;</path>
                      </svg>
                    </div>
                    <div className={Style.feature__text}>
                      <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}>Dễ dàng lắp đặt và tháo dỡ thiết bị</font>
                      </font>
                    </div>
                  </div>
                </div>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["col-lg-4"]}`}>
                  <div className={Style.feature}>
                    <div className={Style.feature__icon}>
                      <svg className={Style["features-icon"]} xmlns="http://www.w3.org/2000/svg" height="93.9" viewBox="0 0 88 93.9">
                        <path className={Style["features-icon__fill-color-main"]} fill="#dd182b" d="M23 14.7l33.6.4v5.3l-2 1-.3 2.3-1 .3v7.2L48 37.6 43.4 40l-5.1-.3-5.8-2L28 31l-.4-7-.6-.6V21l-2.5.4.1-5.7z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M57.2 14.4H20.8v1.2h3.1v6.2h2.5v2.5h.6v3.1C27 34.9 33.1 41 40.6 41s13.6-6.1 13.6-13.6v-3.1h.6v-2.5h2.5v-6.2h3.1v-1.2h-3.2zm-4.3 13c0 6.8-5.5 12.3-12.3 12.3s-12.3-5.5-12.3-12.3v-3.1H53v3.1zm.6-4.4H27.6v-1.2h25.9V23zm-28.4-2.4v-4.9h30.8v4.9H25.1z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M40.5 38.4c3.1 0 5.5-2.5 5.5-5.5 0-3.1-2.5-5.5-5.5-5.5-3.1 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5zm0-9.8c2.4 0 4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3-4.3-1.9-4.3-4.3 1.9-4.3 4.3-4.3z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M40.5 36c1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1s-3.1 1.4-3.1 3.1c0 1.7 1.4 3.1 3.1 3.1zm0-5c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8c0-.9.8-1.8 1.8-1.8z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M40.34 33.977l-.85-.849 1.203-1.202.848.848zM37.4 17.5h1.2v1.2h-1.2zm2.5 0h1.2v1.2h-1.2zm2.5 0h1.2v1.2h-1.2z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M75.3 19.7h-7.2c-.7-8.5-7.4-15.1-15.6-15.1-2.5 0-4.9.6-7.1 1.8C41.7 2.3 36.6 0 31.2 0 20.7 0 12.1 8.7 11.4 19.7 5 20.5 0 26.3 0 33.3c0 7.5 5.7 13.6 12.8 13.6h62.5c7.1 0 12.8-6.1 12.8-13.6s-5.8-13.6-12.8-13.6zm0 24.2H12.8c-5.5 0-9.9-4.7-9.9-10.6s4.5-10.6 9.9-10.6h1.4v-1.5c0-10 7.6-18.2 17-18.2 4.9 0 9.6 2.3 12.8 6.2l.8 1 1-.7c2-1.3 4.3-2 6.7-2 7.1 0 12.8 6.1 12.8 13.6v1.5h9.9c5.5 0 9.9 4.7 9.9 10.6s-4.4 10.7-9.8 10.7zm-10 43.9V60.5H28.4v27.3h12.8v3h-4.3v3h20v-3h-4.3v-3h12.7zm-15.6 3H44v-3h5.7v3zm-8.5-6h-9.9V63.6h31.2v21.2H41.2zM1.4 63.6v30.3h19.9V63.6H1.4zm17.1 27.2H4.3V66.6h14.2v24.2zm53.9-21.2v24.2h14.2V69.6H72.4zm2.9 3.1h8.5v12.1h-8.5V72.7zm8.5 18.1h-8.5v-3h8.5v3z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M9.9 86.3h2.8v3H9.9zM27 49.9V53H9.9v7.5h2.9V56h17v-6.1zM63.9 53v-3.1h-2.8V56h17v4.5h2.8V53zm-18.5-3.1h2.8V59h-2.8z">&nbsp;</path>
                      </svg>
                    </div>
                    <div className={Style.feature__text}>
                      <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}>Duyệt web trực tuyến, lưu trữ đám mây</font>
                      </font>
                    </div>
                  </div>
                </div>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["col-lg-4"]}`}>
                  <div className={Style.feature}>
                    <div className={Style.feature__icon}>
                      <svg className={Style["features-icon"]} xmlns="http://www.w3.org/2000/svg" width="55.5" height="48.6" viewBox="0 0 55.5 48.6">
                        <path className={`${Style["features-icon__fill-color-main"]} ${Style["features-icon__stroke-color-dark"]}`} fill="#dd182b" stroke="#181b28" strokeMiterlimit={10} d="M38.2 29.4l-6.5-6.5c-.3-.3-.7-.1-.8.2l-1.7 7.6c-.1.3 0 .6.2.8.2.2.4.3.6.3h.2l7.6-1.7c.5 0 .6-.5.4-.7zM54.7 14l-7.3-7.3c-.4-.4-.9-.4-1.3 0l-3.2 3.1c-.2.2-.2.5 0 .7l8 8c.2.2.5.2.6 0l3.2-3.1c.2-.2.3-.4.3-.6 0-.4-.1-.6-.3-.8z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M51 31.4L44.6 25l4.9-4.7c.2-.2.2-.5 0-.7l-7.9-7.9c-.2-.2-.5-.2-.6 0L36.6 16l-3.9-3.9c-.2-.2-.4-.3-.6-.3H16.5c-.5 0-.9.4-.9.9v4.1c-1.7.3-2.8.4-3.7-.4-.8-.7-1-1.5-1.3-2.8-.2-.8-.4-1.6-.8-2.7C8.7 8.1 4.8 3.4 1.6.2 1.2-.2.7-.2.3.2s-.4.9 0 1.3C4 5.3 7.2 9.5 8 11.7c.4.9.6 1.8.8 2.5.4 1.5.7 2.7 1.9 3.8.9.8 1.9 1.1 3 1.1.6 0 1.2-.1 1.9-.2v10.5c0 .2.1.5.3.6l17.4 18.3c.2.2.4.3.7.3.2 0 .5-.1.6-.3L51 32.7c.2-.2.3-.4.3-.7 0-.2-.1-.4-.3-.6zM33.9 46.3L17.4 28.9V18.5c.6-.1 1.2-.2 1.8-.2-.2.8-.2 1.6.9 2.7.5.6 1.3.9 2 .9 1.9 0 3.4-1.8 2.8-3.8-.3-.9-1-1.7-1.9-2-1-.3-1.9-.1-2.6.3-1.1-.1-2.1 0-3.1.2v-2.9h14.3l3.6 3.6-3 2.9c-.2.2-.2.5 0 .7l7.9 7.9c.2.2.5.2.6 0l2.5-2.5 5.7 5.7-15 14.3zM20.9 19c0-.6.5-1.2 1.2-1.2.6 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2c-.7-.1-1.2-.6-1.2-1.2z">&nbsp;</path>
                      </svg>
                    </div>
                    <div className={Style.feature__text}>
                      <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}>Tỷ lệ linh hoạt, chúng tôi sẽ chọn theo mục tiêu và mục tiêu của bạn</font>
                      </font>
                    </div>
                  </div>
                </div>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["col-lg-4"]}`}>
                  <div className={Style.feature}>
                    <div className={Style.feature__icon}>
                      <svg className={Style["features-icon"]} xmlns="http://www.w3.org/2000/svg" width={50} height="36.7" viewBox="0 0 50 36.7">
                        <path className={Style["features-icon__fill-color-main"]} fill="#dd182b" d="M1.1 2.8l1.5 2.1 2 .4 1.6.4.8-1.3 2.3.8 1.4 1.9 6.8.5 3.6 3.1 18-.1-.4-4.4-1.1-3.6-2.9-1.4-2.4-.4L1 .7z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M47.5 20H46c-1.4 0-2.6 1.1-2.6 2.5v3.1H35v-5c3-.9 5-4.8 5-10.2C40 4.6 37.8.6 34.3 0H.9C.5 0 .1.3.1.7c0 .1-.4 2.1 1 3.8.9 1 2.4 1.6 4.4 1.8C5.2 7.6 5 9 5 10.4c0 5.8 2.6 10.4 5.8 10.4h17.5v10.4c0 1.3 1.1 2.4 2.5 2.4h1.6c1.1 0 2-.7 2.4-1.6h8.5v2.3c0 1.4 1.2 2.5 2.6 2.5h1.5c1.4 0 2.6-1.1 2.6-2.5V22.4c0-1.3-1.1-2.4-2.5-2.4zM34.1 1.6c2 .3 4 2.9 4.2 8H21.2l-3.1-3c-.2-.2-.4-.2-.6-.2h-6.2c-.1-.1-.2-.3-.3-.4l-.2-.2-.1-.1-.1-.1-.1-.1-.3-.3c0-.2-.1-.2-.1-.3-.2-.2-.4-.3-.6-.4-.1-.2-.3-.3-.4-.4-.1-.1-.2-.1-.3-.2-1.2-.9-2.7-1.7-4-2.3h29.3zM11.7 9.3c0 1.7-.5 2.8-.8 3.3-.4-.5-.9-1.6-.9-3.3 0-.6.1-1.2.2-1.6.1.1.2.1.3.2h.1c0 .1.2.1.3.1h.7c.1.4.1.9.1 1.3zM2.4 3.4C2 3 1.8 2.4 1.7 2c1.3.5 3 1.3 4.5 2.2-.1.2-.2.4-.2.6-1.7-.1-2.9-.6-3.6-1.4zm4.3 7c0-1.9.3-3.8.9-5.3h.1c.5.4.9.7 1.3 1-.3.7-.6 1.8-.6 3.2 0 2.7 1.2 5.1 2.5 5.1s2.5-2.4 2.5-5.1c0-.5 0-.9-.1-1.3h1.6c.1.8.1 1.6.1 2.4 0 4.9-2.2 8.8-4.2 8.8-1.9 0-4.1-3.6-4.1-8.8zm7.2 8.8c.1-.1.1-.1 0 0 .2-.3.4-.5.5-.7l.1-.1c.2-.2.3-.5.5-.8 0-.1.1-.2.1-.2.1-.2.2-.4.3-.7 0-.1.1-.2.1-.3.1-.2.2-.5.3-.8 0-.1.1-.2.1-.3.1-.3.2-.7.3-1.1V14c.1-.3.1-.6.2-.9 0-.1 0-.2.1-.4 0-.3.1-.6.1-.8V8h.5l3.1 3c.2.2.4.2.6.2h17.4c-.2 5-2.2 7.6-4.2 8H13.9zm18.6 12.7h-1.6c-.5 0-.9-.4-.9-.8V20.8h3.3v10.4c.1.4-.3.7-.8.7zm2.5-1.6v-3.2h8.3v3.2H35zm13.4 4c0 .5-.4.9-.9.9H46c-.5 0-.9-.4-.9-.9V22.5c0-.5.4-.9.9-.9h1.5c.5 0 .9.4.9.9v11.8z">&nbsp;</path>
                        <ellipse className={Style["features-icon__fill-color-dark"]} fill="#181b28" cx="26.7" cy={16} rx=".8" ry=".8" />
                        <ellipse className={Style["features-icon__fill-color-dark"]} fill="#181b28" cx="23.4" cy={16} rx=".8" ry=".8" />
                        <ellipse className={Style["features-icon__fill-color-dark"]} fill="#181b28" cx={20} cy={16} rx=".8" ry=".8" />
                      </svg>
                    </div>
                    <div className={Style.feature__text}>
                      <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}>Camera để theo dõi và giải quyết mọi vấn đề</font>
                      </font>
                    </div>
                  </div>
                </div>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["col-lg-4"]}`}>
                  <div className={Style.feature}>
                    <div className={Style.feature__icon}>
                      <svg className={Style["features-icon"]} xmlns="http://www.w3.org/2000/svg" width="47.8" height="47.8" viewBox="0 0 47.8 47.8">
                        <path className={`${Style["features-icon__fill-color-main"]} ${Style["features-icon__stroke-color-dark"]}`} fill="#dd182b" stroke="#181b28" strokeMiterlimit={10} d="M11.9 20.3C5.6 20.3.5 15.2.5 8.9V.5h22.9v8.4c0 6.3-5.1 11.4-11.5 11.4z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M44 20.3H18c-2.1 0-3.8 1.7-3.8 3.8v15.3c0 2.1 1.7 3.8 3.8 3.8h4.6v3.1h-3.1v1.5h23v-1.5h-3.1v-3.1H44c2.1 0 3.8-1.7 3.8-3.8V24.1c0-2.1-1.7-3.8-3.8-3.8zm-26 1.6h26c1.3 0 2.3 1 2.3 2.3v13H15.8v-13c0-1.3 1-2.3 2.2-2.3zm19.9 24.4H24.1v-3.1h13.7v3.1zm6.1-4.6H18c-1.3 0-2.3-1-2.3-2.3v-.8h30.5v.8c.1 1.3-1 2.3-2.2 2.3zM17.3 11.9c0-2.9-2.4-5.3-5.3-5.3S6.6 9 6.6 11.9s2.4 5.3 5.3 5.3 5.4-2.3 5.4-5.3zm-5.4 3.9c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M11.9 9.7c-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3 2.3-1 2.3-2.3-1-2.3-2.3-2.3zm0 3c-.4 0-.8-.3-.8-.8 0-.4.3-.8.8-.8.4 0 .8.3.8.8s-.3.8-.8.8zm8.4-9.1h3.1v1.5h-3.1zM.5 3.6h18.3v1.5H.5zM31 11.2c1.3 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3c-1.3 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zm0-3.1c.4 0 .8.3.8.8 0 .4-.3.8-.8.8s-.8-.3-.8-.8c.1-.4.4-.8.8-.8z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M34.8 8.9c0 2.1-1.7 3.8-3.8 3.8v1.5c2.9 0 5.3-2.4 5.3-5.3S34 3.6 31 3.6v1.5c2.1 0 3.8 1.7 3.8 3.8z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M37.9 8.9c0 3.8-3.1 6.9-6.9 6.9v1.5c4.6 0 8.4-3.8 8.4-8.4S35.6.5 31 .5V2c3.8 0 6.9 3.1 6.9 6.9zm-29 28.2c-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3 2.3-1 2.3-2.3-1-2.3-2.3-2.3zm0 3.1c-.4 0-.8-.3-.8-.8 0-.4.3-.8.8-.8.4 0 .8.3.8.8 0 .4-.4.8-.8.8z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M5.1 39.4c0-2.1 1.7-3.8 3.8-3.8v-1.5c-2.9 0-5.3 2.4-5.3 5.3s2.4 5.3 5.3 5.3v-1.5c-2.1 0-3.8-1.7-3.8-3.8z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M2 39.4c0-3.8 3.1-6.9 6.9-6.9V31C4.3 31 .5 34.8.5 39.4s3.8 8.4 8.4 8.4v-1.5c-3.8 0-6.9-3.1-6.9-6.9z">&nbsp;</path>
                      </svg>
                    </div>
                    <div className={Style.feature__text}>
                      <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}>kết nối an toàn</font>
                      </font>
                    </div>
                  </div>
                </div>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["col-lg-4"]}`}>
                  <div className={Style.feature}>
                    <div className={Style.feature__icon}>
                      <svg className={Style["features-icon"]} xmlns="http://www.w3.org/2000/svg" width="41.2" height="41.4" viewBox="0 0 41.2 41.4">
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M20.464 21.8l13.257-7.434 1.419 2.53-13.258 7.434zm.841 3.42l13.062 7.773-1.483 2.492-13.062-7.773z">&nbsp;</path>
                        <circle className={Style["features-icon__fill-color-dark"]} fill="#181b28" cx="35.1" cy="15.1" r="6.2" />
                        <circle className={Style["features-icon__fill-color-dark"]} fill="#181b28" cx="20.2" cy="24.9" r="6.2" />
                        <circle className={Style["features-icon__fill-color-dark"]} fill="#181b28" cx={35} cy="35.2" r="6.2" />
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M15.5 7.3c-4.5 0-8.2 3.7-8.2 8.2s3.7 8.2 8.2 8.2 8.2-3.7 8.2-8.2-3.7-8.2-8.2-8.2zm0 14.6c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.9 6.4-6.4 6.4z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M15.5 11.9c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6zm0 5.4c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-dark"]} fill="#181b28" d="M29.2 37.2c-.8-1.6-2.3-2.5-4.1-2.5h-1.4c-3.6 0-3.6-4.4-3.6-4.6v-.5c0-.3-.1-.5-.4-.7-.2-.2-.5-.2-.8-.2-1.1.3-2.3.4-3.4.4C8 29.2 1.8 23 1.8 15.5c0-4.8 2.5-9.1 6.3-11.5l.2.6c.3.7.8 1.2 1.4 1.5.4.2.7.2 1.1.2.3 0 .7-.1 1-.2 2.3-.9 4.9-.9 7.2 0 .7.3 1.4.2 2.1-.1.7-.3 1.2-.8 1.4-1.5l.4-.5c3.8 2.4 6.3 6.7 6.3 11.5 0 4.9-2.6 9.4-6.8 11.9-.4.3-.6.8-.3 1.2.3.4.8.6 1.2.3C28 26.2 31 21 31 15.5 31 7 24.1 0 15.5 0S0 7 0 15.5 7 31 15.5 31c.9 0 1.9-.1 2.8-.2.2 2.3 1.5 5.7 5.4 5.7h1.4c1 0 2 .6 2.4 1.5l.2.3H3.3l.2-.3c.5-.9 1.4-1.5 2.4-1.5h11.4c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-6c.3-.4.6-.9.9-1.5.2-.5 0-1-.5-1.2-.5-.2-1 0-1.2.5-.6 1.5-1.6 2.2-3.2 2.2H5.9c-1.7 0-3.3 1-4.1 2.5L1 38.8c-.1.3-.1.6 0 .9s.5.4.8.4h27.4c.3 0 .6-.2.8-.4.2-.3.2-.6 0-.9l-.8-1.6zM15.5 1.8c2 0 4 .5 5.7 1.3l-.3.8c-.1.2-.3.4-.5.5-.2.1-.5.1-.7 0-2.7-1-5.8-1-8.5 0-.2.1-.5.1-.7 0-.2-.1-.4-.3-.5-.5l-.2-.8c1.7-.8 3.7-1.3 5.7-1.3z">&nbsp;</path>
                        <path className={Style["features-icon__fill-color-main"]} fill="#dd182b" d="M35 30.2c-1.6 0-3 .7-3.9 1.9l-6.9-4c.7-.9 1.1-2 1.1-3.2 0-1.1-.4-2.1-1-3l6.6-3.7c.9 1.3 2.4 2.1 4.1 2.1 2.8 0 5.1-2.3 5.1-5.1s-2.3-5.1-5.1-5.1-5.1 2.3-5.1 5.1c0 .7.2 1.4.4 2L23.5 21c-.9-.8-2.1-1.3-3.4-1.3-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1c1.2 0 2.3-.4 3.2-1.1l7.1 4.1c-.4.7-.6 1.5-.6 2.3 0 2.8 2.3 5.1 5.1 5.1S40 38 40 35.2s-2.2-5-5-5z">&nbsp;</path>
                      </svg>
                    </div>
                    <div className={Style.feature__text}>
                      <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}>Chia sẻ video từ máy ảnh của bạn</font>
                      </font>
                    </div>
                  </div>
                </div>
              </div>
              <h2>
                <font style={{verticalAlign: 'inherit'}}>
                  <font style={{verticalAlign: 'inherit'}}>Combo phổ biến</font>
                </font>
              </h2>
              <div className={Style.row}>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["col-lg-3"]}`}>
                  <div className={`${Style.plate} ${Style["plate--product"]} ${Style["plate--fx-lift"]}`}>
                    <div className={Style["product-one-cam"]} itemScope itemType="http://schema.org/Product">
                      <meta itemProp="name" content="START" />
                      <meta itemProp="description" content="1 камера, 3 дня архива, 1 Мбит/с" />
                      <div className={Style.product__title} style={{height: '71px'}}>
                        <div className={Style["product__title-inner"]}>
                          <a href="/cloud/start">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}> BẮT ĐẦU </font>
                            </font>
                          </a>
                        </div>
                      </div>
                      <div className={`${Style.product__image} ${Style["product__image--cover"]}`}>
                        <div className={Style["object-fit-wrap"]}>
                          <img src="//halk.cdn.filanco.ru/cl822?85bee6aaf14f4a42a0fd4f0c38e77c65" alt="" />
                        </div>
                      </div>
                      <div className={Style.product__body} itemProp="offers" itemScope itemType="http://schema.org/Offer">
                        <div className={Style.product__desc}>
                          <ul>
                            <li>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>1 máy ảnh</font>
                              </font>
                            </li>
                            <li>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>lưu trữ 3 ngày</font>
                              </font>
                            </li>
                            <li>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>1 Mb/giây</font>
                              </font>
                            </li>
                          </ul>
                        </div>
                        <meta itemProp="priceCurrency" content="RUB" />
                        <div className={Style.product__price}>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>từ </font>
                          </font>
                          <span itemProp="price">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>350</font>
                            </font>
                          </span>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}> VND / tháng</font>
                          </font>
                        </div>
                        <div className={Style.product__btn}>
                          <a className={Style["product__more-link"]} href="/cloud/start">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>Hơn</font>
                            </font>
                          </a>
                          <button  onClick={() => setIsShown(true)}  className={`${Style.btn} ${Style["btn--w-md"]}`} data-popup-target="tariff" data-popup-title="START" data-popup-content-tamplate-id="popup-content-template__start" data-popup-form-item="cloud-tariff__start">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>để đặt hàng</font>
                            </font>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["col-lg-3"]}`}>
                  <div className={`${Style.plate} ${Style["plate--product"]} ${Style["plate--fx-lift"]}`}>
                    <div className={Style["product-one-cam"]} itemScope itemType="http://schema.org/Product">
                      <meta itemProp="name" content="LIGHT" />
                      <meta itemProp="description" content="1 камера, 7 дней архива, 1 Мбит/с" />
                      <div className={Style.product__title} style={{height: '71px'}}>
                        <div className={Style["product__title-inner"]}>
                          <a href="/cloud/light">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}> ÁNH SÁNG </font>
                            </font>
                          </a>
                        </div>
                      </div>
                      <div className={`${Style.product__image} ${Style["product__image--cover"]}`}>
                        <div className={Style["object-fit-wrap"]}>
                          <img src="//halk.cdn.filanco.ru/cl82d?66cb6f264fc28bfb8b1e0c5afe9f0bcd" alt="" />
                        </div>
                      </div>
                      <div className={Style.product__body} itemProp="offers" itemScope itemType="http://schema.org/Offer">
                        <div className={Style.product__desc}>
                          <ul>
                            <li>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>1 máy ảnh</font>
                              </font>
                            </li>
                            <li>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>7 ngày lưu trữ</font>
                              </font>
                            </li>
                            <li>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>1 Mb/giây</font>
                              </font>
                            </li>
                          </ul>
                        </div>
                        <meta itemProp="priceCurrency" content="RUB" />
                        <div className={Style.product__price}>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>từ </font>
                          </font>
                          <span itemProp="price">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>420</font>
                            </font>
                          </span>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}> VND / tháng</font>
                          </font>
                        </div>
                        <div className={Style.product__btn}>
                          <a className={Style["product__more-link"]} href="/cloud/light">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>Hơn</font>
                            </font>
                          </a>
                          <button onClick={() => setIsShown(true)} className={`${Style.btn} ${Style["btn--w-md"]}`} data-popup-target="tariff" data-popup-title="LIGHT" data-popup-content-tamplate-id="popup-content-template__light" data-popup-form-item="cloud-tariff__light">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>để đặt hàng</font>
                            </font>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["col-lg-3"]}`}>
                  <div className={`${Style.plate} ${Style["plate--product"]} ${Style["plate--fx-lift"]}`}>
                    <div className={Style["product-one-cam"]} itemScope itemType="http://schema.org/Product">
                      <meta itemProp="name" content="STANDART" />
                      <meta itemProp="description" content="1 камера, 14 дней архива, 1 Мбит/с" />
                      <div className={Style.product__title} style={{height: '71px'}}>
                        <div className={Style["product__title-inner"]}>
                          <a href="/cloud/standart">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}> TIÊU CHUẨN </font>
                            </font>
                          </a>
                        </div>
                      </div>
                      <div className={`${Style.product__image} ${Style["product__image--cover"]}`}>
                        <div className={Style["object-fit-wrap"]}>
                          <img src="//halk.cdn.filanco.ru/cl82e?d81ea150af4abf89b71cfb579549f9fc" alt="" />
                        </div>
                      </div>
                      <div className={Style.product__body} itemProp="offers" itemScope itemType="http://schema.org/Offer">
                        <div className={Style.product__desc}>
                          <ul>
                            <li>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>1 máy ảnh</font>
                              </font>
                            </li>
                            <li>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>lưu trữ 14 ngày</font>
                              </font>
                            </li>
                            <li>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>1 Mb/giây</font>
                              </font>
                            </li>
                          </ul>
                        </div>
                        <meta itemProp="priceCurrency" content="RUB" />
                        <div className={Style.product__price}>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>từ </font>
                          </font>
                          <span itemProp="price">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>620</font>
                            </font>
                          </span>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}> VND / tháng</font>
                          </font>
                        </div>
                        <div className={Style.product__btn}>
                          <a className={Style["product__more-link"]} href="/cloud/standart">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>Hơn</font>
                            </font>
                          </a>
                          <button  onClick={() => setIsShown(true)}  className={`${Style.btn} ${Style["btn--w-md"]}`} data-popup-target="tariff" data-popup-title="STANDART" data-popup-content-tamplate-id="popup-content-template__standart" data-popup-form-item="cloud-tariff__standart">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>để đặt hàng</font>
                            </font>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${Style["col-12"]} ${Style["col-md-6"]} ${Style["col-lg-3"]}`}>
                  <div className={`${Style.plate} ${Style["plate--product"]} ${Style["plate--fx-lift"]}`}>
                    <div className={Style["product-one-cam"]} itemScope itemType="http://schema.org/Product">
                      <meta itemProp="name" content="ULTIMA" />
                      <meta itemProp="description" content="1 камера, 21 дней архива, 1 Мбит/с" />
                      <div className={Style.product__title} style={{height: '71px'}}>
                        <div className={Style["product__title-inner"]}>
                          <a href="/cloud/ultima">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}> TUYỆT VỜI </font>
                            </font>
                          </a>
                        </div>
                      </div>
                      <div className={`${Style.product__image} ${Style["product__image--cover"]}`}>
                        <div className={Style["object-fit-wrap"]}>
                          <img src="//halk.cdn.filanco.ru/fzujp?99266801162b272b83cfcbbb382fe53a" alt="" />
                        </div>
                      </div>
                      <div className={Style.product__body} itemProp="offers" itemScope itemType="http://schema.org/Offer">
                        <div className={Style.product__desc}>
                          <ul>
                            <li>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>1 máy ảnh</font>
                              </font>
                            </li>
                            <li>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>lưu trữ 21 ngày</font>
                              </font>
                            </li>
                            <li>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>1 Mb/giây</font>
                              </font>
                            </li>
                          </ul>
                        </div>
                        <meta itemProp="priceCurrency" content="RUB" />
                        <div className={Style.product__price}>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>từ </font>
                          </font>
                          <span itemProp="price">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>820</font>
                            </font>
                          </span>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}> VND / tháng</font>
                          </font>
                        </div>
                        <div className={Style.product__btn}>
                          <a className={Style["product__more-link"]} href="/cloud/ultima">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>Hơn</font>
                            </font>
                          </a>
                          <button  onClick={() => setIsShown(true)}  className={`${Style.btn} ${Style["btn--w-md"]}`} data-popup-target="tariff" data-popup-title="ULTIMA" data-popup-content-tamplate-id="popup-content-template__ultima" data-popup-form-item="cloud-tariff__ultima">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>để đặt hàng</font>
                            </font>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={`${Style.section} ${Style["bg-gray"]} ${Style["out-of-bounds-pic"]} ${Style["out-of-bounds-pic--worker-2"]}`}>
            <div className={Style.container}>
              <div className={Style.row}>
                <div class={`${Style["col-12"]} ${Style["col-md-4"]} ${Style["pv-1"]} ${Style.hide} ${Style["show-md"]} ${Style["out-of-bounds-pic__relative"]}`}>
                    <div class={Style["out-of-bounds-pic__absolute"]}>
                      <picture>
                        <source srcSet="https://onecam.ru/src/img/bg-image__worker.webp" type="image/webp" />
                        <img class={Style["out-of-bounds-pic__image"]} src="/src/img/bg-image__worker.png" alt="" />
                      </picture>
                    </div>
                </div>
                <div className={`${Style["col-12"]} ${Style["col-md-8"]} ${Style["text-center"]} ${Style["text-md-left"]}`}>
                  <div className={`${Style.heading} ${Style["heading--h2"]} ${Style["text-center"]} ${Style["text-md-left"]}`}>
                    <h2>
                      <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}>Bạn cần giúp đỡ?</font>
                      </font>
                    </h2>
                  </div>
                  <p>
                    <font style={{verticalAlign: 'inherit'}}>
                      <font style={{verticalAlign: 'inherit'}}> Chuyên gia của chúng tôi sẽ cho bạn biết về tất cả các chức năng </font>
                    </font>
                    <br />
                    <font style={{verticalAlign: 'inherit'}}>
                      <font style={{verticalAlign: 'inherit'}}> của hệ thống và trả lời các câu hỏi của bạn. </font>
                    </font>
                  </p>
                  <button onClick={() => setIsShown(true)} className={`${Style.btn} ${Style["btn--bordered"]} ${Style["btn--transparent"]} ${Style["btn--inverse"]}`} type="button" data-popup-target="simple-request" data-popup-title="Заказать звонок" data-popup-form-action="callback">
                    <font style={{verticalAlign: 'inherit'}}>
                      <font style={{verticalAlign: 'inherit'}}>Yêu cầu gọi tư vấn</font>
                    </font>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </Pane>
      );
}


export default HomePage;