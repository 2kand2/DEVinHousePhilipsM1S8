import { Component } from '@angular/core';
import { notification } from 'src/app/modules/notification.model';
import { NOTIFICATIONS } from 'src/app/mocks/notifications-mock';

@Component({
  selector: 'ntap-list-group-item',
  templateUrl: './list-group-item.component.html',
  styleUrls: ['./list-group-item.component.scss']
})
export class ListGroupItemComponent {

  notifications: notification[] = NOTIFICATIONS

  readNotification(index: number) {
    this.notifications[index].read = true;
    console.log(this.notifications[index]);
  }




}
