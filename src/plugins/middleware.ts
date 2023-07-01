export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', (to, from) => {
    if (to.path === '/') {
      return navigateTo({
        path: '/home'
      })
    }
  }, { global: true })
})