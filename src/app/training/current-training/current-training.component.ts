import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training/stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  progress = 0;
  timer: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100){
        clearInterval(this.timer);
      }
    }, 1000)
  }

  onStop() {
    clearInterval(this.timer);
    /* iteracija 1
    this.dialog.open(StopTrainingComponent); 
    */
    
    /* iteracija 2
    this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      } 
    */

   const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });

    /*  iteracija 1
    dialogRef.afterClosed().subscribe(result => {
       //vracamo true kada pokrenemo trening, zaustavimo ga -> gledamo konzolu
        console.log(result); 
      }) 
    */

     dialogRef.afterClosed().subscribe(result => {
       if (result) {
         clearInterval(this.timer)
       }
       else {
         this.onResume()
       }
      })
    } //kraj onStop()

  /* Instancirano u current-training.component.html kao dodatno dugme */
  onResume(){
    this.timer = setInterval(() => {
      this.progress += 5;
      if(this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000)
  }

}
