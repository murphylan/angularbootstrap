import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Lesson } from '../Lesson';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  goTop() {
    this.route.fragment.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  ngOnInit() {
  }

  lessons: Lesson[] = [
    {
      id: 1,
      name: 'Angular 6/7',
      image: "../../assets/images/angular2.svg",
      price: 189,
      discription: [
        '面向有2年网页开发人员',
        '达成目标：学会类似本网站的功能',
      ],
      others: '量贩式选择',
      link: 'https://angular.io/',
      phone: '',
    },
    {
      id: 2,
      name: 'BootStrap4',
      image: "../../assets/images/feature-icon.svg",
      price: 176,
      discription: [
        '面向有2年网页开发人员',
        '达成目标：学会类似本网站的功能',
      ],
      others: '量贩式选择',
      link: 'https://getbootstrap.com/',
      phone: '',
    },
    {
      id: 3,
      name: 'Python 3',
      image: "../../assets/images/Python-logo.svg",
      price: 3,
      discription: [
        '全目录检索，过滤，并移动照片',
        '目标：按照时间进行排序',
      ],
      others: 'Python3 代码',
      link: 'https://www.python.org/',
      phone: '',
    },
    {
      id: 4,
      name: 'Node.js',
      image: "../../assets/images/Node.js_logo.svg",
      price: 126,
      discription: [
        '面向有2年Javascript的开发人员',
        '达成目标：定制',
      ],
      others: '量贩式选择',
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
      others: '量贩式选择',
      link: 'https://spring.io/',
      phone: '',
    },
    {
      id: 6,
      name: 'Spring Boot',
      image: "../../assets/images/icon-spring-boot.svg",
      price: 66,
      discription: [
        '面向有1年Java基础的开发人员',
        '达成目标：定制',
      ],
      others: '量贩式选择',
      link: 'https://spring.io/projects/spring-boot',
      phone: '',
    },
    {
      id: 7,
      name: 'Flowable',
      image: "../../assets/images/flowable.svg",
      price: 189,
      discription: [
        '面向有2年BPMN的开发人员',
        '达成目标：定制',
      ],
      others: '量贩式选择',
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
      others: '量贩式选择',
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
      others: '量贩式选择',
      link: 'https://cloud.spring.io/spring-cloud-dataflow/',
      phone: '',
    },
    {
      id: 10,
      name: 'Loopback 3/4',
      image: "../../assets/images/loopback.svg",
      price: 186,
      discription: [
        '面向有1年Node.js基础的开发人员',
        '达成目标：定制',
      ],
      others: '量贩式选择',
      link: 'https://loopback.io/',
      phone: '',
    },
    {
      id: 11,
      name: 'Spring-Security',
      image: "../../assets/images/Spring-Security-logo.jpg",
      price: 126,
      discription: [
        '面向有1年Spring基础的开发人员',
        '达成目标：定制',
      ],
      others: '量贩式选择',
      link: 'https://spring.io/projects/spring-security',
      phone: '',
    },
    {
      id: 12,
      name: 'Apache Camel',
      image: "../../assets/images/Apache-camel-logo.jpg",
      price: 176,
      discription: [
        '面向有1年Spring基础的开发人员',
        '达成目标：定制',
      ],
      others: '量贩式选择',
      link: 'http://camel.apache.org/',
      phone: '',
    },
  ]

}
