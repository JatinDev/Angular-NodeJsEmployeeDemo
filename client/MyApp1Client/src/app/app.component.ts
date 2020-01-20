import { Component, OnInit } from '@angular/core';
import { AppCompService } from './services/app-comp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'MyApp1Client';
  EmployeeData: any[] = [];
  
  constructor(private service: AppCompService) {
  }

  ngOnInit() {
    this.service.GetAllEmployee().subscribe((res) => {
      this.EmployeeData = res;
    });
  }

}
