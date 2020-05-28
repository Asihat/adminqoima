export default function auth ({ next}) {
  console.log('Middleware')
  //console.log(store.getters.auth.authenticated)

    if(!localStorage.getItem('token')) {
    return next({
      name: 'login'
    })
  }

  return next()
}
