/// <reference path="../typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var HelloWorldComponent = (function () {
    function HelloWorldComponent(friendsService) {
        this.name = 'Tiago';
        this.friends = friendsService.friends;
    }
    HelloWorldComponent.prototype.addFriend = function (name, $event) {
        if (!!name && !!name.trim()) {
            this.friends.unshift(name);
        }
        $event.target.value = null;
        $event.target.focus();
        return false;
    };
    HelloWorldComponent = __decorate([
        angular2_1.Component({
            selector: 'hello-world',
            appInjector: [FriendsService]
        }),
        angular2_1.View({
            template: "\n  <h1>Hello {{name}}!</h1>\n    <p *ng-if=\"friends.length > 3\">You have many friends</p>\n    <input #newfriend (keyup) (blur)=\"addFriend(newfriend.value, $event)\">\n    <p>Friends:</p>\n    <ul>\n    <li  *ng-for=\"#friend of friends\">\n      {{friend}}\n    </li>\n  </ul>",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [FriendsService])
    ], HelloWorldComponent);
    return HelloWorldComponent;
})();
angular2_1.bootstrap(HelloWorldComponent);
