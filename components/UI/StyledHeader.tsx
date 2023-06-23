//? Export a header that contains all common classes for easy styling
export function StyledHeader({ title }: { title: string }) {
  return (
    <h1 class="custom-underline-thick custom-font-scale-largest f-as my-4 text-center">
      {title}
    </h1>
  );
}
