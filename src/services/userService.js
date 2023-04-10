import axios from '../axios';

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password });
};

const getAllUsers = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`);
};

const createNewUserService = (data) => {
    return axios.post('/api/create-new-users', data);
};

const deleteUserService = (userId) => {
    return axios.delete('/api/delete-users', { data: { id: userId } });
};

const editUserUserService = (data) => {
    return axios.put('/api/edit-users', data);
};

export { editUserUserService, handleLoginApi, getAllUsers, createNewUserService, deleteUserService };
