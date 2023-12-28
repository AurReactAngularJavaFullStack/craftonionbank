import { Component, OnInit } from '@angular/core';
import { Compte } from '../../../core/domain/compte.model';
import { CompteService } from '../../../application/services/compte.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

/*The getAllComptes() method in CompteService returns an Observable that will be subscribed 
to in the component.
The catchError RxJS operator is used to catch any errors that occur during the subscription. 
If an error occurs, it logs the error and returns an observable of an empty array using of([]). 
This ensures that the subscription still completes successfully, even in the event of an error.

The error parameter now has a type of any, but you should avoid using any where possible. 
It's better to define an interface for your error object or use the unknown type and perform 
a runtime check to handle it properly.
Make sure that the styleUrls property in the @Component decorator is written correctly as 
styleUrls (plural) and not styleUrl.
Remember to replace '/path/to/comptes/api' with the actual endpoint URL you need to fetch 
the comptes data.*/

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {
  comptes: Compte[] = [];

  constructor(private compteService: CompteService) {}

  ngOnInit() {
    this.compteService.getAllComptes()
      .pipe(
        catchError((error) => {
          console.error('Error fetching comptes', error);
          return of([]); // Return an empty array or some default value
        })
      )
      .subscribe(
        (data: Compte[]) => {
          this.comptes = data;
        }
      );
  }
}
