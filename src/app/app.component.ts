import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
    title: string;
    text: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    /*  e: number = Math.E;
      str: string = 'hello world';
      date: Date = new Date();
      float = 0.42;
      obj = {
        a: 1,
        b: {
            c: 2,
            d: {
                e: 3,
                f: 4
            }
        }
      };*/
    /*    search = '';
        searchField = 'title';
        posts: Post[] = [
            {title: 'Beer', text: 'The best beer in world!'},
            {title: 'Bread', text: 'The best bread in world!'},
            {title: 'TypeScript', text: 'TypeScript is the best language in world!'},
        ];
        addPost() {
            this.posts.unshift({
                title: 'Angular 8',
                text: 'Pipes'
            });
        }*/
    p: Promise<string> = new Promise<string>(resolve => {
        setTimeout(() => {
            resolve('Promise Resolved');
        }, 4000);
    });
    // first
    date$: Observable<Date> = new Observable<Date>(obs => {
        setInterval(() => {
            obs.next(new Date());
        }, 1000);
    });
    date: Date;
    // second way
    ngOnInit(): void {
        this.date$.subscribe(date => {
            this.date = date;
        });
    }
}
