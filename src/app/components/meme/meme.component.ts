import { Component } from '@angular/core';


@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss']
})
export class MemeComponent {
  ngOnInit(){
    import("./slideshow.js" as any);
  }
}
