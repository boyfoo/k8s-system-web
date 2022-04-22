import request from '@/utils/request'

export function getPodsByNs(ns) {
  return request({
    url: '/pods?ns=' + ns,
    method: 'get'
  })
}
