export default function guest({ next}) {
  console.log('guest middleware')
  //console.log('getters', store.getters['auth/user'])

  if(localStorage.getItem('token')) {
    return next({
      name: 'Home'
    })
  }

  return next()
}
