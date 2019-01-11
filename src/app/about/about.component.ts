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
      name: 'Angular 7',
      image: "../../assets/images/angular2.svg",
      price: 1220,
      discription: [
        '面向有2年网页开发人员',
        '达成目标：学会类似本网站的功能',
      ],
      others: '量贩式选择',
      link: 'http://docedit.cn:8082/angular/html/index.html',
      phone: '',
    },
    {
      id: 2,
      name: 'BootStrap4',
      image: "../../assets/images/feature-icon.svg",
      price: 600,
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
      link: 'http://docedit.cn:8082/python/html/index.html',
      phone: '',
    },
    {
      id: 4,
      name: 'Node.js',
      image: "../../assets/images/Node.js_logo.svg",
      price: 1210,
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
      price: 920,
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
      price: 910,
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
      price: 1230,
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
      price: 999,
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
      price: 980,
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
      price: 900,
      discription: [
        '面向有1年Node.js基础的开发人员',
        '达成目标：定制',
      ],
      others: '量贩式选择',
      link: 'http://docedit.cn:8082/loopback/html/index.html',
      phone: '',
    },
    {
      id: 11,
      name: 'Spring-Security',
      image: "../../assets/images/Spring-Security-logo.jpg",
      price: 860,
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
      price: 880,
      discription: [
        '面向有1年Spring基础的开发人员',
        '达成目标：定制',
      ],
      others: '量贩式选择',
      link: 'http://camel.apache.org/',
      phone: '',
    },
    {
      id: 13,
      name: '公众号/小程序',
      image: "../../assets/images/wechat.svg",
      price: 866,
      discription: [
        '面向有1年Html基础的开发人员',
        '达成目标：定制',
      ],
      others: '量贩式选择',
      link: 'https://web.wechat.com/',
      phone: '',
    },
    {
      id: 14,
      name: '自动化测试',
      image: "../../assets/images/cucumber-logo.svg",
      price: 900,
      discription: [
        '面向有1年Html基础的开发人员',
        '达成目标：定制',
      ],
      others: '量贩式选择',
      link: 'https://cucumber.io/',
      phone: '',
    },
    {
      id: 15,
      name: 'Docker',
      image: "../../assets/images/docker-docs-logo.svg",
      price: 880,
      discription: [
        '面向有1年工作经验的开发人员',
        '达成目标：定制',
      ],
      others: '量贩式选择',
      link: 'https://docs.docker.com/',
      phone: '',
    },
    {
      id: 16,
      name: 'Java',
      image: "../../assets/images/java.svg",
      price: 680,
      discription: [
        '面向零基础的人员',
        '达成目标：定制',
      ],
      others: '量贩式选择',
      link: 'https://www.java.com',
      phone: '',
    },
  ]

}
