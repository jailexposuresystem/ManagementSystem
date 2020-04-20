import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userData : any=[];
  constructor(private userService: UserService){
   
  }
  
  ngOnInit(){
    this.userService.getUsers().subscribe(res=>{
      this.userData=res;
    });
  }

  title = 'MANAGEMENT SYSTEM';
}
