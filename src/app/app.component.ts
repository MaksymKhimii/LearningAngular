import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    arr = [1, 1, 2, 3, 5, 8, 13];
    objs = [
        {
            title: 'Post 1', author: 'Vladilen', comments: [
                {name: 'Max1', text: 'Loren1'},
                {name: 'Max1', text: 'Loren2'},
                {name: 'Max1', text: 'Loren3'},
            ]
        },
        {
            title: 'Post 2', author: 'Vladilen 2', comments: [
                {name: 'Max2', text: 'Loren1'},
                {name: 'Max2', text: 'Loren2'},
                {name: 'Max2', text: 'Loren3'},
            ]
        }
    ];

    now: Date = new Date();
}
