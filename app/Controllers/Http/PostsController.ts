import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator';
import Database from '@ioc:Adonis/Lucid/Database';
import Post from 'App/Models/Post';

export default class PostsController {


    public async index({ request, view }: HttpContextContract) {
    
        const posts = await Post.query().orderBy('created_at', 'desc')
    
        return view.render('posts/index', {
          posts,
        })
    }

    

    public async store({ request, response }: HttpContextContract){

        const newPostSchema = schema.create({

            title: schema.string({ trim: true}),
            description: schema.string({ trim: true}),

        }); // TODO: validation

        const payload = await request.validate({
            schema: newPostSchema
        })

        const post = await Post.create(payload ); // create instance and save in one go

        response.status(201);

        return post;
    }


    public async show({ view, params }: HttpContextContract) {
        const { id } = params
     
        let post: Post
        try {
          post = await Post.findOrFail(id)
        //   await post.load('owner')
        } catch (error) {
          console.error(error)
         return view.render('errors/not-found')
        }
     
       return view.render('posts/show', {
        post,
       })
    }

    public async update({ params, request }: HttpContextContract){

        const body = request.body();

        const post = await Post.findOrFail(params.id)

        post.title = body.title;

        return post.save();
    }

    public async destroy({ params, response }: HttpContextContract){
        const post = await Post.findOrFail(params.id)

        response.status(204);

        await post.delete();

        return post;
    }
}
