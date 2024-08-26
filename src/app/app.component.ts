import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'angular-project-MF1';
  value: any;

  ngOnInit(): void {
    window.addEventListener('message', (event) => {
      if (event.origin !== 'http://localhost:9000') {
        return; // Ignore messages from unexpected origins
      }
    
      const message = event.data?.message;
      if(message){
      console.log('Received message:', message);
      }
      // Handle the message
    });
  }

  onButtonClick() {
    // In Angular application 1
    const event = new CustomEvent('app1Event', {
      detail: { message: this.value }
    });
    window.dispatchEvent(event);
  }

}
