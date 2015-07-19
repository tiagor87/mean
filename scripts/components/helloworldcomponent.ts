/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

@Component({
  selector: 'hello-world',
  appInjector: [FriendsService]
})
@View({
  templateUrl: './templates/helloworldcomponent.html',
  directives: [NgFor, NgIf]
})

class HelloWorldComponent {
  name: string;
  friends: Array<string>;

  constructor (friendsService: FriendsService) {
    this.name = 'Tiago';
    this.friends = friendsService.friends;
  }
  addFriend(input: { value: string, focus: Function }) {
    var name = input.value;
    if (!!name && !!name.trim()) {
      this.friends.unshift(name);
    }

    input.value = null;
    input.focus();
    return false;
  }
}
bootstrap(HelloWorldComponent);
