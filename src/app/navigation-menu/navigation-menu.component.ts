import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  constructor() { }
  menuVisibility = false;
  @Input() set menuVisibiltySetter(value) {
    this.menuVisibility = value;
  }

  ngOnInit() {
  }

}
