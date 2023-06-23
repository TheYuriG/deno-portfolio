//? Export a subheader that contains all common classes for easy styling and is slightly smaller than Header
export function StyledSubHeader({ title }: { title: string }) {
  return (
    <h1 class="custom-underline-thick custom-font-scale-large f-as my-4 text-center">
      {title}
    </h1>
  );
}
