import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isCollapsed: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  onMenuClick() {
    this.isCollapsed = true;
}

}
