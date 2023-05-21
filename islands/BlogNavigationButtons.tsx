//? Exports Navigation Buttons to go to the previous page and next Article
export default function BlogNavigationButtons() {
  return (
    <>
      <nav>
        <button class="navigation-button" onClick={() => history.go(-1)}>
          <svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor">
            <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
          </svg>
          Back
        </button>
      </nav>
    </>
  );
}
