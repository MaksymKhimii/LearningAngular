import {Component, forwardRef, OnInit, Provider} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {SwitchComponent} from './switch/switch.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    form: FormGroup;
    appState = 'on';

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl('', [
                Validators.email,
                Validators.required
            ]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(6)
            ])
        });
    }

    submit() {
        if (this.form.valid) {
            console.log('Form:', this.form);
            const formData = {...this.form.value};
            console.log('Form data: ', formData);
        }
    }

    handleChange() {
        console.log(this.appState);
    }
}

