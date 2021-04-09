import {Component, Input, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  @Input() items;
  @ViewChild('childMenu', null) public childMenu;
    @Output() closed = new EventEmitter();

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  itemClick(event , item) {
    if(item.disabled) {
        event.preventDefault();
        return true;
    }
    
    if(!item.route) {
        event.preventDefault();
    }
    
    if(item.command) {            
        item.command({
            originalEvent: event,
            item: item
        });
    }
}

}
