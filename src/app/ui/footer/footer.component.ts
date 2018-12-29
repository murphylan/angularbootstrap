import { Component, OnInit } from '@angular/core';
import { faCoffee, faPhone} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faPhone = faPhone;
  faCoffee = faCoffee;
  
  constructor() { }

  ngOnInit() {
  }

}
