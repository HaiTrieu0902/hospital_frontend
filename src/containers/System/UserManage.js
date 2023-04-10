import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './UserManage.scss';
import { connect } from 'react-redux';
import { getAllUsers, createNewUserService, deleteUserService, editUserUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { emitter } from '../../utils/emitter';

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {},
        };
    }

    async componentDidMount() {
        await this.getAllUsersReact();
    }

    handleAddNewUsers = () => {
        this.setState({
            isOpenModalUser: true,
        });
    };

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage);
            } else {
                await this.getAllUsersReact();
                this.setState({
                    isOpenModalUser: false,
                });
                emitter.emit('EVENT_CLEAR_MODAL_DATA');
            }
        } catch (error) {
            console.log(error);
        }
    };

    getAllUsersReact = async () => {
        let response = await getAllUsers('ALL');
        if (response || response.errCode === 0) {
            this.setState({ arrUsers: response.users });
        }
    };

    handleDeleteUser = async (user) => {
        try {
            let response = await deleteUserService(user.id);
            if (response || response.errCode === 0) {
                await this.getAllUsersReact();
            } else {
                alert(response.errMessage);
            }
        } catch (error) {
            console.log(error);
        }
    };

    handleEditUser = (user) => {
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user,
        });
    };

    handleEditUserService = async (user) => {
        try {
            let res = await editUserUserService(user);
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalEditUser: false,
                });
            }
        } catch (error) {}
    };

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        });
    };

    toggleEditUserModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        });
    };

    render() {
        let arrUsers = this.state.arrUsers;

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="users-container">
                            <div className="text-center">
                                <h5>User Manage</h5>
                            </div>
                            <div className=" my-3">
                                <button
                                    onClick={() => this.handleAddNewUsers()}
                                    className="px-2 py-2 d-flex align-items-center btn btn-primary "
                                    type=""
                                >
                                    <i className="fas fa-plus m-1"></i>
                                    Add new user
                                </button>
                            </div>
                            <div className="table-manage">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Email</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Address</th>
                                            <th>Actions</th>
                                        </tr>

                                        {arrUsers &&
                                            arrUsers.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.email}</td>
                                                        <td>{item.firstName}</td>
                                                        <td>{item.lastName}</td>
                                                        <td>{item.address}</td>
                                                        <td className="block gap-2 d-flex justify-content-center align-items-center">
                                                            <button
                                                                onClick={() => this.handleEditUser(item)}
                                                                className="align-items-center d-flex btn btn-dark px-4 py-2"
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                className="align-items-center d-flex btn btn-danger px-4 py-2"
                                                                onClick={() => this.handleDeleteUser(item)}
                                                            >
                                                                delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>

                            <ModalUser
                                createNewUser={this.createNewUser}
                                toggleFromParent={this.toggleUserModal}
                                isOpen={this.state.isOpenModalUser}
                            />
                            {this.state.isOpenModalEditUser && (
                                <ModalEditUser
                                    editUser={this.handleEditUserService}
                                    currentUser={this.state.userEdit}
                                    toggleFromParent={this.toggleEditUserModal}
                                    isOpen={this.state.isOpenModalEditUser}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
