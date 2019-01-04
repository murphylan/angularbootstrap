import { Component, OnInit } from '@angular/core';
import { Lesson } from '../Lesson';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lessons: Lesson[] = [
    {
      id: 1,
      name: 'Angular 6/7',
      image: "../../assets/images/angular2.svg",
      price: 199,
      discription: [
        '面向有2年HTML工作的网页开发人员',
        '达成目标：学会类似本网站的功能',
      ],
      others: '',
      link: 'https://angular.io/',
      phone: '',
    },
    {
      id: 2,
      name: 'BootStrap4',
      image: "../../assets/images/feature-icon.svg",
      price: 76,
      discription: [
        '面向有2年HTML工作的网页开发人员',
        '达成目标：学会类似本网站的功能',
      ],
      others: '',
      link: 'https://getbootstrap.com/',
      phone: '',
    },
    {
      id: 3,
      name: 'Python',
      image: "../../assets/images/Python-logo.svg",
      price: 2,
      discription: [
        'Python3代码：移动照片到制定位置',
        '目标：按照GPS或者时间进行排序',
      ],
      others: '',
      link: 'https://www.python.org/',
      phone: '',
    },
    {
      id: 4,
      name: 'Node.js',
      image: "../../assets/images/Node.js_logo.svg",
      price: 26,
      discription: [
        '面向有2年Javascript工作的开发人员',
        '达成目标：定制',
      ],
      others: '',
      link: 'https://nodejs.org/',
      phone: '',
    },
    {
      id: 5,
      name: 'Spring',
      image: "../../assets/images/icon-spring-framework.svg",
      price: 16,
      discription: [
        '面向有2年Java基础的开发人员',
        '达成目标：定制',
      ],
      others: '',
      link: 'https://spring.io/',
      phone: '',
    },
    {
      id: 6,
      name: 'Spring Boot',
      image: "../../assets/images/icon-spring-boot.svg",
      price: 6,
      discription: [
        '面向有1年Java基础的开发人员',
        '达成目标：定制',
      ],
      others: '',
      link: '',
      phone: '',
    },
    {
      id: 7,
      name: 'Flowable',
      image: "../../assets/images/flowable.svg",
      price: 189,
      discription: [
        '面向有2年BPMN基础的开发人员',
        '达成目标：定制',
      ],
      others: '',
      link: 'https://www.flowable.org/',
      phone: '',
    },
    {
      id: 8,
      name: 'Spring Cloud',
      image: "../../assets/images/icon-spring-cloud.svg",
      price: 199,
      discription: [
        '面向有2年Java基础的开发人员',
        '达成目标：定制',
      ],
      others: '',
      link: 'https://cloud.spring.io',
      phone: '',
    },
    {
      id: 9,
      name: 'Spring-Cloud-Data-Flow',
      image: "../../assets/images/icon-spring-cloud-data-flow.svg",
      price: 176,
      discription: [
        '面向有2年Java基础的开发人员',
        '达成目标：定制',
      ],
      others: '',
      link: 'https://cloud.spring.io/spring-cloud-dataflow/',
      phone: '',
    },
    {
      id: 10,
      name: 'Loopback 3/4',
      image: "../../assets/images/loopback.svg",
      price: 86,
      discription: [
        '面向有1年Node.js基础的开发人员',
        '达成目标：定制',
      ],
      others: '',
      link: 'https://loopback.io/',
      phone: '',
    },
    {
      id: 11,
      name: 'Spring-Security',
      image: "../../assets/images/Spring-Security-logo.jpg",
      price: 126,
      discription: [
        '面向有1年Node.js基础的开发人员',
        '达成目标：定制',
      ],
      others: '',
      link: 'https://loopback.io/',
      phone: '',
    },
  ]

}
