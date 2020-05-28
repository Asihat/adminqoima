export default function guest({ next, store}) {
  console.log('guest middleware')
  console.log('getters', store.getters['auth/user'])

  if(localStorage.getItem('token')) {
    return next({
      name: 'Home'
    })
  }

  console.log('this is guest')

  return next()
}
