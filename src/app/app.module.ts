import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ModalComponent} from './modal/modal.component';
import {RefDirective} from './ref.directive';

@NgModule({
    declarations: [
        AppComponent,
        ModalComponent,
        RefDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [],
    entryComponents: [ModalComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
