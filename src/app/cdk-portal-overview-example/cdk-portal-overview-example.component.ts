import {ComponentPortal, Portal} from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  ViewContainerRef,
} from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';

/**
 * @title Portal overview
 */
@Component({
  selector: 'cdk-portal-overview-example',
  templateUrl: 'cdk-portal-overview-example.component.html',
  styleUrls: ['cdk-portal-overview-example.component.css'],
})
export class CdkPortalOverviewExampleComponent implements AfterViewInit {

  selectedPortal!: Portal<any>;
  componentPortal!: ComponentPortal<HeroesComponent>;

  constructor(private _viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(HeroesComponent);
  }
}
