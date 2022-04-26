import { Component, OnInit } from '@angular/core';

//importamos el modelo de datos
import {Post} from '../../models/post.model';
//importamos el servicio con sus metodos de firebase
import {PostService} from '../../post.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  Posts!: Post[];

  constructor(private firebaseService: PostService) { }

  ngOnInit(): void {

    this.firebaseService.getPosts().subscribe((res) => {
      //mapea todos los valores y los almacena como tipo post[]
      this.Posts = res.map((e) => {
        return {
          ...(e.payload.doc.data() as Post),
          id: e.payload.doc.id
        };
      });
    });

  }
  
  deleteRow(post:Post){
    this.firebaseService.deletePost(post)
  }


}
