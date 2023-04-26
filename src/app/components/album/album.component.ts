import { Component } from '@angular/core';
import { AlbumModel } from 'src/app/models/album.model';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  albums: AlbumModel[] = [];
  constructor(
    private albumsService: AlbumsService
  ) { }

  getAlbums(): void {
    this.albumsService.getAlbums()
      .subscribe(albums => this.albums = albums)
  }

  ngOnInit() {
    this.getAlbums()
  }

}
