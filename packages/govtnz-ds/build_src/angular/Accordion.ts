import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Accordion",
  template: `
    <div class="g-accordion" role="contentinfo">
      <slot></slot>
    </div>
  `
})
export class AppComponent {
  @Input() children: React.ReactNode;
  title = "Accordion";
}
