import request from '@/utils/request'

const getUserList = (data) => {
  return request({
    url: '/role/list',
    method: 'get',
    data
  })
}

const deleteUser = (data) => {
  return request({
    url: '/role/del',
    method: 'post',
    data
  })
}

const addUser = (data) => {
  return request({
    url: '/role/add',
    method: 'post',
    data
  })
}

const updateUser = (data) => {
  return request({
    url: '/role/update',
    method: 'put',
    data
  })
}

const findUser = (id) => {
  return request({
    url: `role/info/{id}`,
    method: 'get'
  })
}

export default {
  getUserList,
  deleteUser,
  addUser,
  updateUser,
  findUser
}
