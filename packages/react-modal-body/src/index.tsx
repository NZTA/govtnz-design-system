import { Component, ReactNode } from "react";

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

const FPS = 10; // 10 frames-per-second
const MODAL_SELECTOR = ".ReactModal__Content";

export default class ReactModalBody extends Component<Props> {
  bodyStart: HTMLElement;
  bodyEnd: HTMLElement;
  timer: NodeJS.Timeout;

  constructor(props: Props) {
    super(props);

    this.bodyStart = document.createElement("div");
    this.bodyStart.style.position = "absolute"; // pull out of flow
    this.bodyStart.setAttribute("tabindex", "0");
    this.bodyStart.addEventListener("focus", this.onFocus);
    this.bodyEnd = this.bodyStart.cloneNode() as HTMLElement;
    this.bodyEnd.addEventListener("focus", this.onFocus);

    this.setFocusTrap = this.setFocusTrap.bind(this);
    this.removeFocusTrap = this.removeFocusTrap.bind(this);
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      this.setFocusTrap();
    } else {
      this.removeFocusTrap();
    }
  }

  setFocusTrap() {
    // Place focus trap elements at start/end of <body>
    // so that users who leave react-modal via (ie) CTRL-L
    // and then tab into the page immediately fall into the
    // focus trap and then are moved to the modal.

    if (this.timer) clearTimeout(this.timer);
    if (document.body.firstChild !== this.bodyStart) {
      document.body.insertBefore(this.bodyStart, document.body.firstChild);
    }
    if (document.body.lastChild !== this.bodyEnd) {
      document.body.appendChild(this.bodyEnd);
    }

    // keep trying to place traps in case DOM changes while modal is open
    this.timer = setTimeout(this.setFocusTrap, 1000 / FPS);
  }

  removeFocusTrap() {
    if (this.timer) clearTimeout(this.timer);
    document.body.removeChild(this.bodyStart);
    document.body.removeChild(this.bodyEnd);
  }

  onFocus() {
    // FIXME: if this code is merged into React Modal we should move focus using their methods
    const target = document.querySelector(MODAL_SELECTOR) as HTMLElement;
    if (!target) {
      console.error(
        "Unable to move focus to modal because unable to find modal."
      );
      return;
    }
    console.info("Focus moved to ", target);
    target.focus();
  }

  render() {
    return this.props.children;
  }
}
