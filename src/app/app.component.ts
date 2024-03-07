import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appActions } from './states/app.actions';
import { appFeature } from './states/app.feature';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  isEnabled = false;

  constructor(
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.store.select(appFeature.selectIsEnabled).subscribe(
      isEnabled => {
        if (isEnabled){
          this.buttonText = 'Enabled'
        }else{
          this.buttonText = 'Disabled'
        }
        this.isEnabled = isEnabled;
      }
    );
  }

  title = 'ngrx-example-project';
  public buttonText = 'Disabled';

  public changeText(): void {
    this.store.dispatch(appActions.setIsEnabled({isEnabled: !this.isEnabled}));
  }
}
