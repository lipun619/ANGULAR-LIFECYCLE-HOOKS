import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.scss']
})
export class HookComponent implements OnInit {
  data: string = 'red';

  constructor() { }

  ngOnInit(): void {}

  handleData(event: any) {
    this.data = event.target.value;
  }
}
