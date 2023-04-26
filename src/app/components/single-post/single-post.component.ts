import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  singlePost$!: Observable<PostModel>;



  constructor(private _postService:PostsService){
  }

  ngOnInit(): void {
    this.singlePost$ = this._postService.getSinglePost()
      
  }


}
