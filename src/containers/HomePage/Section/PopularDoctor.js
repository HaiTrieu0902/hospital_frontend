import React, { Component, useRef } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './PopularDoctor.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../../assets/images/doctor/094041pho-giao-su-nguyen-van-lieu.jpg';
import image2 from '../../../assets/images/doctor/094848bs-nguyen-khac-loi-1.jpg';
import image3 from '../../../assets/images/doctor/095620-151612-bsnguyen-thi-hung.jpg';
import image4 from '../../../assets/images/doctor/104038-bsnguyen-tuan-anh.jpg';
import image5 from '../../../assets/images/doctor/150934-bs-nguyenvanthong.jpg';
import image6 from '../../../assets/images/doctor/155630-bs-thanh.png';
import image7 from '../../../assets/images/doctor/171412-bs-phan-dong-huy-vuong.jpg';
import image8 from '../../../assets/images/doctor/151821thac-si-nguyen-van-phi.jpg';
const data = [
    {
        img: image1,
        rank: 'PGS, Tiến sĩ, Bác sĩ Nguyễn Văn Liệu',
        specialist: 'Thần kinh',
    },
    {
        img: image2,
        rank: 'Bác sĩ chuyên khoa II Nguyễn Khắc Lợi',
        specialist: 'Nam học',
    },
    {
        img: image3,
        rank: 'PGS,Tiến sĩ, Bác sĩ Nguyễn Thi Hùng',
        specialist: 'Thần kinh',
    },
    {
        img: image4,
        rank: 'Bác sĩ chuyên khoa I Nguyễn Tuấn Anh',
        specialist: 'Cơ xương khớp',
    },
    {
        img: image5,
        rank: 'Giáo sư, Tiến sĩ Nguyễn Văn Thông',
        specialist: 'Thần kinh',
    },
    {
        img: image6,
        rank: 'Bác sĩ Chuyên khoa II Nguyễn Tiến Thành',
        specialist: 'Da liễu',
    },
    {
        img: image7,
        rank: 'Bác sĩ Chuyên khoa I Phan Huy Đông',
        specialist: 'Chấn thương - chỉnh hình',
    },
    {
        img: image8,
        rank: 'Bác sĩ Chuyên khoa I Nguyễn Văn Huy',
        specialist: 'Sức khỏe tâm thần',
    },
];

class PopularDoctor extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
            ],
        };
        return (
            <>
                <div className="popular-home-section">
                    <div className="popular-home-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mt-5 d-flex align-items-center justify-content-between">
                                    <h3 style={{ color: '#45b3d7', margin: '0' }} className=" mt-5 text-uppercase">
                                        Bác sĩ nổi bật tuần qua
                                    </h3>
                                    <button className="button button-primary mt-5" type="">
                                        Tìm kiếm
                                    </button>
                                </div>
                                <div className="col-12 mt-5">
                                    <div className="popular_content">
                                        <Slider {...settings} className="popular_slider">
                                            {data.map((item, index) => (
                                                <div key={index} className="popular_items">
                                                    <Link>
                                                        <div className="popular_item">
                                                            <div className="popular-img">
                                                                <img src={item.img} alt="" />
                                                            </div>
                                                            <div className="mt-4 text-center">
                                                                <p className="popular_rank">{item.rank}</p>
                                                                <p className="popular_special">{item.specialist}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PopularDoctor);
