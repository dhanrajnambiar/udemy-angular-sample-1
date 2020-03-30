import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html'
})
export class DirectiveComponent implements OnInit {
  is_clicked : boolean = false;

  create_entity(ev_data: Event){
    this.is_clicked=true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
