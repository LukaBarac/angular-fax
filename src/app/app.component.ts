import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from './auth/profile/profile.component';
import { UserService } from './auth/user.service';

/* 
Biblioteke>

Touchscreen *(import u main.ts)
https://github.com/hammerjs/hammer.js

Ikonice
https://fonts.google.com/icons?selected=Material+Icons
https://developers.google.com/fonts/docs/material_icons#icon_font_for_the_web

Registracija ikonica:
https://material.angular.io/components/icon/overview

Flex Layout
https://github.com/angular/flex-layout
https://github.com/angular/flex-layout/wiki/API-Documentation
https://github.com/angular/flex-layout/wiki/Declarative-API-Overview
https://tburleson-layouts-demos.firebaseapp.com/#/docs
*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-fitness-app';

  profileOpened: boolean = false;

  constructor(public userService: UserService, private dialog: MatDialog) { }

  openProfile(userId: number) {

    this.profileOpened = true;
    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: "30vw",
      data: { user: this.userService.getUserById(userId) }
    });

    profileDialog.afterClosed().subscribe(result => {
      this.profileOpened = false;
    })
    
  }
}
