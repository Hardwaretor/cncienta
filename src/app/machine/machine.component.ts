import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

  gaugeType = "semi";
  gaugeForm = "thick";
  gaugeValue =100;
  gaugeLabel1 = "Cut Speed";
  gaugeAppendText1 = "m/mn";
  gaugeLabel2 = "Head Temp";
  gaugeAppendText2 = "º";
  gaugeLabel3 = "Head Speed";
  gaugeAppendText3 = "r/mn";
  gaugeLabel4 = "Drivers Temp";
  gaugeAppendText4 = "º";

  thresholdConfig = {
    '0': {color: 'green'},
    '40': {color: 'orange'},
    '75.5': {color: 'red'}
};
   
  constructor() { }

  ngOnInit() {
  }

}

