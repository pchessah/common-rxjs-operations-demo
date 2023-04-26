import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './components/album/album.component';
import { CommentComponent } from './components/comment/comment.component';
import { HeaderComponent } from './components/header/header.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostDisplayComponent } from './components/post-display/post-display.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';
import { AlbumsService } from './services/albums.service';
import { CommentsService } from './services/comments.service';
import { PhotosService } from './services/photos.service';
import { AlbumsComponent } from './pages/albums/albums.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    CommentComponent,
    HeaderComponent,
    PhotoComponent,
    PostCreateComponent,
    PostDisplayComponent,
    UserComponent,
    AboutComponent,
    HomeComponent,
    PostsComponent,
    AlbumsComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostsService, UsersService, AlbumsService, CommentsService, PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
