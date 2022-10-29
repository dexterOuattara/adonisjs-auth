import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator';
import Service from 'App/Models/Service';


export default class ServicesController {
    public async index(ctx: HttpContextContract){
        return Service.all();
    }

    public async store({ request, response }: HttpContextContract){

        const newServiceSchema = schema.create({

            title: schema.string({ trim: true}),
            description: schema.string({ trim: true}),

        }); // TODO: validation

        const payload = await request.validate({
            schema: newServiceSchema
        })

        const service = await Service.create(payload ); // create instance and save in one go

        response.status(201);

        return service;
    }
    public async show({ params }: HttpContextContract){

        return Service.findOrFail(params.id);
    }

    public async update({ params, request }: HttpContextContract){

        const body = request.body();

        const service = await Service.findOrFail(params.id)

        service.title = body.title;

        return service.save();
    }

    public async destroy({ params, response }: HttpContextContract){
        const service = await Service.findOrFail(params.id)

        response.status(204);

        await service.delete();

        return service;
    }
}