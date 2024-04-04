import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
    formGroup = new FormGroup({
        username: new FormControl('kminchelle', {validators: [Validators.required], nonNullable: true}),
        password: new FormControl('0lelplR', {validators: [Validators.required], nonNullable: true})
    })

    constructor(private authService: AuthService, private router:Router) {
    }

    onSubmit() {
        if (this.formGroup.invalid) return;
        const {username, password} = this.formGroup.getRawValue()
        this.authService.login({username, password}).subscribe((next) => {
            if (next){
                this.router.navigate(['/people'])
            }
        })
    }
}
