import { Component, OnInit } from '@angular/core';

//importamos el servicio
import { PostService } from 'src/app/post.service';

import {FormBuilder,FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public postForm!: FormGroup;

  constructor(public postService:PostService, public fb:FormBuilder, public router:Router) {
    this.postForm = this.fb.group({
      title: [''],
      content: [''],
      author: ['']
    })

  }

  ngOnInit(): void {
  }


  onSubmit(){
    this.postService.createPost(this.postForm.value);
    this.router.navigate([''])
  }

}
