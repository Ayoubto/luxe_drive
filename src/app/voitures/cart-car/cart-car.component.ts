import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-cart-car',
  templateUrl: './cart-car.component.html',
  styleUrls: ['./cart-car.component.css']
})
export class CartCarComponent {

  @Input() Car:any

}
