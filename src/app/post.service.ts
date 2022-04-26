import { Injectable } from '@angular/core';

//modulo para trabajar con la BD de firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';


//modelo de datos
import { Post } from './models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private firestore: AngularFirestore) { }


  //metodos CRUD

  getPosts(){

    return this.firestore
            .collection('posts') //referencia a la collecion que tenemos en firebase
            .snapshotChanges() //captura los cambios

  }

  getPostById(id:any){

    return this.firestore
            .collection('posts')
            .doc(id)
            .valueChanges();

  }

  createPost(post: Post){

    return new Promise<any> ((resolve,reject) => {
      this.firestore
        .collection('posts')
        .add(post)
        .then((res) =>{
          console.log(res)
        }),
        ((err:any) => {
          reject(err)
        })  
    })
  }

  updatePost(post:Post, id: any){

    return this.firestore
          .collection('posts')
          .doc(id)
          .update({
            title: post.title,
            content: post.content,
            author: post.author
          })

  }

  deletePost(post: Post){

    return this.firestore
            .collection('posts')
            .doc(post.id)
            .delete()

  }



}
