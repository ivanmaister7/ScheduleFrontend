import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.css']
})
export class SheduleComponent implements OnInit {

  numbers = [1, 2, 3, 4, 5]
  multi = [
    ["8:30", "Spring", "2", "Glubovets", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["10:00", "", "", "", "Spring", "2", "Glubovets", "", "", "", "", "", "", "", "", ""],
    ["11:40", "", "", "", "Spring", "2", "Glubovets", "", "", "", "", "", "", "", "", ""],
    ["13:30", "", "", "", "Spring", "2", "Glubovets", "", "", "", "", "", "", "", "", ""],
    ["15:00", "", "", "", "Spring", "2", "Glubovets", "", "", "", "", "", "", "", "", ""],
    ["16:30", "", "", "", "Spring", "2", "Glubovets", "", "", "", "", "", "", "", "", ""],
    ["18:00", "", "", "", "Spring", "2", "Glubovets", "", "", "", "", "", "", "", "", ""]
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
