//? Export a header that contains all common classes for easy styling
export function StyledHeader({ title, id }: { title: string; id?: string }) {
  return (
    <h1
      id={id}
      class="custom-underline-thick custom-font-scale-largest f-as my-4 text-center"
    >
      {title}
    </h1>
  );
}
