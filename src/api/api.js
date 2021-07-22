import * as axios from "axios";
const instance = axios.create({
  withCredentials: true,
  baseUrl: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "94b19567-d7dd-422f-954b-d1016f970024",
  },
});
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => console.log(response.data));
  },
  follow(id) {
    return instance.post(`follow/${id}`);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`);
  },
};
export const headerAPI = {
  authMe() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((res) => res.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
  savePhoto(file) {
    // высылаем файл фотку, там особая форма запроса
    let formData = new FormData();
    formData.append("image", file);
    return instance.put(`profile/photo/`, formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
  },
};
