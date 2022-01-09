import {Component, OnInit} from '@angular/core';
import {Actions, ofActionDispatched} from "@ngxs/store";
import {Router} from "@angular/router";
import {Logout} from "./store/auth.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BialGenie';

  constructor(private actions: Actions, private router: Router) {}

  ngOnInit() {
    this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
