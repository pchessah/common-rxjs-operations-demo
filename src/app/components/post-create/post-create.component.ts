import { Component } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  selectedPost!:PostModel;

  constructor(
    private postsService: PostsService
  ) { }

  addPost(post: PostModel) {
    post.title = post.title.trim()
    post.body = post.body.trim()
    this.postsService.addPost(post).subscribe()
  }

  ngOnInit() {
  
  }

}
