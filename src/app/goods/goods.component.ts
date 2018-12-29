import { Component, OnInit } from '@angular/core';
import { faAngleDoubleUp, faYenSign, faPhone, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
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
  faChevronCircleRight = faChevronCircleRight;

  constructor() { }

  ngOnInit() {
  }

}
