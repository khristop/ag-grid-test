import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-ag-grid-table',
  templateUrl: './ag-grid-table.component.html',
  styleUrls: ['./ag-grid-table.component.scss'],
})
export class AgGridTableComponent implements OnInit {
  rowData$!: Observable<any[]>;
  columnDefs: ColDef[] =  [];
  defaultColDef: any;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private dataService: DataService) {
    this.columnDefs = [
      {
        headerName: 'Make',
        field: 'make',
        sortable: true,
        filter: true,
        editable: false,
        pinned: 'left'
      },
      {
        headerName: 'Model',
        field: 'model',
        sortable: true,
        filter: true,
        editable: true,
        pinned: 'left'
      },
      {
        headerName: 'Price',
        field: 'price',
        sortable: true,
        filter: true,
        editable: true,
        cellEditor: 'agTextCellEditor',
      },
      {
        headerName: 'Year',
        type: 'text',
        field: 'year',
        sortable: true,
        filter: true,
        editable: true,
      },
      {
        headerName: 'Color',
        field: 'color',
        sortable: true,
        filter: true,
        editable: true,
        cellEditor: 'agRichSelectCellEditor',
        cellEditorParams: {
          values: ['Red', 'Blue', 'Black', 'White', 'Silver', 'Yellow']
        }
      },
      {
        headerName: 'Condition',
        field: 'condition',
        sortable: true,
        filter: true,
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['New', 'Used', 'Refurbished']
        },
        cellClassRules: {
          'error': params => params.value === 'Used',
        }
      },
      {
        headerName: 'Mileage',
        field: 'mileage',
        type: 'text',
        sortable: true,
        filter: true,
        editable: true,
        cellClassRules: {
          'error': params => params.value && Number.isNaN(params.value),
        }
      },
      {
        headerName: 'Fuel Type',
        field: 'fuelType',
        sortable: true,
        filter: true,
        editable: true,
      },
      {
        headerName: 'Transmission',
        field: 'transmission',
        sortable: true,
        filter: true,
        editable: true,
      },
      {
        headerName: 'Engine',
        field: 'engine',
        sortable: true,
        filter: true,
        editable: true,
      },
      {
        headerName: 'Doors',
        field: 'doors',
        sortable: true,
        filter: true,
        editable: true,
      },
      {
        headerName: 'Seats',
        field: 'seats',
        sortable: true,
        filter: true,
        editable: true,
      },
      {
        headerName: 'Country',
        field: 'country',
        sortable: true,
        filter: true,
        editable: true,
      },
      {
        headerName: 'Category',
        field: 'category',
        sortable: true,
        filter: true,
        editable: true,
      },
    ];

    this.defaultColDef = {
      sortable: true,
      filter: true,
      editable: true,
      resizable: true,
      minWidth: 100,
    };
  }

  ngOnInit(): void {
    this.rowData$ = this.dataService.getData();
  }

  onGridReady(params: GridReadyEvent) {
    // Access the grid API and do necessary operations here
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
}
