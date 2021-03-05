import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/services/getData.service';
import { studentInformation } from '../studentInformation.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

constructor(private router:Router,private cities:DataService) { }
student:studentInformation={firstName:'',lastName:'',email:'',gender:'',city:'',grade:'',isActive:true};
grades=['A','B','C','D','E'];
citiesForHtml:Array<any>;
citiesToBeUsedForTS:Array<object>;
isFormValid:boolean=false;

  ngOnInit() {
    this.cities.getCities().subscribe(city=>{
      this.citiesToBeUsedForTS = city;
      this.citiesForHtml=city;
    })
   
  }
  submitStudentDetails(students:NgForm){
    if(!students.invalid){
    this.isFormValid=true;
    localStorage.setItem('studentDetails',JSON.stringify(this.student));
      this.router.navigateByUrl('/studentDetails');
      
    }
    else{
      window.alert("All fields are Mandatory please check form and submit it again")
      this.isFormValid=false;

    }
    console.log(students);
  }
  filteredCities(cityToBeFiltered){
    this.citiesForHtml=this.citiesToBeUsedForTS;
     this.citiesForHtml =  this.citiesForHtml.filter(city=>city.name.toLowerCase().includes(cityToBeFiltered));
    return this.citiesForHtml;
  }

}


