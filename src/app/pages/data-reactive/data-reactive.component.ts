import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ErrorsMessageService } from 'src/app/services/errors-message.service';
import { ReactiveResponse } from 'src/interfaces/reactive-data.interface';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Location } from '@angular/common';

@Component({
  selector: 'app-data-reactive',
  templateUrl: './data-reactive.component.html',
  styleUrls: ['./data-reactive.component.css']
})
export class DataReactiveComponent implements OnInit, OnDestroy, AfterViewInit {

  public data: ReactiveResponse[] = [];
  displayedColumns: string[] = ['nombre', 'apellidos', 'correo', 'pwd', 'domicilio', 'hobbies'];
  dataSource!: MatTableDataSource<ReactiveResponse>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: ErrorsMessageService,
              private location: Location) {}

  ngOnDestroy(): void {
    this.dataService.data = [];
  }

  ngOnInit(): void {
    this.data = this.dataService.data;
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  regresar() {
    this.location.back();
  }


}
