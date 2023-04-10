import React, { Component, useRef } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Footer.scss';
import { AiFillCheckCircle, AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer">
                    <div className="footer_container">
                        <div className="container">
                            <div className="row">
                                <div className="mt-5 w-100 d-flex flex-wrap">
                                    <div className="col-5">
                                        <div className=" d-flex flex-column">
                                            <div className="w-25">
                                                <Link>
                                                    <div className="footer_logo"></div>
                                                </Link>
                                            </div>
                                            <div className="footer_heading">
                                                <h3>Công ty Cổ phần Công nghệ BookingCare</h3>
                                            </div>
                                            <div className="footer_address">
                                                <div className="d-flex  flex-column">
                                                    <div className="d-flex align-items-center mt-4">
                                                        <AiFillCheckCircle />
                                                        <span>
                                                            Tầng 6, Tòa nhà D'Office, tổ 28, P. Dịch Vọng, Q. Cầu Giấy,
                                                            Tp. Hà Nội
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center mt-3">
                                                        <GoLocation />
                                                        <span>
                                                            ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 policy_footer">
                                        <ul>
                                            <li>
                                                <Link>Liên hệ hợp tác</Link>
                                            </li>
                                            <li>
                                                <Link>Gói chuyển đổi số doanh nghiệp</Link>
                                            </li>
                                            <li>
                                                <Link>Tuyển dụng</Link>
                                            </li>
                                            <li>
                                                <Link>Câu hỏi thường gặp</Link>
                                            </li>
                                            <li>
                                                <Link>Điều khoản sử dụng</Link>
                                            </li>
                                            <li>
                                                <Link>Chính sách Bảo mật</Link>
                                            </li>
                                            <li>
                                                <Link>Quy trình hỗ trợ giải quyết khiếu nại</Link>
                                            </li>
                                            <li>
                                                <Link>Quy chế hoạt động</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-3">
                                        <div className="d-flex flex-column gap-15">
                                            <div>
                                                <h3>Trụ sở tại Hà Nội</h3>
                                                <p>
                                                    Tầng 6, Tòa nhà D'Office, tổ 28, P. Dịch Vọng, Q. Cầu Giấy, Tp. Hà
                                                    Nội
                                                </p>
                                            </div>
                                            <div>
                                                <h3>Văn phòng tại TP Hồ Chí Minh</h3>
                                                <p>Số 01, Hồ Bá Kiện, Phường 15, Quận 10</p>
                                            </div>
                                            <div>
                                                <h3>Hỗ trợ khách hàng</h3>
                                                <p>support@bookingcare.vn (7h30 - 18h)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer_copyright py-5">
                            <div className="container d-flex justify-content-between">
                                <div className="copyright">© 2023 BookingCare.</div>
                                <div className="footer_media">
                                    <AiFillFacebook style={{ color: '#3c579e' }} size={30} />
                                    <AiFillYoutube style={{ color: '#cc191e' }} size={40} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
