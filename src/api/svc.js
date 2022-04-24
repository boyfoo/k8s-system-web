import request from '@/utils/request'

//获取所有 svc 列表
export function getList(ns) {
  return request({
    url: '/svc?ns=' + ns,
    method: 'get',
  })
}
