import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Service from 'App/Models/Service'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run () {
    // Write your database queries inside the run method
    const uniqueKey = 'title'
    const owner = await User.firstOrFail()


    await Service.updateOrCreateMany(uniqueKey, [
      {
        title: 'Médecine générale',
        description:'Fièvre, Rhume, Grippe, Maux de tête ou autre maladie qui requiert la médecine générale',
        ownerId: owner!.id,

      },
      {
        title: 'Gynécologie obstétrique',
        description:'Gynécologie-Obstétrique, Planification familiale, Diagnostic prénatal',
        ownerId: owner!.id,

      },
      {
        title: 'Pédiatrie',
        description:'Tout problème lié aux enfants, y compris les problèmes mentaux et physiques',
        ownerId: owner!.id,

      },

    ])
  }
}
