import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  goTop() {
    this.route.fragment.subscribe(() => {
      window.scrollTo(0, 0);
    });
    // document.querySelector('#top').scrollIntoView();
    // document.querySelector('#' + this.fragment).scrollIntoView();
  }

  goToPrice() {
    document.querySelector('#price').scrollIntoView();
  }

  goToContent() {
    document.querySelector('#fullcontent').scrollIntoView();
  }

  goToWebdev() {
    document.querySelector('#webdev').scrollIntoView();
  }

  ngOnInit() {
  }

  

}
