import { Component } from '@angular/core';
import { UserModel } from '.';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: UserModel[] = [];
  rowEditing?: number;

  constructor(private service: AppService) {
  }

  load() {
    this.rowEditing = undefined;
    this.service.get().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (response) => {
        alert('ไม่สามารถโหลดข้อมูลผู้ใช้งานได้ !');
      }
    });
  }

  update() {
    if (this.rowEditing === undefined) {
      alert('ไม่มีการ Add/Edit ค่าใดๆอยู่ !');
      return;
    }
    // create
    if (this.rowEditing === -1) {
      this.service.create(this.data[this.data.length - 1]).subscribe({
        next: (response) => {
          alert('บันทึกสำเร็จ !');
          this.load();
        },
        error: (response) => {
          alert('ไม่สามารถบันทึกข้อมูลผู้ใช้งานได้ !');
        }
      });
    }
    // update
    else {
      this.service.update(this.data[this.rowEditing]).subscribe({
        next: (response) => {
          alert('บันทึกสำเร็จ !');
          this.load();
        },
        error: (response) => {
          alert('ไม่สามารถบันทึกข้อมูลผู้ใช้งานได้ !');
        }
      });
    }
  }

  add() {
    if (this.rowEditing !== -1) {
      this.data.push({
        id: 0,
        firstname: '',
        lastname: '',
        email: '',
        is_actived: true,
        password_hash: '',
        user_role_id: 1
      });
      this.rowEditing = -1;
    }
  }

  remove(id: number) {
    if (id !== 0) {
      this.service.delete(id).subscribe({
        next: (response) => {
          alert('ลบสำเร็จ !');
          this.load();
        },
        error: (response) => {
          alert('ไม่สามารถลบข้อมูลผู้ใช้งานได้ !');
        }
      });
    }
  }

  clickEdit(index: number) {
    this.rowEditing = index;
  }
}
