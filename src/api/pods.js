import request from '@/utils/request'

export function getPodsByNs(ns, page) {
  return request({
    url: '/pods?ns=' + ns + '&current=' + page,
    method: 'get'
  })
}
