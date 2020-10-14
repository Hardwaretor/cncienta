import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from '../_services';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.scss']
})

export class MachineListComponent implements OnInit {

  machines = null;

  constructor(private accountService: AccountService) { }


  ngOnInit() {

    this.accountService.getAllmachines()
    .pipe(first())
    .subscribe(machines => this.machines = machines);
  }

  deleteUser(id: string) {
    const machine = this.machines.find(x => x.id === id);
    machine.isDeleting = true;
    this.accountService.delete(id)
        .pipe(first())
        .subscribe(() => {
            this.machines = this.machines.filter(x => x.id !== id) 
        });
}

}

