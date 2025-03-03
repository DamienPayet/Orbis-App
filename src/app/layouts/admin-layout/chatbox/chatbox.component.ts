import { Component, HostListener} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
interface type {
  title: string,
  date: string
}
interface chatType {
  img: string,
  name: string,
  desc: string,
  status: string,
}
interface chatlistType {
  img: string;
  msg: string;
  msgTime: string;
  send?: boolean
}
@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.css'
})
export class ChatboxComponent {
  public isVisited = false;
  elementHeight: any;
  active = 3;

  activeMenu() {
    this.isVisited = !this.isVisited;
  }

  ngOnInit() {
    this.adjustHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustHeight();
  }

  private adjustHeight() {
    const windowHeight = window.innerHeight;
    this.elementHeight = windowHeight-206+'px';
  }


  chatboxClose() {
    document.getElementById("chatBox")?.setAttribute("class", 'chatbox');
  }
  notes: type[] = [
    {
      title: 'New order placed..',
      date: '10 Aug 2021'
    },
    {
      title: 'Youtube, a video-sharing website..',
      date: '10 Aug 2021'
    },
    {
      title: 'john just buy your product..',
      date: '10 Aug 2021'
    },
    {
      title: 'Athan Jacoby',
      date: '10 Aug 2021'
    },
  ]
  chatsA: chatType[] = [
    {
      img: 'assets/images/avatar/1.jpg',
      name: 'Archie Parker',
      desc: 'Kalid is online',
      status: 'online_icon'
    },
    {
      img: 'assets/images/avatar/2.jpg',
      name: 'Alfie Mason',
      desc: 'Taherah left 7 mins ago',
      status: 'online_icon offline'
    },
    {
      img: 'assets/images/avatar/3.jpg',
      name: 'AharlieKane',
      desc: 'Sami is online',
      status: 'online_icon'
    },
    {
      img: 'assets/images/avatar/4.jpg',
      name: 'Athan Jacoby',
      desc: 'Nargis left 30 mins ago',
      status: 'online_icon offline'
    }

  ]
  chatsB: chatType[] = [
    {
      img: 'assets/images/avatar/5.jpg',
      name: 'Bashid Samim',
      desc: 'Rashid left 50 mins ago',
      status: 'online_icon offline'
    },
    {
      img: 'assets/images/avatar/1.jpg',
      name: 'Breddie Ronan',
      desc: 'Kalid is online',
      status: 'online_icon'
    },
    {
      img: 'assets/images/avatar/3.jpg',
      name: 'Beorge Carson',
      desc: 'Taherah left 7 mins ago',
      status: 'online_icon offline'
    }
  ]
  chatsD: chatType[] = [
    {
      img: 'assets/images/avatar/3.jpg',
      name: 'Darry Parker',
      desc: 'Sami is online',
      status: 'online_icon'
    },
    {
      img: 'assets/images/avatar/4.jpg',
      name: 'Denry Hunter',
      desc: 'Nargis left 30 mins ago',
      status: 'online_icon offline'
    }
  ]
  chatsJ: chatType[] = [
    {
      img: 'assets/images/avatar/5.jpg',
      name: 'Jack Ronan',
      desc: 'Rashid left 50 mins ago',
      status: 'online_icon offline'
    },
    {
      img: 'assets/images/avatar/1.jpg',
      name: 'Jacob Tucker',
      desc: 'Taherah left 7 mins ago',
      status: 'online_icon '
    },
    {
      img: 'assets/images/avatar/2.jpg',
      name: 'James Logan',
      desc: 'Rashid left 50 mins ago',
      status: 'online_icon offline'
    }
  ]
  chatsO: chatType[] = [
    {
      img: 'assets/images/avatar/5.jpg',
      name: 'Oshim Samim',
      desc: 'Rashid left 50 mins ago',
      status: 'online_icon offline'
    },
    {
      img: 'assets/images/avatar/5.jpg',
      name: 'Oscar Weston',
      desc: 'Rashid left 50 mins ago',
      status: 'online_icon'
    },
    {
      img: 'assets/images/avatar/3.jpg',
      name: 'Om Carson',
      desc: 'Taherah left 7 mins ago',
      status: 'online_icon offline'
    }
  ]
  chetList: chatlistType[] = [
    {
      img: 'assets/images/avatar/1.jpg',
      msg: 'Hi, how are you samim?',
      msgTime: '8:40 AM, Today',
      send: true
    },
    {
      img: 'assets/images/avatar/2.jpg',
      msg: 'Hi Khalid i am good tnx how about you?',
      msgTime: '8:55 AM, Today',
    },
    {
      img: 'assets/images/avatar/1.jpg',
      msg: 'I am good too, thank you for your chat template',
      msgTime: '9:00 AM, Today',
      send: true
    },
    {
      img: 'assets/images/avatar/2.jpg',
      msg: ' You are welcome',
      msgTime: '9:05 AM, Today',
    },
    {
      img: 'assets/images/avatar/1.jpg',
      msg: 'I am looking for your next templates',
      msgTime: '9:07 AM, Today',
      send: true
    },
    {
      img: 'assets/images/avatar/2.jpg',
      msg: 'Ok, thank you have a good day',
      msgTime: '9:10 AM, Today',
    },
    {
      img: 'assets/images/avatar/1.jpg',
      msg: 'Bye, see you',
      msgTime: '9:12 AM, Today',
      send: true
    },
    {
      img: 'assets/images/avatar/1.jpg',
      msg: '  Hi, how are you samim?',
      msgTime: '11:00 AM, Today',
      send: true
    }
    ,
    {
      img: 'assets/images/avatar/2.jpg',
      msg: 'Hi Khalid i am good tnx how about you?',
      msgTime: '11:02 AM, Today',
    },
    {
      img: 'assets/images/avatar/1.jpg',
      msg: 'I am good too, thank you for your chat template',
      msgTime: '11:02 AM, Today',
      send: true
    },
    {
      img: 'assets/images/avatar/2.jpg',
      msg: ' You are welcome',
      msgTime: '9:05 AM, Today',
    },
    {
      img: 'assets/images/avatar/1.jpg',
      msg: 'I am looking for your next templates',
      msgTime: '9:07 AM, Today',
      send: true
    },
    {
      img: 'assets/images/avatar/2.jpg',
      msg: 'Ok, thank you have a good day',
      msgTime: '9:10 AM, Today',
    },
    {
      img: 'assets/images/avatar/1.jpg',
      msg: 'Bye, see you',
      msgTime: '9:12 AM, Today',
      send: true
    }
  ]
}
