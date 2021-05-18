import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { Subject } from 'rxjs';

import { SidenavService } from '../services/sidenav.service';
import { subscribeUntil } from '../helpers';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    opened$: Subject<boolean>;
    closed$: Subject<boolean>;

    showCloseButton: boolean | undefined;
    showPreviousButton: boolean | undefined;

    @ViewChild('sidenav') sidenav: MatSidenav | undefined;

    constructor(private sidenavService: SidenavService) {
        this.opened$ = this.sidenavService.opened$;
        this.closed$ = this.sidenavService.closed$;

        this.sidenavService.showCloseButton$.pipe(subscribeUntil(this)).subscribe((value: boolean) => {
            this.showCloseButton = value;
        });
    }

    onClosed() {
        this.sidenavService.close();
        this.sidenavService.closed();
    }
}
