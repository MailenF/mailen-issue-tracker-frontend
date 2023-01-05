import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../config/user.service';
import { Ticket } from '../../interfaces/ticket';
import { User } from '../../interfaces/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patch-user',
  templateUrl: './patch-user.component.html',
  styleUrls: ['./patch-user.component.css'],
})
export class PatchUserComponent implements OnInit {
  form: FormGroup;
  userId: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      location: ['', Validators.required],
      photo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.userId = this.userService.user.id;
    this.userService.getUserById(this.userId).subscribe((data: User) => {
      this.form.patchValue({
        name: data.name,
        surname: data.surname,
        email: data.email,
        phone: data.phone,
        location: data.location,
        photo: data.photo,
      });
    });
  }

  updateUser(): void {
    const user = {
      id: this.userId,
      name: this.form.value.name,
      surname: this.form.value.surname,
      email: this.form.value.email,
      phone: this.form.value.phone,
      location: this.form.value.location,
      photo: this.form.value.photo,
    };
    this.userService.patchUser(user).subscribe((updateData: any) => {
      console.log(updateData);
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your ticket has been updated',
      showConfirmButton: false,
      timer: 2000,
    });
    this.userService.timedRefresh(1000);
  }
}
