import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LANGUAGE } from '../../utils/constant';
import * as actions from '../../store/actions';
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';

class Header extends Component {
    handleChangeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    };
    render() {
        const { processLogout, language } = this.props;

        return (
            <div className="header_admin">
                <div className="container">
                    <div className="row">
                        <div className="header-container">
                            {/* thanh navigator */}
                            <div className="header-tabs-container">
                                <Navigator menus={adminMenu} />
                            </div>

                            <div className="language">
                                <span
                                    onClick={() => this.handleChangeLanguage(LANGUAGE.VI)}
                                    className={language === LANGUAGE.VI ? 'language_vi active' : 'language_vi'}
                                >
                                    VN
                                </span>
                                <span
                                    onClick={() => this.handleChangeLanguage(LANGUAGE.EN)}
                                    className={language === LANGUAGE.EN ? 'language_en active' : 'language_en'}
                                >
                                    EN
                                </span>
                                <div className="btn btn-logout" onClick={processLogout}>
                                    <i className="fas fa-sign-out-alt"></i>
                                </div>
                            </div>

                            {/* nút logout */}
                        </div>
                    </div>
                </div>
            </div>
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
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
