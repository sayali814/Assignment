import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableDataSource } from 'angular4-material-table';
import { DataService } from 'src/services/getData.service';
import { studentInformation } from '../studentInformation.model';
import * as _ from 'lodash';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  dataSource: TableDataSource<studentInformation>;
  studentInfo:any;
  citiesToBeUsedForTS:Array<object>;
  citiesForHtml:Array<any>;
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
  this.studentInfo =   _.isEmpty(localStorage.getItem('studentDetails')) ? [] : JSON.parse(localStorage.getItem('studentDetails'));
  this.dataSource  = new TableDataSource<any>(this.studentInfo ,studentInformation);
  console.log(this.dataSource);  
  }

  goToForm(){
    this.router.navigateByUrl('/studentForm')
  }

  filteredCities(cityToBeFiltered){
    this.citiesForHtml=this.citiesToBeUsedForTS;
     this.citiesForHtml =   this.citiesForHtml.filter(city=>city.name.toLowerCase().includes(cityToBeFiltered));
    return this.citiesForHtml;
  }
  setStudentInfo(rowData){
   let index = rowData.id;
   this.studentInfo.splice(index,1);
   localStorage.setItem('studentDetails',JSON.stringify(this.studentInfo));
  }
  editStudentInfo(rowData){
    this.studentInfo[rowData.id] = rowData._currentData;
    localStorage.setItem('studentDetails',JSON.stringify(this.studentInfo));
  }
 
}