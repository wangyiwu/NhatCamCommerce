import React from 'react'
import './Product.css';

function Product({handleClick}){
    return (
        <div className="product" >
          <div className="product__title" style={{height:71}}>
            <div className="product__title-inner">
              <a href="/cloud/start">
                <font >
                  <font > BẮT ĐẦU </font>
                </font>
              </a>
            </div>
          </div>
          <div className="product__image product__image--cover">
            <div className="object-fit-wrap">
              <img src="//halk.cdn.filanco.ru/cl822?85bee6aaf14f4a42a0fd4f0c38e77c65" alt=""/>
            </div>
          </div>
          <div className="product__body">
            <div className="product__desc">
              <ul>
                <li>
                  <font >
                    <font >1 máy ảnh</font>
                  </font>
                </li>
                <li>
                  <font >
                    <font >lưu trữ 3 ngày</font>
                  </font>
                </li>
                <li>
                  <font >
                    <font >1 Mb/giây</font>
                  </font>
                </li>
              </ul>
            </div>
            <div className="product__price">
              <font >
                <font >từ </font>
              </font>
              <span >
                <font >
                  <font >350</font>
                </font>
              </span>
              <font >
                <font > rúp / tháng</font>
              </font>
            </div>
            <div className="product__btn">
              <button className="btn btn--w-md" onClick={handleClick}>
                <font >
                  <font >để đặt hàng</font>
                </font>
              </button>
            </div>
          </div>
        </div>
    );
}

export default Product