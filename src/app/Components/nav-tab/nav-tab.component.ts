import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.css'],
})
export class NavTabComponent implements OnInit {
  currentRoute: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentRoute = this.route.snapshot.url[0].path
  }
}
