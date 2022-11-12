import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-hook-child',
  templateUrl: './hook-child.component.html',
  styleUrls: ['./hook-child.component.scss'],
})
export class HookChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  count: number = 0;
  interval: any;
  @Input() parentData: string | undefined;
  @ContentChild('child') childContent: ElementRef | undefined;
  @ViewChild('childHook') viewChild: ElementRef | undefined;

  constructor() {
    console.log('Constructor...');
    this.interval = setInterval(() => {
      this.count++;
      console.log('Time running...', this.count);
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('NgOnChanges...', changes);
  }

  ngOnInit(): void {
    console.log('NgOnInit...');
  }

  ngDoCheck(): void {
    console.log('NgDoCheck...');
  }

  ngAfterContentInit(): void {
    console.log('NgAfterContentInit...', this.childContent);
    this.childContent?.nativeElement.setAttribute('style', 'color: green');
  }

  //To test ngAfterContentInit() hook please comment below ngAfterContentChecked() hook and remove AfterContentChecked interface
  ngAfterContentChecked(): void {
    console.log('NgAfterContentChecked...', this.childContent);
    this.childContent?.nativeElement.setAttribute(
      'style',
      `color: ${this.parentData}`
    );
  }

  ngAfterViewInit(): void {
    console.log('NgAfterViewInit...', this.viewChild);
    this.viewChild?.nativeElement.setAttribute(
      'style',
      'background-color: yellow'
    );
  }

  //To test ngAfterViewInit() hook please comment below ngAfterViewChecked() hook and remove AfterViewChecked interface
  ngAfterViewChecked(): void {
    console.log('NgAfterViewChecked...', this.viewChild);
    this.viewChild?.nativeElement.setAttribute(
      'style',
      `background-color: ${this.parentData}`
    );
  }

  ngOnDestroy(): void {
    console.log('NgOnDestroy...');
    clearInterval(this.interval);
  }
}
