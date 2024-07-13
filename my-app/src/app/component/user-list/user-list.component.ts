import { booleanAttribute, Component, Input, numberAttribute, Output, EventEmitter } from '@angular/core';
import { User } from '../../../model/user';
import { HighlightDirective } from '../../directive/highlight.directive';


function formatName(value: string) {
  return "Hi " + value
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  @Input({ transform: formatName }) name= ""
  @Input({ transform: booleanAttribute }) isSingle !: boolean;
  @Input({ transform: numberAttribute }) salary!: number

  //@Output() myEvent = new EventEmitter<string>() 

  // sendData() {
  //   this.myEvent.emit("This is my event emmitter")
  // }

  @Output() myEvent = new EventEmitter<User>()

  sendData() {
    this.myEvent.emit({name: this.name, newSalary: 35000});
  }


  // name="Shree"
  // status="single"
  // salary="400000"

  // onChange(e:Event){
  //   const value= (e.target as HTMLInputElement).value
  //   // console.log('we have called the input type')
  //   console.log(value)
  // }

  // users=[
  //   {name:"abce", status:"single", salary:"90000" },
  //   {name:"efgh" ,status:"married", salary:"5000" },
  //   {name:"ijkl", status:"single", salary:"10000" }
  // ]

  // bgcolor="blue";

}
