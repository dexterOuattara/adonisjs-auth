import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator';
import Database from '@ioc:Adonis/Lucid/Database';
import Profile from 'App/Models/Profile';

export default class ProfilesController {
    public async index({ request, view }: HttpContextContract) {
    
        const profiles = await Profile.query().orderBy('created_at', 'desc')
    
        return view.render('profiles/index', {
            profiles,
        })
       }

    

    public async store({ request, response }: HttpContextContract){

        const newProfileSchema = schema.create({

            birthday: schema.date(),
            phone: schema.number(),
            gender: schema.string(),


        }); // TODO: validation

        const payload = await request.validate({
            schema: newProfileSchema
        })

        const profile = await Profile.create(payload ); // create instance and save in one go

        response.status(201);

        return profile;
    }
    public async show({ view, params }: HttpContextContract) {
        const { id } = params
     
        let profile: Profile
        try {
            profile = await Profile.findOrFail(id)
          await profile.load('owner')
        } catch (error) {
          console.error(error)
         return view.render('errors/not-found')
        }
     
       return view.render('profiles/show', {
        profile,
       })
     }

    public async update({ params, request }: HttpContextContract){

        const body = request.body();

        const profile = await Profile.findOrFail(params.id)

        profile.birthday = body.birthday;
        profile.phone = body.phone;
        profile.gender = body.gender;

        return profile.save();
    }

    public async destroy({ params, response }: HttpContextContract){
        const profile = await Profile.findOrFail(params.id)

        response.status(204);

        await profile.delete();

        return profile;
    }
}