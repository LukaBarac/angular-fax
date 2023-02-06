/* 
Modul za registraciju Angular Material komponenti 

Linkovi:
- https://material.angular.io/
- https://material.angular.io/components/button/api
- https://material.angular.io/components/form-field/overview
- https://material.angular.io/components/input/api
- https://material.angular.io/components/datepicker/overview
- https://material.angular.io/components/datepicker/overview#choosing-a-date-implementation-and-date-format-settings
- https://material.angular.io/components/checkbox/api
- https://material.angular.io/components/sidenav/overview
- https://material.angular.io/components/toolbar/overview
- https://material.angular.io/components/list/api
- https://material.angular.io/components/tabs/api
- https://material.angular.io/components/card/api
- https://material.angular.io/components/select/overview
- https://material.angular.io/components/progress-spinner/api
- https://material.angular.io/components/table/api
- https://material.angular.io/components/sort/api
- https://material.angular.io/components/paginator/overview
- https://material.angular.io/components/dialog/api
*/

import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    imports: [
        MatButtonModule, 
        MatIconModule, 
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule, 
        MatIconModule, 
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule
    ]
})

export class MaterialModule {}