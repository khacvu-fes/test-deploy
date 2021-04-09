import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  menu = [
    {MA: "001", TEN: "Menu 01", ICON: "", TEN_ENG: "", ROUTERLINK: "", ID: ""},
    {MA: "00101", TEN: "Menu 01 01", ICON: "", TEN_ENG: "", ROUTERLINK: "", ID: ""},
    {MA: "0010101", TEN: "Menu 01 01 01", ICON: "", TEN_ENG: "", ROUTERLINK: "", ID: ""},
    {MA: "0010102", TEN: "Menu 01 01 02", ICON: "", TEN_ENG: "", ROUTERLINK: "", ID: ""},
    {MA: "0010103", TEN: "Menu 01 01 03", ICON: "", TEN_ENG: "", ROUTERLINK: "", ID: ""},
    {MA: "00102", TEN: "Menu 01 02", ICON: "", TEN_ENG: "", ROUTERLINK: "", ID: ""},
    {MA: "00103", TEN: "Menu 01 03", ICON: "", TEN_ENG: "", ROUTERLINK: "", ID: ""},
    {MA: "002", TEN: "Menu 02", ICON: "", TEN_ENG: "", ROUTERLINK: "", ID: ""},
    {MA: "00201", TEN: "Menu 02 01", ICON: "", TEN_ENG: "", ROUTERLINK: "", ID: ""},
    {MA: "00202", TEN: "Menu 02 02", ICON: "", TEN_ENG: "", ROUTERLINK: "", ID: ""},
    {MA: "00203", TEN: "Menu 02 03", ICON: "", TEN_ENG: "", ROUTERLINK: "", ID: ""},
    {MA: "003", TEN: "Menu 03", ICON: "", TEN_ENG: "", ROUTERLINK: "", ID: ""},
    {MA: "004", TEN: "Menu 04", ICON: "", TEN_ENG: "", ROUTERLINK: "", ID: ""}
  ];

  language = "vn";
  TinhListItem(table) {
    let tbl = [];
    for (const row of table) {
      let _ma = row.MA.trim();
      if (table.filter(x => x.MA.trim() != _ma && _ma.substr(0, x.MA.trim().length) == x.MA.trim()).length == 0) {
        let tbl_con = table.filter(x => x.MA.trim() != _ma && x.MA.substr(0, _ma.length) == _ma);        
        let icon = row.ICON
        let label = row.TEN;
        if (this.language != "vn" && row.TEN_ENG.trim() != "") {
          label = row.TEN_ENG;
        }
        if (tbl_con.length > 0) {          
          let tbl2 = this.TinhListItem(tbl_con);
          tbl.push({ label: label, icon: icon, items: tbl2, command: () => { }, route: row.ROUTERLINK, queryParams: {id:row.ID} })
        } else {
          tbl.push({ label: label, icon: "", command: () => {}, route: row.ROUTERLINK, queryParams: {id:row.ID} })
        }
      }
    }
    return tbl;
  }
  menuAngular = [];

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.menuAngular = this.TinhListItem(this.menu);
  }

  prevButtonTrigger;

  buttonEnter(trigger) {
    if (!this.clickedMenu) {
      return;
    }
    setTimeout(() => {
      if(this.prevButtonTrigger && this.prevButtonTrigger != trigger){
        this.prevButtonTrigger.closeMenu();
        this.prevButtonTrigger = trigger;
        trigger.openMenu();
        this.clickedMenu = true;
      }
      else {
        this.prevButtonTrigger = trigger
        trigger.openMenu();
      }      
    })
  }

  clickedMenu = false;
  ClickMenu(trigger){
    this.clickedMenu = true;
    this.buttonEnter(trigger);
  }

  CloseMenu(){
    this.clickedMenu = false;
  }

}
