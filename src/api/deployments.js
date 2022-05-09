import request from '@/utils/request'
export function loadDeploy(ns,name) {
  return request({
    url: '/deployments/' + ns+"/"+name,
    method: 'get',
  })
}

//获取所有 指定ns下的deployments
export function getList(ns) {
  return request({
    url: '/deployments?ns=' + ns,
    method: 'get',
  })
}
