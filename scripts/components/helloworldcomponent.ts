/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

@Component({
  selector: 'hello-world',
  appInjector: [FriendsService]
})
@View({
  template: `
  <h1>Hello {{name}}!</h1>
    <p *ng-if="friends.length > 3">You have many friends</p>
    <input #newfriend (keyup) (blur)="addFriend(newfriend.value, $event)">
    <p>Friends:</p>
    <ul>
    <li  *ng-for="#friend of friends">
      {{friend}}
    </li>
  </ul>`,
  directives: [NgFor, NgIf]
})

class HelloWorldComponent {
  name: string;
  friends: Array<string>;

  constructor (friendsService: FriendsService) {
    this.name = 'Tiago';
    this.friends = friendsService.friends;
  }
  addFriend(name: string, $event) {
    if (!!name && !!name.trim()) {
      this.friends.unshift(name);
    }

    $event.target.value = null;
    $event.target.focus();
    return false;
  }
}
bootstrap(HelloWorldComponent);
