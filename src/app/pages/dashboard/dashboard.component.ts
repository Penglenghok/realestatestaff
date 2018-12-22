import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  Validators,
  FormGroup
} from "@angular/forms";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  form: FormGroup;
  constructor(private fb:FormBuilder) { }
  ngOnInit() {
    this.form=this.fb.group({
      searchType:[],
      search:[]
    })
  }
  compareObjects(o1: any, o2: any): boolean {
    if (o2) {
      return o1.text === o2.text;
    }
  }

}
