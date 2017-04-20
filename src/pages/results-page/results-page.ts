import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the ResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-results-page',
  templateUrl: 'results-page.html',
})
export class ResultsPage {
  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  test: any = {};
  showHome: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get("test"));
    console.log('ionViewDidLoad ResultsPage');
    this.test = this.navParams.get("test");
    this.showHome = this.navParams.get("showHome");
    
    //var avoiding = Math.round((test/12)*100)
      this.barChart = new Chart(this.barCanvas.nativeElement, {
        type: 'bar',
        data: {
          labels: [
              'Avoiding',
              'Accommodating',
              'Compromising',
              'Competing',
              'Collaborating'
            ],
          datasets: [{
            data: [
              this.test['data']['labels'[0]],
              100,
              100,
              100,
              100
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
                max: 100
              }
            }]
          },
          legend: {
            display: false
        },
        tooltips: {
            enabled: false
        }
        }
      });
  }

}
