import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, SimpleChanges, OnChanges, Renderer2, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-date-box',
  templateUrl: './date-box.component.html',
  styleUrls: ['./date-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DateBoxComponent implements OnInit, OnChanges, OnDestroy {
  @Input() value = new Date();
  @Input() showIcon = false;
  @Input() readonly = false;
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  text = "";

  OnChange() {
    //console.log(this.text);
    if (this.text == "") {
      this.value = new Date();
      this.text = this.DateToString(this.value);      
      this.valueChange.emit(this.value);
      return;
    }
    let arrText = this.text.split("/")
    let ngay = Number(arrText[0]);
    let thang = Number(arrText[1]);
    if (arrText[1].trim() == "") {
      thang = new Date().getMonth() + 1;
    }
    let nam = Number(arrText[2]);
    if (arrText[2].trim() == "") {
      nam = new Date().getFullYear();
    }
    if (nam < 1000) {
      nam = nam + 2000
    }
    let date = ngay + "/" + thang + "/" + nam
    if (!this.CheckDate(nam, thang, ngay)) {
      this.value = new Date();
    } else {
      this.value = this.StringToDate(date);
    }
    this.text = this.DateToString(this.value);
    //console.log(this.text);
    this.valueChange.emit(this.value);
  }

  CheckDate(nam, thang, ngay) {
    if (thang > 12) {
      return false
    }
    if (thang == 2 && nam % 4 == 0 && ngay > 29) {
      return false
    }
    if (thang == 2 && nam % 4 != 0 && ngay > 28) {
      return false
    }
    if ([1, 3, 5, 7, 8, 10, 12].indexOf(thang) > -1 && ngay > 31) {
      return false
    }
    if ([4, 6, 9, 11].indexOf(thang) > -1 && ngay > 30) {
      return false
    }
    return true;
  }

  SetText() {
    this.text = this.DateToString(this.value);
  }

  DateToString(date: Date, isoDate?) {
    let ngay = this.STRTRAN(this.str(date.getDate(), 2), " ", "0");
    let thang = this.STRTRAN(this.str(date.getMonth() + 1, 2), " ", "0");
    let nam = date.getFullYear();
    if (isoDate != undefined) {
      return nam + "-" + thang + "-" + ngay + "T00:00:00.000Z";
    }
    return ngay + "/" + thang + "/" + nam;
  }

  STRTRAN(str, find, replace) {
    while (str.indexOf(find) > -1) {
      str = str.replace(find, replace);
    }
    return str;
  }

  str(num: number, leng?: number, dec?: number) {
    if (leng == undefined) {
      return num.toString();
    }
    if (parseInt(num.toString()).toString().length > leng) {
      return "*".repeat(leng);
    }
    let _dec = 0;
    if (dec != undefined) {
      _dec = dec;
    }
    let spac = "";
    if (leng - num.toString().length > 0) {
      spac = " ".repeat(leng - num.toString().length)
    }
    return spac + Number(num.toPrecision(leng)).toFixed(_dec);
  }

  StringToDate(date: string) {
    let arrDate = date.split("/");
    let ngay = Number(arrDate[0]);
    let thang = Number(arrDate[1]) - 1;
    let nam = Number(arrDate[2]);
    return new Date(nam, thang, ngay)
  }

  SetValue(value) {
    this.value = value;
    this.SetText();
  }

  showDatePicker = false;
  SelectDate() {
    this.SetText();
    this.valueChange.emit(this.value);
    this.showDatePicker = false;
  }
  datepickerClick = false;
  ShowDatePicker() {
    this.datepickerClick = true;
    this.showDatePicker = true;
    this.bindDocumentClickListener();
  }

  documentClickListener: any;
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = this.renderer.listen('document', 'click', (event) => {
        if (!this.datepickerClick && this.showDatePicker == true) {
          this.showDatePicker = false;
        }
        this.datepickerClick = false;
        this.cd.detectChanges();
      });
    }
  }

  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }

  constructor(private renderer: Renderer2, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.SetText();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.SetText();
    }
  }

  ngOnDestroy() {
    this.unbindDocumentClickListener();
  }

}
