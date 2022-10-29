import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator';
import Constante from 'App/Models/Constante';


export default class ConstantesController {
    public async index(ctx: HttpContextContract){
        return Constante.all();
    }

    public async store({ request, response }: HttpContextContract){

        const newConstanteSchema = schema.create({

            temperature: schema.number(),
            poids: schema.number(),
            tension_arterielle: schema.number(),

        }); // TODO: validation

        const payload = await request.validate({
            schema: newConstanteSchema
        })

        const constante = await Constante.create(payload ); // create instance and save in one go

        response.status(201);

        return constante;
    }


    public async show({ params }: HttpContextContract){

        return Constante.findOrFail(params.id);
    }

    public async update({ params, request }: HttpContextContract){

        const body = request.body();

        const constante = await Constante.findOrFail(params.id)

        // constante.temperature = body.title;

        return constante.save();
    }

    public async destroy({ params, response }: HttpContextContract){
        const constante = await Constante.findOrFail(params.id)

        response.status(204);

        await constante.delete();

        return constante;
    }
}