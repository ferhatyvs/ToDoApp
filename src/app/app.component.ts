import { Component } from '@angular/core';
import { Model, todoitem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model1 = new Model();
  isDisplay = false;

  getName() {
    return this.model1.user;
  }
  getItems() {
    if(this.isDisplay){
      return this.model1.items;
    }
    else{
      return this.model1.items.filter(item => !item.action);
    }
    
  }
  additem(Text) {
    if (Text != '') {
      this.model1.items.push(new todoitem(Text, false));
    }
  }
}
