import { Component, OnInit, OnDestroy } from '@angular/core';
import { init, dispose } from 'echarts';
import 'echarts/src/chart/pie';
import 'echarts/src/component/legend';
import 'echarts/src/component/tooltip';
import 'echarts/src/component/title';

import Hero from '../../model/hero';
import { HeroService } from './../../service/hero.service';
import Crisis from '../../model/crisis';
import { CrisisService } from './../../service/crisis.service';
import Message from './../../model/message';
import { MessageService } from './../../service/message.service';

class SumaryData {
  hero: number;
  crisis: number;
  message: number;
}

// 告诉TypeScript this.pie有setOption方法
class Echarts {
  setOption: (opt: object) => Echarts;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private msgObserver: any;
  private data: SumaryData = {
    hero: 0,
    crisis: 0,
    message: 0
  };
  private pie: Echarts;
  constructor(
    private heroServer: HeroService,
    private crisisServer: CrisisService,
    private msgServer: MessageService
  ) {
  }
  private parseData(): object {
    const destData = [];
    destData.push({
      name: 'hero',
      value: this.data.hero
    }, {
        name: 'crisis',
        value: this.data.crisis
      }, {
        name: 'message',
        value: this.data.message
      });
    return destData;
  }
  updateMsg(): void {
    this.pie.setOption({
      series: {
        data: this.parseData()
      }
    });
  }
  ngOnInit() {
    const container = document.getElementById('pieContainer');
    this.pie = init(container);
    this.pie.setOption({
      title: {
        text: '汇总信息',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        x: 'right',
        data: ['hero', 'crisis', 'message']
      },
      series: {
        type: 'pie',
        radius: ['30%', '50%'],
        label: {
          normal: {
            show: true,
            position: 'outside'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: true
          }
        },
        data: [{
          name: 'hero',
          value: 0
        }, {
          name: 'crisis',
          value: 0
        }, {
          name: 'message',
          value: 0
        }]
      }
    });
    this.heroServer.getHeroes()
      .subscribe(heroes => this.data.hero = heroes.length);
    this.crisisServer.getCrisisLibary()
      .subscribe(crisisLibary => this.data.crisis = crisisLibary.length);
    this.msgObserver = this.msgServer.getMessages()
      .subscribe((msgs: Message[]) => {
        this.data.message = msgs.length;
        this.updateMsg();
      });
  }
  ngOnDestroy() {
    this.msgObserver.unsubscribe();
    dispose(this.pie);
  }

}
