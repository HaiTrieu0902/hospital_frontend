import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            address: '',
            phonenumber: '',
        };
        this.listenToEmiter();
    }
    listenToEmiter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstname: '',
                lastname: '',
                address: '',
                phonenumber: '',
            });
        });
    }
    componentDidMount() {}

    handleOnchangeInput = (e, id) => {
        //bad code

        //good code
        let copyState = { ...this.state };
        copyState[id] = e.target.value;
        this.setState({
            ...copyState,
        });
    };

    toggle = () => {
        this.props.toggleFromParent();
    };

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstname', 'lastname', 'address', 'phonenumber'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                break;
            }
        }
        return isValid;
    };

    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();

        if (isValid === true) {
            // call API to add new user
            this.props.createNewUser(this.state);
        }
    };

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                size="lg"
                centered
                toggle={() => {
                    this.toggle();
                }}
                className={'modal-user-contaienr'}
            >
                <ModalHeader
                    toggle={() => {
                        this.toggle();
                    }}
                >
                    Create New User
                </ModalHeader>
                <ModalBody>
                    <div className="container_hook gap-2">
                        <div className="input-container mt-2">
                            <label htmlFor="">Email</label>
                            <input
                                required
                                placeholder="email..."
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={(e) => {
                                    this.handleOnchangeInput(e, 'email');
                                }}
                            />
                        </div>
                        <div className="input-container mt-2">
                            <label htmlFor="">Password</label>
                            <input
                                value={this.state.password}
                                required
                                placeholder="password..."
                                type="password"
                                name="password"
                                onChange={(e) => {
                                    this.handleOnchangeInput(e, 'password');
                                }}
                            />
                        </div>
                        <div className="input-container mt-2">
                            <label htmlFor="">FirstName</label>
                            <input
                                value={this.state.firstName}
                                required
                                placeholder="first Name..."
                                type="text"
                                name="firstname"
                                onChange={(e) => {
                                    this.handleOnchangeInput(e, 'firstname');
                                }}
                            />
                        </div>
                        <div className="input-container mt-2">
                            <label htmlFor="">LastName</label>
                            <input
                                value={this.state.lastName}
                                required
                                placeholder="last Name..."
                                type="text"
                                name="lastname"
                                onChange={(e) => {
                                    this.handleOnchangeInput(e, 'lastname');
                                }}
                            />
                        </div>

                        <div className="input-container input-container_width mt-2">
                            <label htmlFor="">Address</label>
                            <input
                                value={this.state.address}
                                required
                                placeholder="address..."
                                type="text"
                                name="address"
                                onChange={(e) => {
                                    this.handleOnchangeInput(e, 'address');
                                }}
                            />
                        </div>

                        <div className="input-container input_container_three mt-2">
                            <label required htmlFor="inputCity">
                                Phone Number
                            </label>
                            <input
                                value={this.state.phoneNumber}
                                required
                                type="text"
                                name="phonenumber"
                                placeholder="Phone Number"
                                class="form-control"
                                id="inputCity"
                                onChange={(e) => {
                                    this.handleOnchangeInput(e, 'phonenumber');
                                }}
                            />
                        </div>
                        <div className="input-container input_container_three mt-2">
                            <label htmlFor="inputState">Sex</label>
                            <select name="gender" id="inputState" class="form-control">
                                <option value="1" selected>
                                    Male
                                </option>
                                <option value="0">Female</option>
                            </select>
                        </div>
                        <div className="input-container input_container_three mt-2">
                            <label htmlFor="inputZip">Role</label>
                            <select name="roleId" id="inputZip" class="form-control">
                                <option value="1" selected>
                                    Admin
                                </option>
                                <option value="2">Doctor</option>
                                <option value="3">Patient</option>
                            </select>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        className="button-modal"
                        color="primary"
                        onClick={() => {
                            this.handleAddNewUser();
                        }}
                    >
                        Add
                    </Button>
                    <Button
                        className="button-modal"
                        color="secondary"
                        onClick={() => {
                            this.toggle();
                        }}
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
