import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from '../_services';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  devices = null;
  

  constructor(private accountService: AccountService) { }


  ngOnInit() {

    this.accountService.getAlldevices()
    .pipe(first())
    .subscribe(devices => this.devices = devices);
  }

  deleteUser(id: string) {
    const device = this.devices.find(x => x.id === id);
    device.isDeleting = true;
    this.accountService.delete(id)
        .pipe(first())
        .subscribe(() => {
            this.devices = this.devices.filter(x => x.id !== id) 
        });
}

}
