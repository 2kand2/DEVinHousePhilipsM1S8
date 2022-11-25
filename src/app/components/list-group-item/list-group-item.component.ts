import { Component } from '@angular/core';

interface Notification {
  title: string,
  subtitle: string,
  date: string

}

@Component({
  selector: 'ntap-list-group-item',
  templateUrl: './list-group-item.component.html',
  styleUrls: ['./list-group-item.component.scss']
})
export class ListGroupItemComponent {

  notifications: Notification[] = [
    {
      title: 'WhatsApp',
      subtitle: 'Fulano mandou mensagem!',
      date: '3 days ago'
    },
    {
      title: 'Instagram',
      subtitle: 'Ciclano começou a te seguir!',
      date: '3 days ago'
    },
    {
      title: 'Instagram',
      subtitle: 'Beltrano iniciou um vídeo ao vivo.',
      date: '3 days ago'
    },
  ]

}
