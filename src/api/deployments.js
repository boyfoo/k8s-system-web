import request from '@/utils/request'

//获取deploy下的所有pods列表
export function loadDeployPods(ns,name) {
  return request({
    url: '/deployments-pods/' + ns+"/"+name,
    method: 'get',
  })
}
export function rmDeploy(ns,name) {
  return request({
    url: '/deployments/'+ns+'/'+name,
    method: 'delete',
  })
}
export function updateDeploy(data,fast) {
  //修改模式  和创建一样，  增加一个update=1 这个query参数过去
  let url='/deployments'
  if(fast){
    url+="?fast=1&update=1"
  }else{
    url+="?update=1"
  }
  return request({
    url,
    data,
    method: 'post',
  })
}
export function createDeploy(data,fast) {
  let url='/deployments'
  if(fast){
    url+="?fast=1"
  }
  return request({
    url,
    data,
    method: 'post',
  })
}

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
