import {Component, OnInit} from '@angular/core';

export interface Post {
    title: string;
    text: string;
    id?: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    posts: Post[] = [
        {title: 'Хочу выучить Angular компоненты', text: 'Я все еще учу компоненты', id: 1},
        {title: 'Следующий блок', text: 'Будет блок про директивы и еще про пайпы', id: 2}
    ];

    updatePost(post: Post) {
        this.posts.unshift(post);
        console.log('Post ', post);
    }

    removePost(id: number) {
        console.log('Id to remove', id);
        this.posts = this.posts.filter(p => p.id !== id);
    }

    ngOnInit(): void {
        setTimeout(() => {
            console.log('Timeout');
            this.posts[0].title = 'Changed!';
        }, 5000);
    }
}
