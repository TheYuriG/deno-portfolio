//? Export a subheader that contains all common classes for easy styling and is slightly smaller than Header
export function StyledSubHeader({ title, id }: { title: string; id?: string }) {
  return (
    <h2
      id={id}
      class="custom-underline-thick custom-font-scale-large f-as my-4 text-center"
    >
      {title}
    </h2>
  );
}
