//? Export a subheader that contains all common classes for easy styling and is smaller than StyledHeader and StyledSubHeader
export function StyledMiniHeader(
  { title, id }: { title: string; id?: string },
) {
  return (
    <h3
      id={id}
      class="custom-underline-thick custom-font-scale-big f-as my-4 text-center"
    >
      {title}
    </h3>
  );
}
