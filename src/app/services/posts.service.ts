import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, switchMap } from 'rxjs';

import { PostModel } from '../models/post.model';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json; charset=UTF-8',
  })
}

@Injectable()
export class PostsService {

  private _postIdSelected$$: Subject<number> = new Subject();
  postIdSelected$:Observable<number> = this._postIdSelected$$.asObservable();

  private postsUrl: string ='https://jsonplaceholder.typicode.com/posts';
  constructor(
    private http: HttpClient,
  ) { }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`${this.postsUrl}/${id}`)
  }

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.postsUrl}?_sort=views&_order=desc`)
  }

  addPost(post: PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(this.postsUrl, post, httpOptions) 
  }

  getSinglePost(){
    return this.postIdSelected$.pipe(switchMap(id =>{
      return this.http.get<PostModel>(`${this.postsUrl}/${id}`)
    }))
  }

  selectSinglePost(id:number){
    this._postIdSelected$$.next(id)
  }
  

}