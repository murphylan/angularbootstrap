import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { faAngleDoubleUp, faYenSign, faPhone, faAngleDoubleRight, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  faAngleDoubleUp = faAngleDoubleUp;
  faClock = faClock;
  faYenSign = faYenSign;
  faPhone = faPhone;
  faAngleDoubleRight = faAngleDoubleRight;
  faEllipsisV = faEllipsisV;
  private fragment: string;

  constructor(private route: ActivatedRoute) { }

  goTop() {
    this.route.fragment.subscribe(() => {
      window.scrollTo(0, 0);
    });
    // document.querySelector('#top').scrollIntoView();
    // document.querySelector('#' + this.fragment).scrollIntoView();
  }

  ngOnInit() {
  }

}
