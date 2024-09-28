/**
 * Creates a stylized slider with the provided parameters.
 * @param min Defines the lowest point (left) of the slider.
 * @param max Defines the highest point (right) of the slider.
 * @param value Current position on the slider.
 * @param disabled (optional) Wether if this slider can be dragged or not.
 */
export function StyledSlider(
  { min, max, value, disabled }: {
    min: string;
    max: string;
    value: string;
    disabled?: true;
  },
) {
  return (
    <div class="w-full">
      <input
        class={"styled-slider" +
          (disabled === true ? " cursor-not-allowed pointer-events-none" : "")}
        type="range"
        min={min}
        max={max}
        value={value}
      />
    </div>
  );
}
