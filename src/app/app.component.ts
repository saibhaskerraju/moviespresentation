import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    
    <video width="100%" height="100%" controls autoplay loop>
    <source src="/assets/movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'presentation';
}
