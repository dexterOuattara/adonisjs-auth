import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'
import User from 'App/Models/User'

export default class PostSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run () {
    // Write your database queries inside the run method
    const uniqueKey = 'title'

    const owner = await User.firstOrFail()

    await Post.updateOrCreateMany(uniqueKey, [
      {
        title: 'Article 1',
        description:
          'Nulla quis ipsum sed augue laoreet imperdiet. Fusce dapibus, lorem quis convallis fringilla, sem est maximus nulla, id egestas orci libero eget est. In maximus vestibulum nisi, dignissim aliquam orci dictum id.',
        ownerId: owner!.id,
      },
      {
        title: 'Article 2',
        description:
          'Suspendisse est mi, ultrices sit amet ullamcorper sed, semper non ipsum. Vestibulum at nisl sed purus luctus sodales. Nunc lectus lorem, vehicula in dolor pharetra, pulvinar convallis libero. Maecenas iaculis porta nibh in hendrerit. Suspendisse gravida leo non orci facilisis placerat.',
        ownerId: owner!.id,
      },
      {
        title: 'Article 3',
        description:
          'Curabitur vitae mi aliquam, pretium velit id, varius lacus. Duis id tellus nec eros semper elementum et et lectus. Phasellus eros justo, eleifend eget tellus quis, accumsan sollicitudin ex. ',
        ownerId: owner!.id,
      },
      {
        title: 'Article 4',
        description:
          'Sed id eleifend lacus. Cras est diam, commodo et erat ac, elementum volutpat dolor. Donec auctor, lorem vitae luctus aliquet, mi mi rhoncus nunc, vel vestibulum felis justo sit amet felis. Donec eleifend rhoncus nisi id pretium. Morbi sit amet auctor enim, sit amet finibus velit. In hac habitasse platea dictumst.',
        ownerId: owner!.id,
      },
      {
        title: 'Article 5',
        description:
          'Morbi eget porttitor turpis. Fusce venenatis tortor lacus, eget interdum augue pellentesque id. Vestibulum elit lorem, gravida at elit vel, molestie suscipit mauris. ',
        ownerId: owner!.id,
      },
      {
        title: 'Article 6',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue nec tortor ut congue. Aenean a nunc nec felis sagittis auctor non a metus. Aenean euismod ligula eros, eu tempor turpis molestie sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
        ownerId: owner!.id,
      },
    ])
  }
}
