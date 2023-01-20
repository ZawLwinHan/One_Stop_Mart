import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { MatDialog } from '@angular/material/dialog';
export interface Color {
  name: string;
  selectable: boolean;
  group: ScaleType;
  domain: string[];
}
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainDashboardComponent implements OnInit {
  format(val: any) {
    throw new Error('Method not implemented.');
  }

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;
  condition: any;

  constructor(public dialog: MatDialog) { Object.assign(this, { single }),Object.assign(this, { multi }),
  Object.assign(this, { shareCost })
}


  onnetFilter() {

  }

  offnetFilter() {

  }

  onnetOffnetComparisonFilter() {

  }

  shareCostAmountCompanyBaseFilter() {

  }

  ngOnInit(): void {
  }

  domain: string[] | undefined;
  single: any[] | undefined;
  multi: any[] | undefined;
  shareCost: any[] | undefined;


  view: [number, number] = [0, 0];

 // options for the chart
 showXAxis = true;
 showYAxis = true;
 gradient = false;
 showLegend = true;
 showXAxisLabel = true;
 xAxisLabel = 'Country';
 showYAxisLabel = true;
 yAxisLabel = 'Amount';
 timeline = true;
 legendTitle = '';
 below = LegendPosition.Below;


  //pie
  showLabels = true;

  colorScheme: Color = { domain: [
  "#ed1b24",
  "#f9bb0e",
  "#ee6c20",
  "#05b8e3",
  "#3a7eed"], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', }

  colorScheme2: Color = { domain: [
    "#ff0f10",
    "#f6c600",
    "#9702fe",
    "#09ff38",
    "#ffe401",
    "#c2342a",
    "#2654ff"], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', }

    colorScheme3: Color = { domain: [
      "#05b8e3",
      "#ed1b24",], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', }


  onSelect(event: any) {
    console.log(event);
  }

  xAxisTickFormatting = (val: any)=>{
    if(this.condition){
        return this.format(val);
    }
    return val;
  }


}

export var single = [
  {
    "name": "Ooredoo",
    "value": 500
  },
  {
    "name": "MPT",
    "value": 200
  },
  {
    "name": "Mytel",
    "value": 400
  },
  {
    "name": "Telenor",
    "value": 800
  },
  {
    "name": "MEC",
    "value": 600
  },
];


export var multi = [
  {
    "name": "OOREDOO",
    "series": [
      {
        "name": "On Net",
        "value": 400
      },
      {
        "name": "Off Net",
        "value": 500
      },
    ]
  },

  {
    "name": "MPT",
    "series": [
      {
        "name": "On Net",
        "value": 300
      },
      {
        "name": "Off Net",
        "value": 600
      }
    ]
  },

  {
    "name": "MYTEL",
    "series": [
      {
        "name": "On Net",
        "value": 75
      },
      {
        "name": "Off Net",
        "value": 1000
      }
    ]
  },

  {
    "name": "TELENOR",
    "series": [
      {
        "name": "On Net",
        "value": 600
      },
      {
        "name": "Off Net",
        "value": 800
      }
    ]
  },

  {
    "name": "MEC",
    "series": [
      {
        "name": "On Net",
        "value": 400
      },
      {
        "name": "Off Net",
        "value": 500
      }
    ]
  },
];

export var shareCost = [
  {
    "name": "CGM'",
    "value": 1000000
  },
  {
    "name": "OK$",
    "value": 500000
  },
  {
    "name": "One Stop Mart",
    "value": 250000
  },
  {
    "name": "Sugar Mill",
    "value": 200000
  },
  {
    "name": "OK Taxi",
    "value": 100000
  },
  {
    "name": "GAT",
    "value": 90000
  },
  {
    "name": "Custom",
    "value": 75000
  },
];
