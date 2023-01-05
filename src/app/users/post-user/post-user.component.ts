import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../config/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css'],
})
export class PostUserComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private configService: UserService
  ) {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      location: ['', Validators.required],
      photo: [''],
    });
  }

  ngOnInit(): void {}

  createUser(): void {
    const user = {
      id: this.form.value.id,
      name: this.form.value.name,
      surname: this.form.value.surname,
      email: this.form.value.email,
      phone: this.form.value.phone,
      location: this.form.value.location,
      photo: this.form.value.photo,
    };
    console.log(user);
    this.configService.createUser(user).subscribe(() => {
      console.log(user);
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your ticket has been saved',
      showConfirmButton: false,
      timer: 2000,
    });
    this.configService.timedRefresh(1000);
  }
}
