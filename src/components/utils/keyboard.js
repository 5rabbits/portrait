export default {
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CONTROL: 17,
  ALT: 18,
  CAPS_LOCK: 20,
  ESCAPE: 27,
  ARROW_UP: 38,
  ARROW_DOWN: 40,
  LEFT_CMD: 91,
  RIGHT_CMD: 93,

  isModifier(code) {
    return (
      code === this.SHIFT ||
      code === this.CAPS_LOCK ||
      code === this.CONTROL ||
      code === this.ALT ||
      code === this.LEFT_CMD ||
      code === this.RIGHT_CMD
    )
  },
}
