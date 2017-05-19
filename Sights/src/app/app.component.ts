import { Component } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'mv-root',
  template: `
    <h1>
      {{title}}
    </h1>
    <p-dialog header="Title" [(visible)]="display">Content</p-dialog>
    <p-growl [(value)]="msgs"></p-growl>
    <div>
      <button pButton type="button" label="Click" (click)="onclick()" icon="fa-check" iconPos="left" class="ui-button-info"></button>
    </div>
    <div>
      <button pButton type="button" label="success" (click)="s('success')" class="ui-button-success"></button>
      <button pButton type="button" label="info" (click)="s('info')" class="ui-button-info"></button>
      <button pButton type="button" label="warning" (click)="s('warn')" class="ui-button-warning"></button>
      <button pButton type="button" label="danger" (click)="s('error')" class="ui-button-danger"></button>
    </div>
    <div>
      <p-chart type="line" (onDataSelect)="selectData($event)" [data]="data"></p-chart>
      <button pButton type="button" (click)="updateChart($event)"></button>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'mv works!';
  display:boolean = false;
  msgs: Message[] = [];
  data: any;

  constructor() {
    this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        }
  }

  onclick() {
    this.display = true;
  }

  selectData(event: Event) {

  }

  updateChart(event: Event) {

  }

  s(severity: string) {
    this.msgs.push({severity: severity, summary:'success', detail:'hi'});
  }
}
