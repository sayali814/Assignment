import {  Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TableDataSource, ValidatorService } from 'angular4-material-table';
import { DataService } from 'src/services/getData.service';
import { studentInformation } from '../studentInformation.model';
import { studentValidatorService } from '../studentValidatorService';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
  providers: [
    {provide: ValidatorService, useClass: studentValidatorService }
  ]
})
export class StudentDetailsComponent implements OnInit {
  dataSource: TableDataSource<studentInformation>;
  studentInfo:any;
  citiesToBeUsedForTS:Array<object>;
  citiesForHtml:Array<object>;
  arrey:Array<string>=[];
  displayedColumns = ['firstName', 'lastName','gender','email','city','grade','isActive', 'actionsColumn'];
  grades=['A','B','C','D','E'];
  genders=['Male','Female'];
  constructor(private router:Router,private cities:DataService) { 
  }
  

  ngOnInit() {
    this.cities.getCities().subscribe(city=>{
      this.citiesToBeUsedForTS = city;
      this.citiesForHtml=city;
    })
  this.studentInfo =   localStorage.getItem('studentDetails');
  this.studentInfo = JSON.parse(this.studentInfo);
  this.arrey.push(this.studentInfo);  
  this.dataSource  = new TableDataSource<any>(this.arrey ,studentInformation);
  console.log(this.dataSource);  
  }

  goToForm(){
    this.router.navigateByUrl('/studentForm')
  }

  filteredCities(cityToBeFiltered){
    this.citiesForHtml=this.citiesToBeUsedForTS;
     this.citiesForHtml =  this.citiesForHtml.filter(city=>city.name.toLowerCase().includes(cityToBeFiltered));
    return this.citiesForHtml;
  }
 
}
