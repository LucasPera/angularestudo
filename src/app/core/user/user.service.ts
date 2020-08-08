import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { User } from './user';
import * as jtw_decode from 'jwt-decode';


@Injectable({ providedIn: 'root'} )
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;

    constructor(private tokenService: TokenService) {
        
        if(this.tokenService.hasToken()) 
            this.decodeAndNotify() 
    }

    setToken(token: string): void {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    
    getUser(): Observable<User> {
        return this.userSubject.asObservable();
    }
    
    private decodeAndNotify(): void {
        const token = this.tokenService.getToken(); //pega o token
        const user = jtw_decode(token) as User; //decodifica o token
        this.userName = user.name;
        this.userSubject.next(user); 
    }   

    logout(): void {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged(): boolean {
        return this.tokenService.hasToken();
    }

    getUserName(): string {
        return this.userName;
    }
    
}