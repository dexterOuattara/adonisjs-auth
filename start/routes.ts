/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'



Route.get('/', async ({ view }) => {
  return view.render('pages/welcome')
})

// Route.get('userlist', async ({ view }) => {
//   return view.render('pages/userlist')
// })

// Route.get('userlist', 'AuthController.userlistShow').as('user.userlist.show')



// SECURE AUTH SPACE

// Route.group(() => {


// }).middleware('auth')
Route.get('profile', 'AuthController.profile').as('profile')
// Route.get('userlist', 'UsersController.userlist').as('userlist')
// Route.get('userlist/:id', 'AuthController.userlistDetail').as('userlistDetail')
Route.get('adduser', 'AuthController.adduser').as('user.adduser')
Route.post('adduser', 'AuthController.register').as('add.user')
// Route.get('adduser', 'AuthController.adduserShow').as('user.adduser.show')


// AUTH USER

Route.get('register', 'AuthController.registerShow').as('auth.register.show')
Route.post('register', 'AuthController.register').as('auth.register')
Route.get('login', 'AuthController.loginShow').as('auth.login.show')
Route.post('login', 'AuthController.login').as('auth.login')
Route.get('logout', 'AuthController.logout').as('auth.logout')


Route.resource('users', 'UsersController')
Route.get('userlist', 'UsersController.userlist').as('userlist')
Route.get('userlist/:id', 'UsersController.show').as('show')




Route.resource('profiles', 'ProfilesController').as('profiles')
Route.resource('posts', 'PostsController').as('posts')
Route.resource('services', 'ServicesController').apiOnly()
Route.resource('constantes', 'ConstantesController').apiOnly()




