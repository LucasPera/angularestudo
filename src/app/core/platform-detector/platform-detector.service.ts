import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'

@Injectable({ providedIn: 'root'})
export class PlatformDetectorService {

    constructor(@Inject(PLATFORM_ID) private platformId: string) { } //injetado com id da plataforma
    
    isPlatformBrowser(): boolean {

        return isPlatformBrowser(this.platformId); //retorna se é um browser
    }
}