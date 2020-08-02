import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photo } from '../photo/photo';

import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PhotoService } from '../photo/photo.service';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = []; //array do tipo Photo
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

	constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService ) {}
	
	ngOnInit(): void { //metodo de inicialização
    
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
    
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter); //vai registrar depois de 300 milissegundos
	}
  
  ngOnDestroy(): void {
    this.debounce.unsubscribe(); //finaliza o debounce quando sai da classe
  }

  load() {
    this.photoService
      .listFromUserPaginate(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos); //adiciona mais photos na lista

        if(!photos.length){
          this.hasMore = false;
        }
      });
  }
}
