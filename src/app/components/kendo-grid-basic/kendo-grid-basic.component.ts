import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CancelEvent, EditEvent, GridComponent, RemoveEvent, SaveEvent } from '@progress/kendo-angular-grid';
import { customers } from './costumers';

@Component({
  selector: 'app-kendo-grid-basic',
  templateUrl: './kendo-grid-basic.component.html',
  styleUrls: ['./kendo-grid-basic.component.css']
})
export class KendoGridBasicComponent implements OnInit {

  public gridData: unknown[] = customers;
  public formGroup: FormGroup;
  private editedRowIndex: number;

  constructor() { }

  ngOnInit(): void {
  }


  editHandler(args: EditEvent): void {
    // define all editable fields validators and default values
    const { dataItem } = args;
    this.closeEditor(args.sender);

    this.formGroup = new FormGroup({
      CompanyName: new FormControl(dataItem.CompanyName),
      ContactName: new FormControl(dataItem.ContactName, Validators.required),
    });

    this.editedRowIndex = args.rowIndex;
    // put the row in edit mode, with the `FormGroup` build above
    args.sender.editRow(args.rowIndex, this.formGroup);
  }

  public cancelHandler(args: CancelEvent): void {
    // close the editor for the given row
    this.closeEditor(args.sender, args.rowIndex);
  }

  public saveHandler({sender, rowIndex, formGroup, isNew}: SaveEvent): void {
      const customer = formGroup.value;

      sender.closeRow(rowIndex);
  }

  public removeHandler(args: RemoveEvent): void {
      // remove the current dataItem from the current data source,
      // `editService` in this example
      // this.editService.remove(args.dataItem);
  }

  private closeEditor(grid: GridComponent, rowIndex = this.editedRowIndex) {
    // close the editor
    grid.closeRow(rowIndex);
    // reset the helpers
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }

}
