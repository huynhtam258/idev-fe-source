export default defineNuxtRouteMiddleware((from, to) => {
  if(to.name === 'admin') {
    return navigateTo({
      path: '/admin/dashboard'
    })
  }
})