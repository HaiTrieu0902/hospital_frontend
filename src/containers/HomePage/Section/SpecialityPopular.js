import React, { Component, useRef } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './SpecialityPopular.scss';
// import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination, Navigation, Autoplay, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/free-mode/free-mode.min.css';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/thumbs/thumbs.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import image1 from '../../../assets/images/120331-co-xuong-khop.jpg';
import image2 from '../../../assets/images/120933-tieu-hoa.jpg';
import image3 from '../../../assets/images/121042-than-kinh.jpg';
import image4 from '../../../assets/images/121215-cot-song.jpg';
import image5 from '../../../assets/images/121232-y-hoc-co-truyen.jpg';
import image6 from '../../../assets/images/181822-san-phu-khoa.jpg';
import image7 from '../../../assets/images/182940-roi-loan-giac-ngu.jpg';
import image8 from '../../../assets/images/184456-nam-hoc.jpg';
import image9 from '../../../assets/images/190750-than-tiet-nieu.jpg';

const data = [
    {
        img: image1,
        title: 'Cơ xương khớp',
    },
    {
        img: image2,
        title: 'Thần kinh',
    },
    {
        img: image3,
        title: 'Tiêu hóa',
    },
    {
        img: image4,
        title: 'Tim mạch',
    },
    {
        img: image5,
        title: 'Tai mũi họng',
    },
    {
        img: image6,
        title: 'Cột sống',
    },
    {
        img: image7,
        title: 'Y học cổ truyền',
    },
    {
        img: image8,
        title: 'Sản phụ khoa',
    },
    {
        img: image9,
        title: 'Nam khoa',
    },
];

class SpecialityPopular extends Component {
    render() {
        return (
            <>
                <div className="section-specialty">
                    <div className="specialty-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex align-items-center justify-content-between">
                                    <h3 style={{ color: '#45b3d7', margin: '0' }} className="text-uppercase">
                                        Chuyên khoa phổ biến
                                    </h3>
                                    <button className="button button-primary " type="">
                                        Xem thêm
                                    </button>
                                </div>
                                <div className="col-12 mt-5">
                                    <Swiper
                                        breakpoints={{
                                            // when window width is >= 640px
                                            640: {
                                                width: 640,
                                                slidesPerView: 2,
                                            },
                                            // when window width is >= 768px
                                            768: {
                                                width: 768,
                                                slidesPerView: 3,
                                            },
                                            1300: {
                                                width: 1300,
                                                slidesPerView: 4,
                                            },
                                        }}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        slidesPerView={4}
                                        spaceBetween={30}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Pagination, Autoplay, Navigation, A11y, Scrollbar]}
                                        className="mySwiper"
                                    >
                                        {data.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <Link>
                                                    <div className="specialty_items">
                                                        <img src={item.img} alt="" />
                                                        <p className="mt-2">{item.title}</p>
                                                    </div>
                                                </Link>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecialityPopular);
