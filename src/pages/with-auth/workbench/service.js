import request from '@/utils/request'

export const getProjects = () => request({
  url: '/projects',
})
