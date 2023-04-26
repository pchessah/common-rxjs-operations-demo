import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { PostModel } from 'src/app/models/post.model';
import { UserModel } from 'src/app/models/user.model';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.scss']
})
export class PostDisplayComponent implements OnInit, OnDestroy {

  posts: PostModel[] = [];
  users: UserModel[] = [];
  private _sbS = new SubSink();

  posts$: Observable<PostModel[]> | undefined;

  constructor(
    private postsService: PostsService,
    private usersService: UsersService
  ) {
   
  }

  ngOnInit() {  
    this.posts$ =  this.postsService.getPosts();
  }

  getPosts() {
  }

  setUserName() {
    const posts$ =  this.postsService.getPosts();
    const users$ =  this.usersService.getUsers();
    this._sbS.sink = 
        combineLatest([posts$, users$]).subscribe(([posts, users]) => {
          for(const post of posts) {
            for(const user of users) {
              if (post.userId === user.id) {
                post.name = user.name
              }
            }
          }
        })
  }

  selectPost(id:number){
    this.postsService.selectSinglePost(id);
  }
  
  ngOnDestroy(): void {
      this._sbS.unsubscribe();
  }

}
