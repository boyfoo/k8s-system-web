import request from '@/utils/myrequest'

export function getList(ns) {
  return request({
    url: '/v1/deployments?ns=' + ns,
    method: 'get'
  })
}
