import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import * as actions from '../../store/actions';
import './Login.scss';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGooglePlusCircle, AiFillTwitterCircle } from 'react-icons/ai';

import { IoEyeSharp } from 'react-icons/io5';
import { BsEyeSlashFill } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { handleLoginApi } from '../../services/userService';

class Login extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            isShowPassWord: false,
            errMessage: '',
        };
    }

    handleOnChangeInput = (e) => {
        this.setState({
            userName: e.target.value,
        });
    };

    handleOnChangeInputPassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    handleLogin = async () => {
        this.setState({
            errMessage: '',
        });
        try {
            let data = await handleLoginApi(this.state.userName, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message,
                });
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
                console.log('Login sucess');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message,
                    });
                }
            }
            console.log(error.response);
        }
    };

    handleShowPassWord = () => {
        this.setState({
            isShowPassWord: !this.state.isShowPassWord,
        });
    };

    render() {
        return (
            <div>
                <div className="login_background">
                    <div className="login_container">
                        <div className="login_content row">
                            <div className="col-12 text-center text-title">Login</div>
                            <div className="col-12 form-group">
                                <label for="">Username:</label>
                                <input
                                    type="text"
                                    name="user"
                                    className="form-control login-input"
                                    placeholder="Email..."
                                    value={this.state.userName}
                                    onChange={(event) => this.handleOnChangeInput(event)}
                                />
                            </div>
                            <div className="col-12 form-group relative">
                                <label for="">Password:</label>
                                <input
                                    type={this.state.isShowPassWord ? 'text' : 'password'}
                                    name="password"
                                    className="form-control login-input"
                                    placeholder="Password..."
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangeInputPassword(event)}
                                />
                                <span onClick={(e) => this.handleShowPassWord()} className="absolute dispplaypassword">
                                    {this.state.isShowPassWord ? <IoEyeSharp /> : <BsEyeSlashFill />}
                                </span>
                            </div>
                            <div className="col-12" style={{ color: 'red' }}>
                                {this.state.errMessage}
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn-login" onClick={() => this.handleLogin()}>
                                    Login
                                </button>
                            </div>
                            <div className="col-12">
                                <span className="forgot-pass">Forgot your password</span>
                            </div>
                            <div className="col-12 login-with">
                                <span>Or Login with: </span>
                            </div>
                            <div className="col-12 social-login">
                                <div className="social-main">
                                    <Link>
                                        <BsFacebook size={36} />
                                    </Link>
                                    <Link>
                                        <AiFillTwitterCircle size={42} color="#55acee" />
                                    </Link>
                                    <Link>
                                        <AiFillGooglePlusCircle size={40} color="#dc4e41" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
