import {Component} from '@angular/core';
import { MaterialService } from './material.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(private Services : MaterialService){
    this.changeTheme(this.Services.getStorage("Theme"));
  }

  isDarkTheme: boolean = false;
  isDarkKhaki: boolean = false;
  isSkyBlue: boolean = false;
  isOrangeTheme: boolean = false;
  title = 'Material';
  changeTheme(color): void {
      switch(color)
      {
        case 'Dark':
        this.isDarkTheme = true;
        this.isDarkKhaki  = false;
        this.isSkyBlue = false;
        this.isOrangeTheme = false;
        this.Services.setStorage("Theme" ,"Dark");
        break;

        case 'Khaki':
        this.isDarkKhaki = true;
        this.isDarkTheme = false;
        this.isSkyBlue = false;
        this.isOrangeTheme = false;
        this.Services.setStorage("Theme" ,"Khaki");
        break;

        case 'sky':
        this.isSkyBlue = true;
        this.isDarkTheme = false;
        this.isDarkKhaki  = false;
        this.isOrangeTheme = false;
        this.Services.setStorage("Theme" ,"sky");
        break;

        case 'orange':
        this.isOrangeTheme = true;
        this.isDarkTheme = false;
        this.isDarkKhaki  = false;
        this.isSkyBlue = false;
        this.Services.setStorage("Theme" ,"orange");
        break;

        default:
        console.log("Theme doesn't Exit"); 
      }
 }

}
