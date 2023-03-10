import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ThemePalette } from '@angular/material/core';
import { MatAccordion } from '@angular/material/expansion';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ms_product } from '../master/product';
import { HomeService } from './home.service';
import { SheetComponent } from './sheet/sheet.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  checked = false;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  imageBanner: ms_product[] = [];
  imageItems = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ];

  @ViewChild('acc1') accordion!: MatAccordion;

  constructor(private _bottomSheet: MatBottomSheet, private service: HomeService) {
    this.service.get().subscribe({
      next: (response) => {
        this.imageBanner = response;
        console.log(this.imageBanner);
      }
    });
  }

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(SheetComponent);
  }

  loading() {
    this.checked = true;
    setTimeout(() => {
      this.checked = false;
    }, 50000);
  }

  // myControl = new FormControl('');
  // options: string[] = ['One', 'Two', 'Three'];
  // filteredOptions!: Observable<string[]>;

  // constructor() { }

  // ngOnInit() {
  //   this.filteredOptions = this.myControl.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filter(value || '')),
  //   );
  // }

  // ngAfterContentInit(): void {
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

}
