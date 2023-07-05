//? Add a Pull Request icon before the text to be displayed
import { PullRequestIcon } from "../../assets/PullRequestIcon.tsx";

//? Render a Gradient Link that has
export function ViewOnGitHub({ githubLink }: { githubLink: string }) {
  return (
    <a
      class="flex space-x-2 self-start items-center mb-4 custom-underline-gradient hover:custom-tx-ac group"
      href={githubLink}
      title="Link to this file on GitHub"
      target="_self"
      rel="noopener noreferrer"
    >
      <PullRequestIcon
        iconHeight="1em"
        iconWidth="1em"
      />
      <span>
        View/Download file
      </span>
    </a>
  );
}
