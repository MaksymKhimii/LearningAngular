import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';
import {Post} from '../app.component';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit,
    OnChanges {
    @Input() post: Post;
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onRemove = new EventEmitter<number>();
    @ContentChild('info', {static: true}) infoRef: ElementRef;

    ngOnInit(): void {
        console.log('ngOnInit');
        //  console.log(this.infoRef.nativeElement);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges');
    }


    removePost() {
        this.onRemove.emit(this.post.id);
    }
}

