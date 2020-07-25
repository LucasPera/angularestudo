import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = []; //array do tipo Photo

	constructor(
		private photoService: PhotoService, //tem q importar o modulo pra poder usar 
		private activatedRoute: ActivatedRoute) 
		{}
	
	ngOnInit(): void { //metodo de inicialização

		const username = this.activatedRoute.snapshot.params.username; //pega a variavel username da url (ex user/flavio)

		this.photoService
			.listFromUser(username)
			.subscribe(photos => this.photos = photos);

	}

}
