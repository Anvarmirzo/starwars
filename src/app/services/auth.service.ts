import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, tap} from 'rxjs';
import {IUser} from '../models/user';

const storage = localStorage;

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private URL = 'https://dummyjson.com/auth'
    private user$ = new BehaviorSubject<IUser | null>(
        storage.getItem('axcrm-user') ? (JSON.parse(storage.getItem('user') as string) as IUser) : null,
    );

    constructor(private http: HttpClient) {
    }

    login({username, password}: { username: string; password: string }) {
        return this.http.post<IUser>(`${this.URL}/login`, {username, password})
            .pipe(tap(res => {
                storage.setItem('user', JSON.stringify(res));
                storage.setItem('token', res.token)
                this.user$.next(res)
            }));
    }

    fetchUser() {
        return this.http.get<IUser>(`${this.URL}/me`)
            .pipe(tap(res => {
                storage.setItem('user', JSON.stringify(res));
                this.user$.next(res)
            }));
    }

    refreshSession() {
        return this.http.post<IUser>(`${this.URL}/refresh`, {
            expiresInMins: 30, // optional, defaults to 60
        })
            .pipe(tap(res => {
                storage.setItem('user', JSON.stringify(res));
                storage.setItem('token', res.token)
                this.user$.next(res)
            }));
    }

    get getUser() {
        return this.user$.asObservable()
    }

    get token() {
        return storage.getItem('token');
    }

    isValidAuth(): boolean {
        return Boolean(this.token);
    }

    logOut(): Promise<void> {
        return new Promise((resolve) => {
            this.user$.next(null)
            storage.removeItem('token')
            storage.removeItem('user')
            resolve()
        });
    }
}
