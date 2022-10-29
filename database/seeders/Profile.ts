import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Profile from 'App/Models/Profile'
import User from 'App/Models/User'
export default class ProfileSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run () {
    // Write your database queries inside the run method

    const uniqueKey = 'phone'
    const owner = await User.firstOrFail()

    await Profile.updateOrCreateMany(uniqueKey, [
      {
        phone: 487884,
        gender: 'Article 1',
        ownerId: owner!.id,
      },
      {
        phone: 580541,
        gender: 'Article 1',
        ownerId: owner!.id,

      },
      {
        phone: 565804,
        gender: 'Article 1',
        ownerId: owner!.id,

      },
      {
        phone: 64478,
        gender: 'Article 1',
        ownerId: owner!.id,

      },
      {
        phone: 51465,
        gender: 'Article 1',
        ownerId: owner!.id,

      },
      {
        phone: 1565,
        gender: 'Article 1',
        ownerId: owner!.id,

      },
    ])
  }
}
