import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ms_product } from '.';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  data: ms_product[] = [];

  constructor(private router: Router, private service: ProductService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.get().subscribe({
      next: (response) => {
        this.data = response;
      }
    })
  }

  clickAdd() {
    this.router.navigateByUrl('/u/main/master/product/0');
  }

  clickEdit(id: number) {
    this.router.navigateByUrl(`/u/main/master/product/${id}`);
  }

  clickDelete(id: number) {
    this.service.delete(id).subscribe({
      next: (response) => {
        this.loadData();
      }
    })
  }

  viewImage(filename: string) {
    window.open(`http://localhost:8080/Upload/${filename}`, '_blank');
  }

}
