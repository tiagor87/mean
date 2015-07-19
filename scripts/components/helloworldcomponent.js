/// <reference path="../../typings/angular2/angular2.d.ts" />
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
    HelloWorldComponent.prototype.addFriend = function (input) {
        var name = input.value;
        if (!!name && !!name.trim()) {
            this.friends.unshift(name);
        }
        input.value = null;
        input.focus();
        return false;
    };
    HelloWorldComponent = __decorate([
        angular2_1.Component({
            selector: 'hello-world',
            appInjector: [FriendsService]
        }),
        angular2_1.View({
            templateUrl: './templates/helloworldcomponent.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [FriendsService])
    ], HelloWorldComponent);
    return HelloWorldComponent;
})();
angular2_1.bootstrap(HelloWorldComponent);
