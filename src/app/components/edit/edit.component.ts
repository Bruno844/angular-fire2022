import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/post.service';

import { FormGroup, FormBuilder } from '@angular/forms';

import {Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public editForm!: FormGroup;

  postRef: any;

  constructor(public service:PostService, public fb:FormBuilder, public activeRoute: ActivatedRoute, private router:Router) {

    this.editForm = this.fb.group({
      title: [''],
      content: [''],
      author: ['']
    })

  }

  ngOnInit(): void {

    const id = this.activeRoute.snapshot.paramMap.get('id') 
    this.service.getPostById(id).subscribe(res => {
      this.postRef = res;
      this.editForm = this.fb.group({
        title: [this.postRef.title],
        content: [this.postRef.content],
        author: [this.postRef.author]
      })
    })

  }

  onSubmit(){
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.service.updatePost(this.editForm.value, id)
    this.router.navigate([''])
  }

}
