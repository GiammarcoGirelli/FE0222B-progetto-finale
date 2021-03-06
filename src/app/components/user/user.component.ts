import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userNumber!: number;

  datiUser: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserGetAll(this.userNumber).subscribe((res) => {
      this.datiUser = res
    })
  }
}





