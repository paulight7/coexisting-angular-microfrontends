import { Component } from '@angular/core';
import { from } from 'rxjs';
import { assetUrl } from 'src/single-spa/asset-url';
@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MF2';
  marioUrl = assetUrl("mario.png");
  // yoshiUrl = assetUrl("yoshi.png");
}
