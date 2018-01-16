import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Isick} from '../model/isick';

@Component({
  selector: 'app-sick',
  templateUrl: './sick.component.html',
  styleUrls: ['./sick.component.css']
})
export class SickComponent implements OnInit {
  sick: Isick;
  errors: string[] = [];
  @ViewChild('inputSickLastName')
  inputSickLastName: ElementRef;
  @ViewChild('inputSickFirstName')
  inputSickFirstName: ElementRef;
  @ViewChild('inputSickSickness')
  inputSickSickness: ElementRef;
  @ViewChild('inputSickDateofVisit')
  inputSickDateofVisit: ElementRef;
  @ViewChild('inputSickEmergencyDoccter')
  inputSickEmergencyDoccter: ElementRef;
  @ViewChild('inputSickAssessment')
  inputSickAssessment: ElementRef;
  @ViewChild('inputSickDescription')
  inputSickDescription: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onRegisterClick() {
    this.errors = [];
    this.sick = {
      firstName: this.inputSickFirstName.nativeElement.value.trim(),
      lastName: this.inputSickLastName.nativeElement.value.trim(),
      sickness: this.inputSickSickness.nativeElement.value.trim(),
      dateofVisit: this.inputSickDateofVisit.nativeElement.value.trim(),
      emergencyDocter: this.inputSickEmergencyDoccter.nativeElement.value.trim(),
      assessment: this.inputSickAssessment.nativeElement.value.trim(),
      description: this.inputSickDescription.nativeElement.value.trim()
    };
    if (this.validateSick().length <= 0) {
      this.errors = [];
      alert('form is completed!');
    }
  }

  validateSick(): string[] {
    if (this.sick.firstName.length === 0) {
      this.errors.push('firstName '.concat(' is required!'));
    }
    if (this.sick.lastName.length === 0) {
      this.errors.push('lastName '.concat(' is required!'));
    }
    if (this.sick.sickness.length === 0) {
      this.errors.push('sickness '.concat(' is required!'));
    }
    if (this.sick.dateofVisit.length === 0) {
      this.errors.push('dateofVisit '.concat(' is required!'));
    }
    if (this.sick.emergencyDocter.length === 0) {
      this.errors.push('emergency Doctor '.concat(' is required!'));
    }
    if (this.sick.assessment.length === 0) {
      this.errors.push('assessment '.concat(' is required!'));
    }
    if (this.sick.description.length === 0) {
      this.errors.push('description '.concat(' is required!'));
    }
    return this.errors;
  }
}
