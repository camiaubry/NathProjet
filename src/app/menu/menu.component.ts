import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

<<<<<<< HEAD
  constructor(){}
=======
  isCollapsed : boolean = false;
  
  ngOnInit() {
  }

  title = 'NathProjet';

  mobileQuery: MediaQueryList;
>>>>>>> 8cfafc96f5ab019043bc91a4f206be421a398216

  ngOnInit() {
  }
<<<<<<< HEAD
=======

  toggleSearch(){
    this.isCollapsed = !this.isCollapsed;
  }

>>>>>>> 8cfafc96f5ab019043bc91a4f206be421a398216
}
