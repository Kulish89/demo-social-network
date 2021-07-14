// Селетор - это функция, кторая принимает весь стэйт целиком и возвращает часть стейта (полученное значение).

import { createSelectorHook } from "react-redux";

//  селекторы из библиотеки пишутся в компоненте как обычно и в них передается стэйт, а здесь, в файле селекторов в параметры передаешь другие селекторы (примитивные), от которых он будет зависеть... т.е. выстраиваешь зависимость.
// const superSelector = createSelectorHook(getUsers, getPageSize, (users, pageSize) => {return state.blablabla}) пример!!!! в парамерты функции-колбэка передаются результаты примитиынх селекторов!!!!!!!
export const getUsers = (state) => {
  return state.usersPage.users;
};
export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
