//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../../components/base/Base.tsx";
//? Default styled headers
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
import { StyledSubHeader } from "../../components/UI/StyledSubHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
//? Link components to pre-format links and reduce boiletplate
import { GradientLink } from "../../components/UI/GradientLink.tsx";
import { DottedLink } from "../../components/UI/DottedLink.tsx";
//? Display a link to view the source code on GitHub
import { ViewOnGitHub } from "../../components/misc/ViewOnGithub.tsx";
//? Import the default post footer
import { BlogPostFooter } from "../../components/blog/BlogPostFooter.tsx";
//? Add a button to scroll to the top on the bottom right corner of the page
import ScrollToTop from "../../islands/misc/ScrollToTop.tsx";
//? Import post summary
import { createTextChannelPost as previousPost } from "../../data/blog/how-create-text-channels-discord-v14.ts";
import { createVoiceChannelPost as postSummary } from "../../data/blog/how-create-voice-channels-discord-v14.ts";
import { createCategoryPost as nextPost } from "../../data/blog/how-create-categories-discord-v14.ts";

export default function Home() {
  return (
    <>
      <CustomHead
        title={postSummary.title}
        description={postSummary.shortSummary}
        link={"https://www.theyurig.com" + postSummary.link}
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        {/* Back button */}
        <NavigationButtons
          back={{ title: previousPost.title, link: previousPost.link }}
          next={{ title: nextPost.title, link: nextPost.link }}
        />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Title header */}
          <StyledHeader title={postSummary.title} />
          {/* Post creation date */}
          <p class="text-sm mb-2 w-full text-center">
            {new Date(postSummary.date).toLocaleString()}
          </p>
          {/* Medium alternative */}
          <p class="mb-4 self-start text-xs">
            This is the second (of four) parts of the Discord.JS V14 tutorial
            that I've published. You can read the{" "}
            <DottedLink
              link={previousPost.link}
              title={previousPost.title}
              content="first part"
              customRel="prev"
            />{" "}
            here. You can also read the full version of this tutorial on{" "}
            <GradientLink
              link="https://medium.com/@yuri03042/how-to-create-categories-text-channels-threads-voice-channels-and-roles-in-discord-js-v14-1f2664546433"
              title="Medium version alternative"
              content="Medium"
              customRel="noopener noreferrer"
            />{" "}
            if you prefer.
          </p>
          {/* Introduction */}
          <p class="my-2 text-justify">
            Creating a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel"
              title="VoiceChannel (D.JS Docs)"
              content="Voice Channel"
              customRel="noopener noreferrer"
            />{" "}
            isn't that much different than creating a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/TextChannel"
              title="TextChannel (D.JS Docs)"
              content="Text Channel"
              customRel="noopener noreferrer"
            />.{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel"
              title="VoiceChannel (D.JS Docs)"
              content="Voice Channels"
              customRel="noopener noreferrer"
            />{" "}
            won't get their names normalized to lowercase and have their spaces
            replaced by dashes, so whatever you write will be what will be used.
            Because of how similar{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel"
              title="VoiceChannel (D.JS Docs)"
              content="Voice"
              customRel="noopener noreferrer"
            />{" "}
            and{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/TextChannel"
              title="TextChannel (D.JS Docs)"
              content="Text Channels"
              customRel="noopener noreferrer"
            />{" "}
            are, we can reuse most of the code we used for the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/TextChannel"
              title="TextChannel (D.JS Docs)"
              content="Text Channel"
              customRel="noopener noreferrer"
            />{" "}
            and make small adjustments.
          </p>

          {/* Creating Voice Channel code block */}
          <div class="shl-block">
            <span class="shl-cmnt">
              // Importing SlashCommandBuilder is required for every slash
              command{`
`}
            </span>
            <span class="shl-cmnt">
              // We import PermissionFlagsBits so we can restrict this command
              usage{`
`}
            </span>
            <span class="shl-cmnt">
              // We also import ChannelType to define what kind of Channel we
              are creating{`
`}
            </span>
            <span class="shl-kwd">const</span> &#123;{" "}
            <span class="shl-class">SlashCommandBuilder</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-class">PermissionFlagsBits</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-class">ChannelType</span> &#125;{" "}
            <span class="shl-oper">=</span>{" "}
            <span class="shl-func">require</span>({`
  `}
            <span class="shl-str">"discord.js"</span>
            <span class="shl-oper">,</span>
            {`
`});{`
`}module<span class="shl-oper">.</span>exports <span class="shl-oper">=</span>
            {" "}
            &#123;{`
  `}data<span class="shl-oper">:</span> <span class="shl-kwd">new</span>{" "}
            <span class="shl-class">SlashCommandBuilder</span>(){`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setName</span>(<span class="shl-str">
              "createvoicechannel"
            </span>){" "}
            <span class="shl-cmnt">// Command name matching file name</span>
            {`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setDescription</span>(<span class="shl-str">
              "Creates a new voice channel"
            </span>){`
    `}
            <span class="shl-cmnt">// Voice Channel name</span>
            {`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">addStringOption</span>((option){" "}
            <span class="shl-kwd">=&gt;</span>
            {`
      `}option{`
        `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setName</span>(<span class="shl-str">
              "voicechannelname"
            </span>){" "}
            <span class="shl-cmnt">
              // option names need to always be lowercase and have no spaces
            </span>
            {`
        `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setDescription</span>(<span class="shl-str">
              "Choose the name to give to the voice channel"
            </span>){`
        `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setMinLength</span>(<span class="shl-num">
              1
            </span>){" "}
            <span class="shl-cmnt">// A Voice Channel needs to be named</span>
            {`
        `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setMaxLength</span>(<span class="shl-num">
              25
            </span>){" "}
            <span class="shl-cmnt">
              // Discord will cut-off names past the 25 characters,
            </span>
            {`
        `}
            <span class="shl-cmnt">
              // so that's a good hard limit to set. You can manually increase
              this if you wish
            </span>
            {`
        `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setRequired</span>(<span class="shl-bool">
              true
            </span>){`
    `}){`
    `}
            <span class="shl-cmnt">
              // You will usually only want users that can create new Channels
              to
            </span>
            {`
    `}
            <span class="shl-cmnt">
              // be able to use this command and this is what this line does.
            </span>
            {`
    `}
            <span class="shl-cmnt">
              // Feel free to remove it if you want to allow any users to
            </span>
            {`
    `}
            <span class="shl-cmnt">// create new Channels</span>
            {`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">
              setDefaultMemberPermissions
            </span>(<span class="shl-class">PermissionFlagsBits</span>
            <span class="shl-oper">.</span>
            <span class="shl-class">ManageChannels</span>){`
    `}
            <span class="shl-cmnt">
              // It's impossible to create Voice Channels inside DMs, so
            </span>
            {`
    `}
            <span class="shl-cmnt">
              // it's in your best interest in disabling this command through
              DMs
            </span>
            {`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">
              setDMPermission
            </span>(<span class="shl-bool">false</span>)<span class="shl-oper">
              ,
            </span>
            {`
  `}
            <span class="shl-kwd">async</span>{" "}
            <span class="shl-func">execute</span>(interaction) &#123;{`
    `}
            <span class="shl-cmnt">
              // Before executing any other code, we need to acknowledge the
              interaction.
            </span>
            {`
    `}
            <span class="shl-cmnt">
              // Discord only gives us 3 seconds to acknowledge an interaction
              before
            </span>
            {`
    `}
            <span class="shl-cmnt">
              // the interaction gets voided and can't be used anymore.
            </span>
            {`
    `}
            <span class="shl-kwd">await</span>{" "}
            interaction<span class="shl-oper">.</span>
            <span class="shl-func">reply</span>(&#123;{`
      `}content<span class="shl-oper">:</span>{" "}
            <span class="shl-str">
              "Fetched all input and working on your request!"
            </span>
            <span class="shl-oper">,</span>
            {`
    `}&#125;);{`

    `}
            <span class="shl-cmnt">
              // After acknowledging the interaction, we retrieve the string
              sent by the user
            </span>
            {`
    `}
            <span class="shl-kwd">const</span> chosenVoiceChannelName{" "}
            <span class="shl-oper">=</span> interaction<span class="shl-oper">
              .
            </span>options<span class="shl-oper">.</span>
            <span class="shl-func">getString</span>({`
      `}
            <span class="shl-str">"voicechannelname"</span>
            <span class="shl-oper">,</span>
            {`
    `});{`
    `}
            <span class="shl-cmnt">
              // Do note that the string passed to the method .getString() needs
              to
            </span>
            {`
    `}
            <span class="shl-cmnt">
              // match EXACTLY the name of the option provided (line 12 in this
              file).
            </span>
            {`
    `}
            <span class="shl-cmnt">
              // If it's not a perfect match, this will always return null
            </span>
            {`

    `}
            <span class="shl-kwd">try</span> &#123;{`
      `}
            <span class="shl-cmnt">
              // Check if this Channel where the command was used is stray
            </span>
            {`
      `}
            <span class="shl-kwd">if</span>{" "}
            (<span class="shl-oper">!</span>interaction<span class="shl-oper">
              .
            </span>channel<span class="shl-oper">.</span>parent) &#123;{`
        `}
            <span class="shl-cmnt">
              // If the Channel where the command was used is stray,
            </span>
            {`
        `}
            <span class="shl-cmnt">
              // create another stray Voice Channel in the server.
            </span>
            {`
        `}
            <span class="shl-kwd">await</span>{" "}
            interaction<span class="shl-oper">
              .
            </span>guild<span class="shl-oper">
              .
            </span>channels<span class="shl-oper">.</span>
            <span class="shl-func">create</span>(&#123;{`
          `}name<span class="shl-oper">:</span>{" "}
            chosenVoiceChannelName<span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">
              // The name given to the Channel by the user
            </span>
            {`
          `}type<span class="shl-oper">:</span>{" "}
            <span class="shl-class">ChannelType</span>
            <span class="shl-oper">.</span>
            <span class="shl-class">GuildVoice</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">// The type of the Channel created.</span>
            {`
        `}&#125;);{`
        `}
            <span class="shl-cmnt">
              // Notice how we are creating a Channel in the list of Channels
            </span>
            {`
        `}
            <span class="shl-cmnt">
              // of the server. This will cause the Channel to spawn at the top
            </span>
            {`
        `}
            <span class="shl-cmnt">
              // of the Channels list, without belonging to any Categories
            </span>
            {`

        `}
            <span class="shl-cmnt">
              // If we managed to create the Channel, edit the initial response
              with
            </span>
            {`
        `}
            <span class="shl-cmnt">// a success message</span>
            {`
        `}
            <span class="shl-kwd">await</span>{" "}
            interaction<span class="shl-oper">.</span>
            <span class="shl-func">editReply</span>(&#123;{`
          `}content<span class="shl-oper">:</span>{" "}
            <span class="shl-str">
              "Your voice channel was successfully created!"
            </span>
            <span class="shl-oper">,</span>
            {`
        `}&#125;);{`
        `}
            <span class="shl-kwd">return</span>;{`
      `}&#125;{`

      `}
            <span class="shl-cmnt">
              // Check if this Channel where the command was used belongs to a
              Category
            </span>
            {`
      `}
            <span class="shl-kwd">if</span> (interaction<span class="shl-oper">
              .
            </span>channel<span class="shl-oper">.</span>parent) &#123;{`
        `}
            <span class="shl-cmnt">
              // If the Channel where the command belongs to a Category,
            </span>
            {`
        `}
            <span class="shl-cmnt">
              // create another Channel in the same Category.
            </span>
            {`
        `}
            <span class="shl-kwd">await</span>{" "}
            interaction<span class="shl-oper">
              .
            </span>channel<span class="shl-oper">
              .
            </span>parent<span class="shl-oper">
              .
            </span>children<span class="shl-oper">.</span>
            <span class="shl-func">create</span>(&#123;{`
          `}name<span class="shl-oper">:</span>{" "}
            chosenVoiceChannelName<span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">
              // The name given to the Channel by the user
            </span>
            {`
          `}type<span class="shl-oper">:</span>{" "}
            <span class="shl-class">ChannelType</span>
            <span class="shl-oper">.</span>
            <span class="shl-class">GuildVoice</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">// The type of the Channel created.</span>
            {`
        `}&#125;);{`

        `}
            <span class="shl-cmnt">
              // If we managed to create the Channel, edit the initial response
              with
            </span>
            {`
        `}
            <span class="shl-cmnt">// a success message</span>
            {`
        `}
            <span class="shl-kwd">await</span>{" "}
            interaction<span class="shl-oper">.</span>
            <span class="shl-func">editReply</span>(&#123;{`
          `}content<span class="shl-oper">:</span>
            {`
            `}
            <span class="shl-str">
              "Your voice channel was successfully created in the same
              category!"
            </span>
            <span class="shl-oper">,</span>
            {`
        `}&#125;);{`
        `}
            <span class="shl-kwd">return</span>;{`
      `}&#125;{`
    `}&#125; <span class="shl-kwd">catch</span> (error) &#123;{`
      `}
            <span class="shl-cmnt">
              // If an error occurred and we were not able to create the Channel
            </span>
            {`
      `}
            <span class="shl-cmnt">
              // the bot is most likely received the "Missing Permissions"
              error.
            </span>
            {`
      `}
            <span class="shl-cmnt">// Log the error to the console</span>
            {`
      `}console<span class="shl-oper">.</span>
            <span class="shl-func">log</span>(error);{`
      `}
            <span class="shl-cmnt">
              // Also inform the user that an error occurred and give them
              feedback
            </span>
            {`
      `}
            <span class="shl-cmnt">
              // about how to avoid this error if they want to try again
            </span>
            {`
      `}
            <span class="shl-kwd">await</span>{" "}
            interaction<span class="shl-oper">.</span>
            <span class="shl-func">editReply</span>(&#123;{`
        `}content<span class="shl-oper">:</span>
            {`
          `}
            <span class="shl-str">
              "Your voice channel could not be created! Please check if the bot
              has the necessary permissions!"
            </span>
            <span class="shl-oper">,</span>
            {`
      `}&#125;);{`
    `}&#125;{`
  `}&#125;<span class="shl-oper">,</span>
            {`
`}&#125;;{`
`}
          </div>
          {/* Code link */}
          <ViewOnGitHub githubLink="https://github.com/TheYuriG/blog_lessons/blob/master/discord_create_channels/commands/createvoicechannel.js" />
          <p class="my-2 text-justify">
            A few tweaks were made, variables were renamed, comments were
            updated, and error messages were updated, but the process isn't much
            different from creating a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/TextChannel"
              title="TextChannel (D.JS Docs)"
              content="Text Channel"
              customRel="noopener noreferrer"
            />. One of the few features that{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel"
              title="VoiceChannel (D.JS Docs)"
              content="Voice Channels"
              customRel="noopener noreferrer"
            />{" "}
            have over{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/TextChannel"
              title="TextChannel (D.JS Docs)"
              content="Text Channels"
              customRel="noopener noreferrer"
            />{" "}
            is the ability to limit the number of users it can hold at once.
            Let's take a look at how to do that now.
          </p>

          {/* Creating Voice Channel with member limit */}
          <StyledSubHeader title="Create a Voice Channel that has a maximum number of concurrent users" />
          <p class="my-2 text-justify">
            One of the exclusive features that{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel"
              title="VoiceChannel (D.JS Docs)"
              content="Voice Channels"
              customRel="noopener noreferrer"
            />{" "}
            have over other Channels is the ability to{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel?scrollTo=userLimit"
              title="userLimit property (D.JS Docs)"
              content="limit"
              customRel="noopener noreferrer"
            />{" "}
            the number of users that can use it at the same time. To set this
            number, all you gotta do is pass in an integer for the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel?scrollTo=userLimit"
              title="userLimit property (D.JS Docs)"
              content="userLimit"
              customRel="noopener noreferrer"
            />{" "}
            key when creating a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel"
              title="VoiceChannel (D.JS Docs)"
              content="Voice Channel"
              customRel="noopener noreferrer"
            />.
          </p>
          {/* Voice Channel with member limit code block  */}
          <div class="shl-block">
            <span class="shl-cmnt">
              // ...{`
`}
            </span>
            <span class="shl-cmnt">
              // initial code unchanged{`
`}
            </span>
            <span class="shl-cmnt">// ...</span>
            {`

  `}
            <span class="shl-cmnt">
              // Voice Channel limit of participants{`
`}
            </span>
            <span class="shl-oper">.</span>
            <span class="shl-func">addIntegerOption</span>({`
    `}(option) <span class="shl-kwd">=&gt;</span>
            {`
        `}option{`
            `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setName</span>(<span class="shl-str">
              'voiceuserlimit'
            </span>){" "}
            <span class="shl-cmnt">
              // option names need to always be lowercase and have no spaces
            </span>
            {`
            `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setDescription</span>({`
                `}
            <span class="shl-str">
              'Select the maximum number of concurrent users for the voice
              channel'
            </span>
            {`
            `}){`
            `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setMinValue</span>(<span class="shl-num">
              2
            </span>){" "}
            <span class="shl-cmnt">
              // A voice Channel with less than 2 users will be useless
            </span>
            {`
            `}
            <span class="shl-cmnt">
              // for nearly every case, so we will disable users from creating
              voice
            </span>
            {`
            `}
            <span class="shl-cmnt">
              // Channels that can take less than that
            </span>
            {`
            `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setRequired</span>(<span class="shl-bool">
              false
            </span>){`
`}){`

`}
            <span class="shl-cmnt">
              // ...{`
`}
            </span>
            <span class="shl-cmnt">
              // code in between unchanged{`
`}
            </span>
            <span class="shl-cmnt">// ...</span>
            {`

    `}
            <span class="shl-cmnt">
              // After acknowledging the interaction, we retrieve the input sent
              by the user
            </span>
            {`
    `}
            <span class="shl-kwd">const</span> chosenVoiceChannelName{" "}
            <span class="shl-oper">=</span> interaction<span class="shl-oper">
              .
            </span>options<span class="shl-oper">.</span>
            <span class="shl-func">getString</span>(<span class="shl-str">
              'voicechannelname'
            </span>);{`
    `}
            <span class="shl-kwd">const</span> voiceChannelUserLimit{" "}
            <span class="shl-oper">=</span> interaction<span class="shl-oper">
              .
            </span>options<span class="shl-oper">.</span>
            <span class="shl-func">getInteger</span>(<span class="shl-str">
              'voiceuserlimit'
            </span>) <span class="shl-oper">??</span>{" "}
            <span class="shl-num">undefined</span>;{`

`}
            <span class="shl-cmnt">
              // ...{`
`}
            </span>
            <span class="shl-cmnt">
              // code in between unchanged{`
`}
            </span>
            <span class="shl-cmnt">// ...</span>
            {`

    `}name<span class="shl-oper">:</span>{" "}
            chosenVoiceChannelName<span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">
              // The name given to the Channel by the user
            </span>
            {`
    `}type<span class="shl-oper">:</span>{" "}
            <span class="shl-class">ChannelType</span>
            <span class="shl-oper">.</span>
            <span class="shl-class">GuildVoice</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">// The type of the Channel created.</span>
            {`
    `}userLimit<span class="shl-oper">:</span>{" "}
            voiceChannelUserLimit<span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">// The max number of concurrent users</span>
            {`

`}
            <span class="shl-cmnt">
              // ...{`
`}
            </span>
            <span class="shl-cmnt">
              // rest of the code unchanged{`
`}
            </span>
            <span class="shl-cmnt">// ...</span>
          </div>
          {/* Code link */}
          <ViewOnGitHub githubLink="https://github.com/TheYuriG/blog_lessons/blob/master/discord_create_channels/commands/createvoicewithuserlimit.js" />
          {/* line 30 quote */}
          <p class="my-2 text-justify">
            There are a few key points that need to be talked about. The first
            of them is that we are not requiring the limit to be set
            (<GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createvoicewithuserlimit.js#L30"
              title="view source"
              content="line 30"
              customRel="noopener noreferrer"
            />). This allows the user to set a limit if they want but also
            allows the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel"
              title="VoiceChannel (D.JS Docs)"
              content="Voice Channel"
              customRel="noopener noreferrer"
            />{" "}
            to be unlimited if they don't.
          </p>
          <q class="custom-quote italic self-start">
            const voiceChannelUserLimit =
            interaction.options.getInteger('voiceuserlimit') ?? undefined;
          </q>
          {/* line 49 quote */}
          <p class="my-2 text-justify">
            To avoid this causing an error when creating the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel"
              title="VoiceChannel (D.JS Docs)"
              content="Voice Channel"
              customRel="noopener noreferrer"
            />, we check (<GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createvoicewithuserlimit.js#L49"
              title="view source"
              content="line 49"
              customRel="noopener noreferrer"
            />) if a value was passed and, if{" "}
            <span class="shl-inline">
              .getInteger()
            </span>{" "}
            returns us{" "}
            <span class="shl-inline">
              null
            </span>
            , then then the{" "}
            <GradientLink
              link="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing"
              title="Nullish Coalescence (MDN Docs)"
              content="Javascript Nullish Coalescence"
              customRel="noopener noreferrer"
            />{" "}
            operator <span class="shl-inline">??</span> will set the value to
            {" "}
            <span class="shl-inline">
              undefined
            </span>
            .
          </p>
          <q class="custom-quote italic self-start">
            userLimit: voiceChannelUserLimit
          </q>
          <p class="my-2 text-justify">
            Passing{" "}
            <span class="shl-inline">
              undefined
            </span>{" "}
            to the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel?scrollTo=userLimit"
              title="userLimit property (D.JS Docs)"
              content="userLimit"
              customRel="noopener noreferrer"
            />{" "}
            key when creating a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel"
              title="VoiceChannel (D.JS Docs)"
              content="Voice Channel"
              customRel="noopener noreferrer"
            />{" "}
            will make it unlimited, while any integer would be used as the
            actual limit.
          </p>

          {/* Next post: Categories */}
          <p class="mt-4 text-justify self-start">
            Next post:{" "}
            <DottedLink
              link={nextPost.link}
              title={nextPost.title}
              content={nextPost.title}
            />
          </p>
          {/* Post author */}
          <BlogPostFooter />
        </article>

        {/* Scroll up button */}
        <ScrollToTop />
      </Base>
    </>
  );
}
