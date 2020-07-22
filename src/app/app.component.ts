import { Component } from '@angular/core';

@Component({
	selector: 'app-root', //nome do componente que fica no html
	templateUrl: './app.component.html', //html a ser utilizado
	styleUrls: ['./app.component.css'] //css a ser utilizado
})
export class AppComponent {

	photos = [
		{
			url: 'https://store.nintendo.com.br/media/catalog/product/cache/1aff59ff6f21b2058ac5563c018426d7/z/e/zeldabow_hero_2.jpg',
			description: 'Zelda'
		},
		{
			url: 'https://img.elo7.com.br/product/zoom/2783337/big-poster-zelda-breath-of-the-wild-lo01-tamanho-90x60-cm-nerd.jpg',
			description: 'zelda'
		}
	]

}
