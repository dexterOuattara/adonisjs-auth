import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run () {
    // Write your database queries inside the run method
    const uniqueKey = 'email'


    await User.updateOrCreateMany(uniqueKey, [
      {
        username: 'freco',
        email:'freco@gmail.com',
        password:'freco@gmail.com',
      },
      {
        username: 'predeco',
        email:'predeco@gmail.com',
        password:'freco@gmail.com',
      },
      {
        username: 'rederv',
        email:'rederv@gmail.com',        
        password:'freco@gmail.com',
      },
      {
        username: 'redec',
        email:'redec@gmail.com',
        password:'freco@gmail.com',
      },
      {
        username: 'frtyu',
        email:'frtyu@gmail.com',
        password:'freco@gmail.com',
      },
      {
        username: 'uyuiiu',
        email:'uyuiiu@gmail.com',
        password:'freco@gmail.com',
      },
      {
        username: 'juiiuy',
        email:'juiiuy@gmail.com',
        password:'freco@gmail.com',
      },
      {
        username: 'swer4er',
        email:'swer4er@gmail.com',
        password:'freco@gmail.com',
      },
      {
        username: 'qaweew',
        email:'qaweew@gmail.com',
        password:'freco@gmail.com',
      },
    ])
  }
}
