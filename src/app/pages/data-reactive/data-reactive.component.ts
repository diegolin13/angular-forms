import { Component, OnInit } from '@angular/core';
import { ErrorsMessageService } from 'src/app/services/errors-message.service';
import { ReactiveResponse } from 'src/interfaces/reactive-data.interface';

@Component({
  selector: 'app-data-reactive',
  templateUrl: './data-reactive.component.html',
  styleUrls: ['./data-reactive.component.css']
})
export class DataReactiveComponent implements OnInit {

  public data: ReactiveResponse[] = [];

  constructor(public dataService: ErrorsMessageService) {}
  ngOnInit(): void {
    this.data = this.dataService.data;
    console.log(this.data);
  }


}
