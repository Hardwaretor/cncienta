import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from '../_services';

@Component({
  selector: 'app-cam-list',
  templateUrl: './cam-list.component.html',
  styleUrls: ['./cam-list.component.scss']
})
export class CamListComponent implements OnInit {

  cams = null;

  constructor(private accountService: AccountService) { }


  ngOnInit() {

    this.accountService.getAllcams()
    .pipe(first())
    .subscribe(cams => this.cams = cams);
  }

  deleteCam(user_id: string) {
    const cam = this.cams.find(x => x.id === user_id);
    cam.isDeleting = true;
    this.accountService.delete(user_id)
        .pipe(first())
        .subscribe(() => {
            this.cams = this.cams.filter(x => x.id !== user_id) 
        });
}

}
