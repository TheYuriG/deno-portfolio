export function StyledSlider(
  { min, max, value }: { min: string; max: string; value: string },
) {
  return (
    <div class="w-full">
      <input
        class="styled-slider"
        type="range"
        min={min}
        max={max}
        value={value}
      />
    </div>
  );
}
