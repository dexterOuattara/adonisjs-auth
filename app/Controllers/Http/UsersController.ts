import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator';
import Database from '@ioc:Adonis/Lucid/Database';
import User from 'App/Models/User';

export default class UsersController {

    
    public async index({ view}: HttpContextContract) {

        // return User.all();

        const users = await Database.from(User.table)
        return view.render('users/index', {
            users
        })
    }

    public async store({ request, response }: HttpContextContract){

        const newUserSchema = schema.create({

            username: schema.string({ trim: true}),
            email: schema.string({ trim: true}),

        }); // TODO: validation

        const payload = await request.validate({
            schema: newUserSchema
        })

        const user = await User.create(payload ); // create instance and save in one go

        response.status(201);

        return user;
    }


    public async show({ view, params }: HttpContextContract) {
        const { id } = params
     
        let user: User
        try {
            user = await User.findOrFail(id)
          await user.load('owner')
        } catch (error) {
          console.error(error)
         return view.render('errors/not-found')
        }
     
       return view.render('users/show', {
        user,
       })
     }

    public async update({ params, request }: HttpContextContract){

        const body = request.body();

        const user = await User.findOrFail(params.id)

        user.username = body.username;
        user.email = body.email;

        return user.save();
    }

    public async destroy({ params, response }: HttpContextContract){
        const user = await User.findOrFail(params.id)

        response.status(204);

        await user.delete();

        return user;
    }
}