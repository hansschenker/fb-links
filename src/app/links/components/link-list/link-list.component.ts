import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { exit } from 'process';

import data from '../../../../assets/daily-2020.json';
import { Link } from '../../types/link';

@Component({
  selector: 'link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkListComponent implements OnInit {
  listData = data;
  links: Link[] = [];
  days = ['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so', '--'];
  constructor() {
    this.listData.forEach((li) => {
      let link: Link = { category: '', title: '', description: '', url: '' };

      //console.log('col:', li['Column1'].toString().trimStart().substring(0, 2));

      if (li['Column1'].toString().trimStart().substring(0, 2) === 'mo') {
        console.log('mo', li['Column1'].toString().trimStart().substring(0, 2));
      } else if (
        li['Column1'].toString().trimStart().substring(0, 2) === 'di'
      ) {
        console.log('di', li['Column1'].toString().trimStart().substring(0, 2));
      } else if (
        li['Column1'].toString().trimStart().substring(0, 2) === 'mi'
      ) {
      } else if (
        li['Column1'].toString().trimStart().substring(0, 2) === 'do'
      ) {
      } else if (
        li['Column1'].toString().trimStart().substring(0, 2) === 'fr'
      ) {
      } else if (
        li['Column1'].toString().trimStart().substring(0, 2) === 'sa'
      ) {
      } else if (
        li['Column1'].toString().trimStart().substring(0, 2) === 'so'
      ) {
      } else if (
        li['Column1'].toString().trimStart().substring(0, 2) === '--'
      ) {
      } else if (li['Column1'].toString().trimStart().substring(0, 2) === '') {
      } else {
        link.category = li['Column1'];
        link.title = li['Column2'];
        link.description = li['Column3'];
        link.url = li['Column4'];
        this.links.push(link);
      }
    });
    //console.log('links:', this.links);
  }

  ngOnInit(): void {}
  ngAfterViewInit() {}
}
