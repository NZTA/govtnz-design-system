"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "MainNavItem";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "ariaCurrent", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "href", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "rel", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "target", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "children", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "g-MainNavItem",
            template: "\n<li class=\"g-main-nav__item\">\n\n  \n<a aria-current=\"{{ariaCurrent}}\" class=\"g-main-nav__item__link{{ariaCurrent ? \" g-main-nav__item__link--active\" : \"\"}}\" href=\"{{href}}\" rel=\"{{rel}}\" target=\"{{target}}\">\n\n    <slot></slot>\n  \n\n</a>\n\n\n\n\n</li>\n\n\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=MainNavItem.js.map