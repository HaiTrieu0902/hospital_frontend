import React, { Component, useRef } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './About.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../../assets/images/brand/ictnews.png';
import image2 from '../../../assets/images/brand/suckhoedoisong.png';
import image3 from '../../../assets/images/brand/vnexpress.png';
import image4 from '../../../assets/images/brand/vtcgo.png';
import image5 from '../../../assets/images/brand/vtcnews.png';
import image6 from '../../../assets/images/brand/vtv1.png';
const data = [
    {
        img: image1,
    },
    {
        img: image2,
    },
    {
        img: image3,
    },
    {
        img: image4,
    },
    {
        img: image5,
    },
    {
        img: image6,
    },
];

class About extends Component {
    render() {
        return (
            <>
                <div className="about-home-section">
                    <div className="about-home-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mt-5 d-flex align-items-center justify-content-between">
                                    <h3 style={{ color: '#45b3d7', margin: '0' }} className=" mt-5 text-uppercase">
                                        Về chúng tôi
                                    </h3>
                                </div>
                                <div className="col-12 mt-5">
                                    <div className="d-flex gap-15 align-items-center about_content">
                                        <div className="about_items">
                                            <div className="about_item">
                                                <iframe
                                                    className="about_item"
                                                    width="560"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/FyDQljKtWnI"
                                                    title="YouTube video player"
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowfullscreen
                                                ></iframe>
                                            </div>
                                        </div>
                                        <div className="about_items">
                                            <div className="about_left">
                                                <div className="d-flex flex-wrap gap-3">
                                                    {data.map((item, index) => (
                                                        <div className="about_col4" key={index}>
                                                            <div className="about_brand">
                                                                <a href="/home">
                                                                    <img src={item.img} alt="" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
