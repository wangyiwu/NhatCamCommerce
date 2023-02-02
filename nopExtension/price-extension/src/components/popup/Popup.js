import React from 'react'
import './Popup.css'

function Popup({}){

    return (
            <div className="popup__container">
              <button className="popup__close" type="button" />
              <div className="popup__content popup__content--tariff">
                <div className="heading heading--h1 js-popup-title"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>TIÊU CHUẨN</font></font></div>
                <div className="js-popup-content">
                  <div className="js-tariff-order" data-tariff-cost={620} itemProp="offers" itemScope itemType="http://schema.org/Offer">
                    <input type="hidden" name="tariff_id" defaultValue={26502750} />
                    <div className="range-slider-kit">
                      <div className="range-slider-kit__label text-left"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Thời lượng lưu trữ video (ngày): 14</font></font></div>
                      <input name="length_video_archive" type="hidden" min={14} max={14} step={7} defaultValue={14} data-measure="сут" data-unit={7} data-units-quantity={2} data-min-units-quantity={2} data-max-units-quantity={2} data-cost={0.00} />
                    </div>
                    <div className="range-slider-kit">
                      <div className="range-slider-kit__label"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Máy ảnh</font></font></div>
                      <input name="camera" type="range" min={1} max={10} step={1} defaultValue={1} data-measure="шт" data-unit={1} data-units-quantity={1} data-min-units-quantity={1} data-max-units-quantity={10} data-cost={620.00} style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: 0}} /><div className=" rangeSlider rangeSlider__horizontal" id="js-rangeSlider-335756db-d388-ecea-b93a-a7714dc42956"><div className=" rangeSlider__buffer rangeSlider__buffer__horizontal" /><div className=" rangeSlider__fill rangeSlider__fill__horizontal" style={{width: '9px'}} /><div className=" rangeSlider__handle rangeSlider__handle__horizontal" style={{transform: 'translateX(0px)'}}><span className="rangeSlider__current"><span className="js-range-slider-current-value"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>1</font></font></span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> cái</font></font></span></div></div>
                      <div className="range-slider-grid"><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>1</font></font></span></div><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>2</font></font></span></div><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>3</font></font></span></div><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>bốn</font></font></span></div><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>số năm</font></font></span></div><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>6</font></font></span></div><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>7</font></font></span></div><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>số 8</font></font></span></div><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>chín</font></font></span></div><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>10</font></font></span></div></div>
                    </div>
                    <div className="range-slider-kit">
                      <div className="range-slider-kit__label"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>tốc độ kênh</font></font></div>
                      <input name="speed_channel" type="range" min={1} max={8} step={1} defaultValue={1} data-measure="Мбит/с" data-unit={1} data-units-quantity={1} data-min-units-quantity={1} data-max-units-quantity={8} data-cost={250.00} style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: 0}} /><div className=" rangeSlider rangeSlider__horizontal" id="js-rangeSlider-710df7a3-17b0-abb2-2d3a-ef398f9ff7e2"><div className=" rangeSlider__buffer rangeSlider__buffer__horizontal" /><div className=" rangeSlider__fill rangeSlider__fill__horizontal" style={{width: '9px'}} /><div className=" rangeSlider__handle rangeSlider__handle__horizontal" style={{transform: 'translateX(0px)'}}><span className="rangeSlider__current"><span className="js-range-slider-current-value"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>1</font></font></span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> Mb/giây</font></font></span></div></div>
                      <div className="range-slider-grid"><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>1</font></font></span></div><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>2</font></font></span></div><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>3</font></font></span></div><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>bốn</font></font></span></div><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>số năm</font></font></span></div><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>6</font></font></span></div><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>7</font></font></span></div><div className="range-slider-grid__item range-slider-grid__item--big"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>số 8</font></font></span></div></div>
                    </div>
                    <div className="js-tariff-order__response" />
                    <meta itemProp="priceCurrency" content="RUB" />
                    <div className="price mb-1"><span className="js-tariff-order__total-price" itemProp="price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>620</font></font></span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> rúp/tháng</font></font></div>
                  </div>
                </div>
                <form className="form js-form" method="post" action="/index/form">
                  <div className="form__response js-form__response" />
                  <input type="hidden" name="_action" defaultValue="request-order" className="js-form__action" />
                  <input type="hidden" name="_item" defaultValue="cloud-tariff__standart" className="js-form__item" />
                  <input type="hidden" name="_payload" defaultValue="{&quot;length_video_archive&quot;:&quot;14&quot;,&quot;camera&quot;:&quot;1&quot;,&quot;speed_channel&quot;:&quot;1&quot;,&quot;total_price&quot;:620}" className="js-form__payload" />
                  <div className="form__field form__required">
                    <input className="form-input form-input--bordered form-input--icon-person" autoComplete="off" type="text" name="name" defaultValue placeholder="Tên của bạn" />
                  </div>
                  <div className="form__field form__required">
                    <input className="form-input form-input--bordered form-input--icon-phone js-phone-mask" autoComplete="off" type="text" name="phone" defaultValue placeholder="số điện thoại của bạn" />
                  </div>
                  <div className="form__field">
                    <button className="btn btn--block form__button js-form__submit" type="button"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Gửi</font></font></button>
                  </div>
                </form>
              </div>
            </div>
      )

}

export default Popup