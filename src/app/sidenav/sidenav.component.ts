import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from '../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [SideNavService]
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav')
    public sidenav!: MatSidenav;

  constructor(private sideNavService: SideNavService) { 
  }

  ngOnInit() { 
   this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      this.sidenav.toggle();
    });
  } 
}