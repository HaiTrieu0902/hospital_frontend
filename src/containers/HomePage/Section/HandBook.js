import React, { Component, useRef } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HandBook.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import camnang1 from '../../../assets/images/handbook/camnang1.png';
import camnang2 from '../../../assets/images/handbook/camnang2.jpg';

class HandBook extends Component {
    render() {
        return (
            <>
                <div className="handbook-home-section">
                    <div className="handbook-home-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mt-5 d-flex align-items-center justify-content-between">
                                    <h3 style={{ color: '#45b3d7', margin: '0' }} className=" mt-5 text-uppercase">
                                        Cẩm nang
                                    </h3>
                                    <button className="button button-primary mt-5" type="">
                                        Tất cả bài viết
                                    </button>
                                </div>

                                <div className="col-12 mt-5">
                                    <div className="d-flex gap-5 align-items-center  handbook_content">
                                        <div className="handbook_items">
                                            <Link>
                                                <div className="handbook_item">
                                                    <div className="handbook-img">
                                                        <img src={camnang1} alt="" />
                                                    </div>
                                                    <div className="mt-4 ">
                                                        <p className="mx-3 handbook_rank">
                                                            Review Nha khoa Phương Hạnh: Bác sĩ nào giỏi? Chi phí khám?
                                                        </p>
                                                        <p className="mx-3 handbook_rank">
                                                            Bạn có nên khám ở đây không?
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="handbook_items">
                                            <Link>
                                                <div className="handbook_item">
                                                    <div className="handbook-img">
                                                        <img src={camnang2} alt="" />
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="mx-3 handbook_rank">
                                                            Danh sách 6 bác sĩ chữa rụng tóc uy tín tại Hà Nội.
                                                        </p>
                                                        <p className="mx-3 handbook_rank">
                                                            Khám bệnh chính xác, uy tín, tâm huyết.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
