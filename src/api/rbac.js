import request from '@/utils/request'
export function getRoleList(ns) {
  return request({
    url: '/roles?ns=' + ns,
    method: 'get',
  })
}
