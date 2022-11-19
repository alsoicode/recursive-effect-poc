import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {

  dataLoaded: boolean;
  subscription: Subscription;

  constructor(
    private readonly appService: AppService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.appService.dataLoaded$.subscribe(dataLoaded => this.dataLoaded = dataLoaded);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  checkDataLoaded(): void {
    this.appService.checkDataLoaded();
  }

}
