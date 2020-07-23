import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo';

@Component({
	selector: 'app-root', //nome do componente que fica no html
	templateUrl: './app.component.html', //html a ser utilizado
	styleUrls: ['./app.component.css'] //css a ser utilizado
})
export class AppComponent implements OnInit{

	photos: Photo[] = []; //array do tipo Photo

	constructor(private photoService: PhotoService) {}//tem q importar o modulo pra poder usar 
	
	ngOnInit(): void { //metodo de inicialização

		this.photoService
			.listFromUser('flavio')
			.subscribe(photos => this.photos = photos);

	}

}
