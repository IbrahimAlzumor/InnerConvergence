import {AfterViewInit, Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements AfterViewInit {
  hideClass = 'dsssssdd'
  rawHtml = `
  The standard chunk of Lorem <span class="${this.hideClass}">Ipsum</span> used since the<span class="${this.hideClass}">Ipsum</span> 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by C
  icero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n
  `

  menu = [
    {
      mainTitle: "Oblivion Forge",
      subTitles: [
        {
          title: 'Oblivion Technology',
          link: 'https://OblivionForgeTechnology.com'
        },
      ]
    },
    {
      mainTitle: "Oblivion Community",
      subTitles: [
        {
          title: 'Oblivion Games Forums',
          link: 'https://OblivionForgeCommunity.com'
        },
        {
          title: 'Oblivion Developer Network',
          link: 'https://OblivionForgeNetwork.com'
        }
      ]
    },
    {
      mainTitle: "Latest Release",
      subTitles: [
        {
          title: 'Inner Convergence',
          link: 'https://InnerConvergence.com/'
        },
      ]
    },
  ]

  ngAfterViewInit(): void {
    const query = document.getElementsByClassName(this.hideClass)

    if (query.length) {
      for (let i = 0; i < query.length; i++) {
        // @ts-ignore
        query[i]['style'].background = "red"
        // @ts-ignore
        query[i]['style'].color = "red"
      }
    }
  }
}
