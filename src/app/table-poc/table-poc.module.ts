import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridTableComponent } from './ag-grid-table/ag-grid-table.component';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
// import { RichSelectModule } from '@ag-grid-enterprise/rich-select';

const routes: Routes = [{
  path: '',
  component: AgGridTableComponent,
  pathMatch: 'full'
}];


@NgModule({
  declarations: [
    AgGridTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgGridModule,
    FormsModule
  ],
})
export class AgGridTableModule { }
