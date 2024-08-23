import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'angular-project-MF1';


      value:any
      onButtonClick(){
        // In Angular application 1
      const event = new CustomEvent('app1Event', {
        detail: { message: this.value }
      });
      window.dispatchEvent(event);
      }
  
}
