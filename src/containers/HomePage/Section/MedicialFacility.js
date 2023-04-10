import React, { Component, useRef } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './MedicialFacility.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../../assets/images/fac/083122lo-go-viet-duc.jpg';
import image2 from '../../../assets/images/fac/085056logobenhvien108.jpg';
import image3 from '../../../assets/images/fac/104922-logo-med-tai-ha-noi--01.png';
import image4 from '../../../assets/images/fac/151320-benhvienhungviet1.png';
import image5 from '../../../assets/images/fac/152704logo-bvcr-moi.jpg';
import image6 from '../../../assets/images/fac/155206-logo-y-duoc-1.jpg';
import image7 from '../../../assets/images/fac/160340-logo-diag.png';
import image8 from '../../../assets/images/fac/165735-logo-hong-phat.png';
import image9 from '../../../assets/images/fac/181208mediteclogo.jpeg';

const data = [
    {
        img: image1,
        title: 'Bệnh viện hữu nghị việt đức',
    },
    {
        img: image2,
        title: 'Bệnh viện trung ương quân đội',
    },
    {
        img: image3,
        title: 'Bệnh viện MEDLATEC',
    },
    {
        img: image4,
        title: 'Hưng Việt Hospital',
    },
    {
        img: image5,
        title: 'Bệnh viện chợ rẫy',
    },
    {
        img: image6,
        title: 'Bệnh viện y dược TH HCM',
    },
    {
        img: image7,
        title: 'Bệnh viện DIAG',
    },
    {
        img: image8,
        title: 'Bệnh viện Hồng Phát',
    },
    {
        img: image9,
        title: 'MEDITEC CLINNIC',
    },
];

class MedicialFacility extends Component {
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
                <div className="medicial-home-section">
                    <div className="medicial-home-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mt-5 d-flex align-items-center justify-content-between">
                                    <h3 style={{ color: '#45b3d7', margin: '0' }} className=" mt-5 text-uppercase">
                                        Cơ sở y tế nổi bật
                                    </h3>
                                    <button className="button button-primary mt-5" type="">
                                        Tìm kiếm
                                    </button>
                                </div>
                                <div className="col-12 mt-5">
                                    <div className="medicial_content">
                                        <Slider {...settings} className="">
                                            {data.map((item, index) => (
                                                <div key={index} className="medicial_items">
                                                    <Link>
                                                        <div className="medicial_item">
                                                            <img src={item.img} alt="" />
                                                            <div className="mt-4">
                                                                <p>{item.title}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicialFacility);
