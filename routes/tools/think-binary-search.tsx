//? Import CustomHead with appropriate metadata
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
//? Link component to pre-format links and reduce boiletplate
import { DottedLink } from "../../components/UI/DottedLink.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Think Binary Search"
        description="Exercise your brain to think how to binary search within a range. Find a given number within an array of random numbers within a limited number of attempts. Get the correct number within the fewest number of attempts possible to succeed."
        link="https://www.theyurig.com/tools/think-binary-search"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <NavigationButtons />
        <StyledHeader title="Think Binary Search" />
        <p class="my-2">
          Use binary search to find a number within an array of numbers. The
          correct number will always be the last number in the array. This game
          will try to waste your time as much as possible. Efficient usage of
          the binary tree search will be the optimal way to find the number
          within the least number of attempts. Good luck!
        </p>
        <p class="my-2">
          Mock: Purple brackets on both sides, large numbers populate the array
          with commas separating them.
        </p>
        <p class="my-2">
          Mock: Slider below the array, starts at left-most position, moves
          accordingly to the number in the input box below.
        </p>
        <p class="my-2">
          Mock: Input box to select which number you want to divide the array
          in.
        </p>
        <p class="my-2">
          Mock animation: Once a number has been selected, the unchosen side of
          numbers get greyed out.
        </p>
        <p class="my-2">
          Mock animation: Input box number turns green on valid written number,
          red on nonexistent number.
        </p>
        <p class="my-2">
          Mock animation: Binary tree gets created on every used number. Number
          below the tree displays best possible number of attempts to find the
          lowest number in green and used number of attempts. Number of attempts
          is green if matches lowest possible number, yellow if the number of
          attempts is 1 or 2 higher than best, red for any other number above
          that.
        </p>
      </Base>
    </>
  );
}
