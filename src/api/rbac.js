import request from '@/utils/request'

export function addUserToBinding(ns,bdname,data) {
  return request({
    url: '/rolebindings?ns='+ns+'&name='+bdname,
    data,
    method: 'put',
  })
}
export function deleteUserFromBinding(ns,bdname,data) {
  return request({
    url: '/rolebindings?ns='+ns+'&name='+bdname+"&type=1",
    data,
    method: 'put',
  })
}
export function createRoleBinding(data) {
  return request({
    url: '/rolebindings',
    data,
    method: 'post',
  })
}
export function deleteRoleBinding(ns,name) {
  return request({
    url: '/rolebindings?ns=' +ns +"&name="+name,
    method: 'delete',
  })
}
export function getRoleList(ns) {
  return request({
    url: '/roles?ns=' + ns,
    method: 'get',
  })
}
export function getRoleBindingList(ns) {
  return request({
    url: '/rolebindings?ns=' + ns,
    method: 'get',
  })
}
export function createRole(data) {
  return request({
    url: '/roles',
    data,
    method: 'post',
  })
}
export function deleteRole(ns,name) {
  return request({
    url: '/roles?ns='+ns+"&name="+name,
    method: 'delete',
  })
}
