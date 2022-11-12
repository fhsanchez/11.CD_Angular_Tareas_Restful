import { Component } from '@angular/core';
import { SERVICIOService} from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LLamando rutas API Rest Tareas';
  constructor(private _httpService : SERVICIOService){}
}
