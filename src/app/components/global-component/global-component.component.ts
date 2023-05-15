import { Component } from '@angular/core';

@Component({
  selector: 'app-global-component',
  templateUrl: './global-component.component.html',
  styleUrls: ['./global-component.component.css']
})
export class GlobalComponent {
    public static apiUrl: string = "https://newsdata.io/api/1/news";
    public static apiKey: string = "pub_220571b0b026b324b46019e83fd4ede10184f";

}
