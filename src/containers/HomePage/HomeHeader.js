import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { BiHelpCircle } from 'react-icons/bi';
import appStore from '../../assets/images/down-appstore.png';
import ggPlay from '../../assets/images/down-ggplay.png';
import { FormattedMessage } from 'react-intl';
import { LANGUAGE } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions/appActions';

class HomeHeader extends Component {
    changeLanguage = (language) => {
        // fire redux event : Actions
        this.props.changeLanguageAppRedux(language);
    };

    render() {
        let language = this.props.language;
        return (
            <>
                <div className="home-header-container">
                    <div className="container">
                        <div className="row">
                            <div className="home-header-content">
                                <div className="left-content">
                                    <div className="left-item_i">
                                        <i className="fa fa-bars"></i>
                                    </div>
                                    <div className="left-item">
                                        <Link to="/home">
                                            <div className="logo"></div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="center-content">
                                    <div className="center-content-list">
                                        <Link className="center-item" to="">
                                            <h2>
                                                <FormattedMessage id="homeheader.speciality" />
                                            </h2>
                                            <p>
                                                <FormattedMessage id="homeheader.searchdoctor" />
                                            </p>
                                        </Link>
                                    </div>
                                    <div className="center-content-list">
                                        <Link to="" className="center-item">
                                            <h2>
                                                <FormattedMessage id="homeheader.health-facility" />
                                            </h2>
                                            <p>
                                                <FormattedMessage id="homeheader.select-room" />
                                            </p>
                                        </Link>
                                    </div>
                                    <div className="center-content-list">
                                        <Link to="" className="center-item">
                                            <h2>
                                                <FormattedMessage id="homeheader.doctor" />
                                            </h2>
                                            <p>
                                                <FormattedMessage id="homeheader.select-doctor" />
                                            </p>
                                        </Link>
                                    </div>
                                    <div className="center-content-list">
                                        <Link to="" className="center-item">
                                            <h2>
                                                <FormattedMessage id="homeheader.fee" />
                                            </h2>
                                            <p>
                                                <FormattedMessage id="homeheader.check-health" />
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <div className="right-item">
                                        <BiHelpCircle size={24} style={{ color: '#49bce2' }} />
                                        <span>
                                            <FormattedMessage id="homeheader.support" />
                                        </span>
                                        <div className="d-flex gap-3">
                                            <div className="language">
                                                <span
                                                    onClick={() => this.changeLanguage(LANGUAGE.VI)}
                                                    style={
                                                        language === LANGUAGE.VI
                                                            ? { color: '#f7d800' }
                                                            : { color: '#49bce2' }
                                                    }
                                                >
                                                    VN
                                                </span>
                                            </div>
                                            <div className="language">
                                                <span
                                                    onClick={() => this.changeLanguage(LANGUAGE.EN)}
                                                    style={
                                                        language === LANGUAGE.EN
                                                            ? { color: '#f7d800' }
                                                            : { color: '#49bce2' }
                                                    }
                                                >
                                                    EN
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-96">
                    <div className="home-header-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 banner-heading d-flex flex-column">
                                    <h1 className="text-center">
                                        <FormattedMessage id="banner.title" />
                                    </h1>
                                    <h1 className="text-center">
                                        <b>
                                            <FormattedMessage id="banner.title2" />
                                        </b>
                                    </h1>
                                </div>
                                <div className="col-12 mt-5">
                                    <div className="d-flex justify-content-center">
                                        <form>
                                            <div className="form-controler">
                                                <input
                                                    className="form-controller-input"
                                                    type="text"
                                                    name=""
                                                    placeholder="Search..."
                                                />
                                                <i className="banner_search fa fa-search"></i>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="app_download d-flex justify-content-center">
                                        <div>
                                            <Link>
                                                <img src={ggPlay} alt="" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Link>
                                                <img src={appStore} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="d-flex flex-wrap options_banner mt-96">
                                        <Link className="option_items">
                                            <div className="d-flex align-items-center justify-content-center flex-column">
                                                <div className="option_item">
                                                    <i class="fa fa-hospital"></i>
                                                </div>
                                                <p className="">
                                                    <FormattedMessage id="banner.banner-special" />
                                                </p>
                                            </div>
                                        </Link>
                                        <Link className="option_items">
                                            <div className="d-flex align-items-center justify-content-center flex-column">
                                                <div className="option_item">
                                                    <i class="fa fa-phone-volume"></i>
                                                </div>
                                                <p className="">
                                                    <FormattedMessage id="banner.banner-remote" />
                                                </p>
                                            </div>
                                        </Link>
                                        <Link className="option_items">
                                            <div className="d-flex align-items-center justify-content-center flex-column">
                                                <div className="option_item">
                                                    <i class="fa fa-hospital-symbol"></i>
                                                </div>
                                                <p className="">
                                                    <FormattedMessage id="banner.banner-total" />
                                                </p>
                                            </div>
                                        </Link>
                                        <Link className="option_items">
                                            <div className="d-flex align-items-center justify-content-center flex-column">
                                                <div className="option_item">
                                                    <i class="fa fa-stethoscope"></i>
                                                </div>
                                                <p className="">
                                                    <FormattedMessage id="banner.banner-medicine" />
                                                </p>
                                            </div>
                                        </Link>
                                        <Link className="option_items">
                                            <div className="d-flex align-items-center justify-content-center flex-column">
                                                <div className="option_item">
                                                    <i class="fa fa-file-medical"></i>
                                                </div>
                                                <p className="">
                                                    <FormattedMessage id="banner.banner-product" />
                                                </p>
                                            </div>
                                        </Link>
                                        <Link className="option_items">
                                            <div className="d-flex align-items-center justify-content-center flex-column">
                                                <div className="option_item">
                                                    <i class="fa fa-phone-volume"></i>
                                                </div>
                                                <p className="">
                                                    <FormattedMessage id="banner.banner-dental" />
                                                </p>
                                            </div>
                                        </Link>
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
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
