import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateSomeState } from 'shared-state-mylibrary';
import { State } from 'shared-state-mylibrary';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  state$: Observable<string>;

  constructor(private store: Store<{ app: State }>) {
    this.state$ = this.store.pipe(select(state => state.app.someState));
    
  }


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
    console.log('state initialized', this.state$);
  }

  updateState() {
    this.store.dispatch(updateSomeState({ newValue: 'new value' }));
  }

  
  onButtonClick() {
    // In Angular application 1
    const event = new CustomEvent('app1Event', {
      detail: { message: this.value }
    });
    window.dispatchEvent(event);
  }

}
