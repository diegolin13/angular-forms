import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ErrorsMessageService } from 'src/app/services/errors-message.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { TemplateData } from 'src/interfaces/template-data.interface';

@Component({
  selector: 'app-data-template',
  templateUrl: './data-template.component.html',
  styleUrls: ['./data-template.component.css']
})
export class DataTemplateComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(private dataService: ErrorsMessageService,
              private location: Location,
              private sweetAlert: SweetAlertService) {}

  data : TemplateData[] = [];
  displayedColumns: string[] = ['nombre', 'apellidos', 'correo', 'pais', 'genero'];
  dataSource!: MatTableDataSource<TemplateData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.data = this.dataService.templateData;
    this.dataSource = new MatTableDataSource(this.data);
    this.checkData();
  }

  ngOnDestroy(): void {
    this.dataService.templateData = [];
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  checkData() {
    if (this.data.length === 0) {
      this.sweetAlert.noData().then((result) => {
        if(result.isConfirmed) {
          this.data = this.dataService.randomTempData;
          this.data = this.data.sort(() => Math.random() - 0.5);
          this.dataSource = new MatTableDataSource(this.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.regresar();
        }
      });
    }
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
