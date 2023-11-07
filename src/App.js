import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import "./styles.css"

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules"

import like from "./Images/like.png"
import apple from "./Images/apple.png"

import img1 from "./Images/Watches.png"
import img2 from "./Images/Watches2.png"
import img3 from "./Images/Watches3.png"

import blueimg1 from "./Images/blueWatches.png"
import blueimg2 from "./Images/blueWatches2.png"
import blueimg3 from "./Images/blueWatches3.png"

import redimg1 from "./Images/redWatches.png"
import redimg2 from "./Images/redWatches2.png"
import redimg3 from "./Images/redWatches3.png"

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activity, changeActivity] = useState(0)
  const [color, setColor] = useState("black")

  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='col'>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper'
            direction='vertical'
            // navigation={true}
          >
            <div className='swiper-button-prev'></div>
            <div className='swiper-button-next'></div>
            {color === "blue" && (
              <>
                <SwiperSlide>
                  <img src={blueimg1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={blueimg2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={blueimg3} />
                </SwiperSlide>
              </>
            )}
            {color === "black" && (
              <>
                <SwiperSlide>
                  <img src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img3} />
                </SwiperSlide>
              </>
            )}
            {color === "red" && (
              <>
                <SwiperSlide>
                  <img src={redimg1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={redimg2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={redimg3} />
                </SwiperSlide>
              </>
            )}
          </Swiper>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper2'
            direction='vertical'
          >
            {color === "blue" && (
              <>
                <SwiperSlide>
                  <img src={blueimg1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={blueimg2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={blueimg3} />
                </SwiperSlide>
              </>
            )}
            {color === "black" && (
              <>
                <SwiperSlide>
                  <img src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img3} />
                </SwiperSlide>
              </>
            )}
            {color === "red" && (
              <>
                <SwiperSlide>
                  <img src={redimg1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={redimg2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={redimg3} />
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </div>
        <div
          className='col'
          id='info'
        >
          <h3>Apple Watch SE 2022</h3>
          <span>Доступно в рассрочку от 3 499 ₽/мес. Доступно в Trade-In</span>
          <div className='row'>
            <p>Цвет</p>
            <div className='colors'>
              <input
                type='radio'
                className='input'
                name='color'
                id='blue'
                onClick={() => setColor("blue")}
              />
              <input
                type='radio'
                className='input'
                name='color'
                id='black'
                onClick={() => setColor("black")}
                // checked
              />
              <input
                type='radio'
                className='input'
                name='color'
                id='red'
                onClick={() => setColor("red")}
              />
            </div>
          </div>
          <div
            className='row'
            id='screen'
          >
            <p>Экран</p>
            <div className='block'>
              <button
                className={activity === 0 ? ("button", "state") : "button"}
                onClick={() => changeActivity(0)}
              >
                40 мм
              </button>
              <button
                className={activity === 1 ? ("button", "state") : "button"}
                onClick={() => changeActivity(1)}
              >
                44 мм
              </button>
            </div>
          </div>
          <img src='' />
          <div className='row'>
            <h5>33 990 ₽</h5>
            <p>
              <s>43 900 ₽</s>
            </p>
          </div>
          <div className='row'>
            <button>Добавить в корзину</button>
            <button id='like'>
              <img src={like} />
            </button>
          </div>
          <div
            className='row'
            id='last'
          >
            <p>Код товара: MNTG3</p>
            <div className='rowlast'>
              <img
                src={apple}
                className='apple'
              />
              <p>Все товары Apple</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
