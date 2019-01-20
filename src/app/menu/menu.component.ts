import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed : boolean = false;
  
  ngOnInit() {
  }

  title = 'NathProjet';

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleSearch(){
    this.isCollapsed = !this.isCollapsed;
  }

}
