import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';

import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = []; //array do tipo Photo
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

	constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService ) {}
	
	ngOnInit(): void { //metodo de inicialização
    
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];

	}
  
  load() {
    this.photoService
      .listFromUserPaginate(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos); //adiciona mais photos na lista

        if(!photos.length){
          this.hasMore = false;
        }
      });
  }
}
