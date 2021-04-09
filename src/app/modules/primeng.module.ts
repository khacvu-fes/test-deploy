import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { FieldsetModule } from 'primeng/fieldset';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { SpinnerModule } from 'primeng/spinner';
import { MessagesModule } from 'primeng/messages';
import { FileUploadModule } from 'primeng/fileupload';
import { DragDropModule } from 'primeng/dragdrop';
import { SliderModule } from 'primeng/slider';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { FocusTrapModule } from 'primeng/focustrap';
import { SplitButtonModule } from 'primeng/splitbutton';
import { OverlayPanelModule} from 'primeng/overlaypanel';
import {PasswordModule} from 'primeng/password';
import {BlockUIModule} from 'primeng/blockui';
import {ToggleButtonModule} from 'primeng/togglebutton';
// import { CurrencyMaskModule } from 'ng2-currency-mask';
// import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';

// export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
//     align: "right",
//     allowNegative: true,
//     decimal: ",",
//     precision: 4,
//     prefix: "",
//     suffix: "",
//     thousands: "."
// };
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    ToolbarModule,
    ButtonModule,
    PanelMenuModule,
    SlideMenuModule,
    ScrollPanelModule,
    PanelModule,
    CardModule,
    AutoCompleteModule,
    DropdownModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    DialogModule,
    ConfirmDialogModule,
    TooltipModule,
    ToastModule,
    MessageModule,
    InputTextModule,
    InputTextareaModule,
    TabViewModule,
    TableModule,
    InputMaskModule,
    CalendarModule,
    CheckboxModule,
    FieldsetModule,
    ListboxModule,
    RadioButtonModule,
    SelectButtonModule,
    MultiSelectModule,
    SpinnerModule,
    MessagesModule,
    FileUploadModule,
    DragDropModule,
    SliderModule,
    KeyFilterModule,
    DynamicDialogModule,
    TriStateCheckboxModule,
    FocusTrapModule,
    SplitButtonModule,
    OverlayPanelModule,
    PasswordModule,
    BlockUIModule,
    ToggleButtonModule
    // CurrencyMaskModule
  ],
  providers: [
    // { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  exports: [
    SidebarModule,
    ToolbarModule,
    ButtonModule,
    PanelMenuModule,
    SlideMenuModule,
    ScrollPanelModule,
    PanelModule,
    CardModule,
    AutoCompleteModule,
    DropdownModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    DialogModule,
    ConfirmDialogModule,
    TooltipModule,
    ToastModule,
    MessageModule,
    InputTextModule,
    InputTextareaModule,
    TabViewModule,
    TableModule,
    InputMaskModule,
    CalendarModule,
    CheckboxModule,
    FieldsetModule,
    ListboxModule,
    RadioButtonModule,
    SelectButtonModule,
    MultiSelectModule,
    SpinnerModule,
    MessagesModule,
    FileUploadModule,
    DragDropModule,
    SliderModule,
    KeyFilterModule,
    DynamicDialogModule,
    TriStateCheckboxModule,
    FocusTrapModule,
    SplitButtonModule,
    OverlayPanelModule,
    PasswordModule,
    BlockUIModule,
    ToggleButtonModule
    // CurrencyMaskModule
  ]
})
export class DemoPrimengModule { }
