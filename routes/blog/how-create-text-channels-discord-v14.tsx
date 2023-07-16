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
//? Create a greek list of contents
import { GreekList } from "../../components/UI/GreekList.tsx";
//? Display a link to view the source code on GitHub
import { ViewOnGitHub } from "../../components/misc/ViewOnGithub.tsx";
//? Import the default post footer
import { BlogPostFooter } from "../../components/blog/BlogPostFooter.tsx";
//? Add a button to scroll to the top on the bottom right corner of the page
import ScrollToTop from "../../islands/misc/ScrollToTop.tsx";
//? Import post summary
import { createTextChannelPost as postSummary } from "../../data/blog/how-create-text-channels-discord-v14.ts";
import { createVoiceChannelPost as nextPost } from "../../data/blog/how-create-voice-channels-discord-v14.ts";

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
          back={{ title: "Browse more blog posts", link: "/blog" }}
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
            This is the first (of four) parts of the Discord.JS V14 tutorial
            that I've published. You can also read the full version of this
            tutorial on{" "}
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
            Navigating through{" "}
            <GradientLink
              link="https://discordjs.guide/#before-you-begin"
              title="Guide to starting with Discord.JS"
              content="Discord.JS' guide"
              customRel="noopener noreferrer"
            />{" "}
            and{" "}
            <GradientLink
              link="https://discordjs.guide/#before-you-begin"
              title="Discord.JS documentation"
              content="Discord.JS' guide"
              customRel="noopener noreferrer"
            />{"  "}
            can be confusing if you are new to programming, as many bot creators
            will also be learning how to code to create their bot (it was my
            first project too, back in 2018!). This post aims to simplify the
            learning process to make different types of{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            from a slash command interaction. Before anything else, it's
            essential to share links to relevant resources used in this blog
            post:
          </p>
          {/* Relevant links */}
          <GreekList
            items={[
              <GradientLink
                link="https://discord.com/invite/djs"
                title="Discord.JS' Discord support server"
                content="Discord.JS' support server"
                customRel="noopener noreferrer"
              />,
              <GradientLink
                link="https://discordjs.guide/#before-you-begin"
                title="Guide to starting with Discord.JS"
                content="Discord.JS' guide (currently at v14)"
                customRel="noopener noreferrer"
              />,
              <GradientLink
                link="https://discord.js.org/#/docs/discord.js/main/general/welcome"
                title="Discord.JS documentation"
                content="Discord.JS' documentation (currently at v14)"
                customRel="noopener noreferrer"
              />,
            ]}
          />
          {/* Remember: questions */}
          <p class="my-2 text-justify">
            Remember that if you have any questions,{" "}
            <strong>Google your issue first</strong>, and, if you can't find the
            solution, join the{" "}
            <GradientLink
              link="https://discord.com/invite/djs"
              title="Discord.JS' Discord support server"
              content="support server"
              customRel="noopener noreferrer"
            />{" "}
            and ask for help in the proper v14 help channel.
          </p>
          {/* First: prior setup */}
          <p class="my-2 text-justify">
            First, this guide assumes you already have a{" "}
            <GradientLink
              link="https://discordjs.guide/preparations/setting-up-a-bot-application.html"
              title="Setting up a bot application (D.JS Guide)"
              content="bot set up"
              customRel="noopener noreferrer"
            />
            , use{" "}
            <GradientLink
              link="https://discordjs.guide/creating-your-bot/slash-commands.html"
              title="Slash commands (D.JS Guide)"
              content="slash command interactions"
              customRel="noopener noreferrer"
            />
            , you have a{" "}
            <GradientLink
              link="https://discordjs.guide/creating-your-bot/command-handling.html"
              title="Command handler (D.JS Guide)"
              content="command handler"
              customRel="noopener noreferrer"
            />{" "}
            set up and the command you are using was already deployed. You will
            need to update the code on your own if you are still using{" "}
            <span class="shl-inline">
              messageCreate
            </span>{" "}
            events instead.
          </p>
          {/* Second: Savascript */}
          <p class="my-2 text-justify">
            Second, this guide assumes you are using Javascript over Typescript.
            Feel free to use the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/general/welcome"
              title="Welcome (D.JS Docs)"
              content="documentation website"
              customRel="noopener noreferrer"
            />{" "}
            if you need assistance defining your types.
          </p>
          {/* Third: check GitHub */}
          <p class="my-2 text-justify">
            Third, all code for the topics in these lessons will be available on
            this{" "}
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/tree/master/discord_create_channels/commands"
              title="All code is available on GitHub"
              content="GitHub repository"
              customRel="noopener noreferrer"
            />
            . The code written is very verbose on purpose, as this guide aims to
            help even the newest programmer to update their bot. You will see
            values being checked for{" "}
            <span class="shl-inline">
              true
            </span>{" "}
            and then for{" "}
            <span class="shl-inline">
              false
            </span>{" "}
            right after. This is intended because I want to make the code
            examples extremely clear and easy to understand for newer
            programmers. If you choose to copy my files and you are more
            experienced in writing Javascript, feel free to update the code and
            remove those additional checks.
          </p>
          {/* Fourth: depth, contribution */}
          <p class="my-2 text-justify">
            Last, but not least, this article will briefly touch on the creation
            of certain Discord features, but will not dive deep into topics like
            "editing an existing channel" or "setting permissions for channels".
            These topics can be used to write new guides in the future if the
            interest is there.
          </p>

          <StyledSubHeader title="Creating your first Text Channel" />
          {/* First text channel: starting */}
          <p class="my-2 text-justify">
            Let's start with your basic file. We will not have{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/typedef/CommandInteractionOption"
              title="CommandInteractionOption (D.JS Docs)"
              content="options"
              customRel="noopener noreferrer"
            />{" "}
            added as I'm not assuming how configurable you want the commands to
            be, but you can (and we will) add more{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/typedef/CommandInteractionOption"
              title="CommandInteractionOption (D.JS Docs)"
              content="options"
              customRel="noopener noreferrer"
            />{" "}
            later.
          </p>

          {/* Create text channel code block */}
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
              "createnewchannel"
            </span>){" "}
            <span class="shl-cmnt">// Command name matching file name</span>
            {`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setDescription</span>(<span class="shl-str">
              'Ths command creates a text channel called "new"'
            </span>){`
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
              // It's impossible to create normal Text Channels inside DMs, so
            </span>
            {`
    `}
            <span class="shl-cmnt">
              // it's in your best interest in disabling this command through
              DMs
            </span>
            {`
    `}
            <span class="shl-cmnt">
              // as well. Threads, however, can be created in DMs, but we will
              see
            </span>
            {`
    `}
            <span class="shl-cmnt">// more about them later in this post</span>
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
            <span class="shl-kwd">try</span> &#123;{`
      `}
            <span class="shl-cmnt">
              // Now create the Channel in the server.
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
        `}name<span class="shl-oper">:</span> <span class="shl-str">"new"</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">// The name given to the Channel</span>
            {`
        `}type<span class="shl-oper">:</span>{" "}
            <span class="shl-class">ChannelType</span>
            <span class="shl-oper">.</span>
            <span class="shl-class">GuildText</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">// The type of the Channel created.</span>
            {`
        `}
            <span class="shl-cmnt">
              // Since "text" is the default Channel created, this could be
              ommitted
            </span>
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
              // of the Channels list, without belonging to any Categories (more
              on that later)
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
              "Your channel was successfully created!"
            </span>
            <span class="shl-oper">,</span>
            {`
      `}&#125;);{`
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
              "Your channel could not be created! Please check if the bot has
              the necessary permissions!"
            </span>
            <span class="shl-oper">,</span>
            {`
      `}&#125;);{`
    `}&#125;{`
  `}&#125;<span class="shl-oper">,</span>
            {`
`}&#125;;
          </div>
          {/* Code link */}
          <ViewOnGitHub githubLink="https://github.com/TheYuriG/blog_lessons/blob/master/discord_create_channels/commands/createnewchannel.js" />
          {/* Deploying and refreshing */}
          <p class="my-2 text-justify">
            <GradientLink
              link="https://discordjs.guide/creating-your-bot/command-deployment.html#command-registration"
              title="Registering commands (D.JS Guide)"
              content="Deploying this command"
              customRel="noopener noreferrer"
            />
            , refreshing your client, and triggering the command will always
            create a new{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            called "new". But that's not very versatile, is it? Let's tweak the
            code a bit so we can choose what name we want to give the{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            now.
          </p>

          <StyledSubHeader title="Creating a Text Channel with a dynamic name" />
          <p class="my-2 text-justify">
            To be able to set the name from the command itself, we need to tweak
            the code a little, add{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/typedef/CommandInteractionOption"
              title="CommandInteractionOption (D.JS Docs)"
              content="options"
              customRel="noopener noreferrer"
            />{" "}
            to the command, and then retrieve the name provided by the user in
            our file.
          </p>

          {/* Dynamic name text channel */}
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
              // Text Channel name{`
`}
            </span>
            <span class="shl-oper">.</span>
            <span class="shl-func">addStringOption</span>((option){" "}
            <span class="shl-kwd">=&gt;</span>
            {`
	`}option{`
		`}
            <span class="shl-oper">.</span>
            <span class="shl-func">setName</span>(<span class="shl-str">
              'channelname'
            </span>){" "}
            <span class="shl-cmnt">
              // option names need to always be lowercase and have no spaces
            </span>
            {`
		`}
            <span class="shl-oper">.</span>
            <span class="shl-func">setDescription</span>(<span class="shl-str">
              'Choose the name to give to the channel'
            </span>){`
		`}
            <span class="shl-oper">.</span>
            <span class="shl-func">setMinLength</span>(<span class="shl-num">
              1
            </span>){" "}
            <span class="shl-cmnt">// A Text Channel needs to be named</span>
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
            <span class="shl-kwd">const</span> chosenChannelName{" "}
            <span class="shl-oper">=</span> interaction<span class="shl-oper">
              .
            </span>options<span class="shl-oper">.</span>
            <span class="shl-func">getString</span>(<span class="shl-str">
              'channelname'
            </span>);{`

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
            <span class="shl-kwd">await</span>{" "}
            interaction<span class="shl-oper">
              .
            </span>guild<span class="shl-oper">
              .
            </span>channels<span class="shl-oper">.</span>
            <span class="shl-func">create</span>(&#123;{`
    `}name<span class="shl-oper">:</span>{" "}
            chosenChannelName<span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">
              // The name given to the Channel by the user
            </span>
            {`
    `}type<span class="shl-oper">:</span>{" "}
            <span class="shl-class">ChannelType</span>
            <span class="shl-oper">.</span>
            <span class="shl-class">GuildText</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">// The type of the Channel created.</span>
            {`
    `}
            <span class="shl-cmnt">
              // Since "text" is the default Channel created, this could be
              ommitted{`
`}
            </span>&#125;);{`

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
          <ViewOnGitHub githubLink="https://github.com/TheYuriG/blog_lessons/blob/master/discord_create_channels/commands/createchannel.js" />
          <p class="my-2 text-justify">
            A small note here:{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="Discord blog post"
              content="Discord has a visual limit of around 25
            characters"
              customRel="noopener noreferrer"
            />{" "}
            for channels on the sidebar, but they don't define an actual hard
            limit for{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            names and expect users to have common sense. If you choose to
            override the 25-character limit in{" "}
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createchannel.js#L15"
              title="view source"
              content="line 15"
              customRel="noopener noreferrer"
            />, please ensure there is another limit in place to stop users from
            creating absurdly long{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            names.{" "}
            <GradientLink
              link="https://www.collinsdictionary.com/dictionary/english/give-someone-enough-rope-to-hang-himself-or-herself"
              title="Don't allow your users to be the architect of their own destruction"
              content="Avoid giving them enough rope to hang themselves"
              customRel="noopener noreferrer"
            />.
          </p>
          <p class="my-2 text-justify">
            After saving your file, reloading your bot, and{" "}
            <GradientLink
              link="https://discordjs.guide/creating-your-bot/command-deployment.html#command-registration"
              title="Deploying commands (D.JS Guide)"
              content="redeploying your
            commands"
              customRel="noopener noreferrer"
            />, you now have a command that can quickly create a new{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/TextChannel"
              title="TextChannel (D.JS Docs)"
              content="Text Channel"
              customRel="noopener noreferrer"
            />. Neat, huh? But we are still creating stray{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channels"
              customRel="noopener noreferrer"
            />{" "}
            at the top of the{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            list. Let's change that now.
          </p>

          {/* Create channel inside category section */}
          <StyledSubHeader title="Create a Channel that is nested in the parent Category (when there is one)" />
          <p class="my-2 text-justify">
            More experienced Discord users won't be expecting the newly created
            {" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            to appear on the top of the{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            list, but instead, to be within the same{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Category"
              customRel="noopener noreferrer"
            />{" "}
            of the{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            they used the command in. We will now be tweaking our code to create
            {" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channels"
              customRel="noopener noreferrer"
            />{" "}
            with that behavior whenever the server has{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Categories"
              customRel="noopener noreferrer"
            />{" "}
            set up, but still, be able to create stray{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channels"
              customRel="noopener noreferrer"
            />{" "}
            if the command was used in a{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            that isn't nested in a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Category"
              customRel="noopener noreferrer"
            />.
          </p>

          {/* Create channel inside category code block */}
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
              // Check if this Channel where the command was used is stray{`
`}
            </span>
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
              // create another stray Channel in the server.
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
            chosenChannelName<span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">
              // The name given to the Channel by the user
            </span>
            {`
		`}type<span class="shl-oper">:</span>{" "}
            <span class="shl-class">ChannelType</span>
            <span class="shl-oper">.</span>
            <span class="shl-class">GuildText</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">// The type of the Channel created.</span>
            {`
		`}
            <span class="shl-cmnt">
              // Since "text" is the default Channel created, this could be
              ommitted
            </span>
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
              // of the Channels list, without belonging to any Categories (more
              on that later)
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
              'Your channel was successfully created!'
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
              Category{`
`}
            </span>
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
            chosenChannelName<span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">
              // The name given to the Channel by the user
            </span>
            {`
		`}type<span class="shl-oper">:</span>{" "}
            <span class="shl-class">ChannelType</span>
            <span class="shl-oper">.</span>
            <span class="shl-class">GuildText</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">// The type of the Channel created.</span>
            {`
		`}
            <span class="shl-cmnt">
              // Since "text" is the default Channel created, this could be
              ommitted
            </span>
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
		`}content<span class="shl-oper">:</span>{" "}
            <span class="shl-str">
              'Your channel was successfully created in the same category!'
            </span>
            <span class="shl-oper">,</span>
            {`
	`}&#125;);{`
	`}
            <span class="shl-kwd">return</span>;{`
`}&#125;{`

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
          <ViewOnGitHub githubLink="https://github.com/TheYuriG/blog_lessons/blob/master/discord_create_channels/commands/createchannelincategory.js" />
          <p class="my-2 text-justify self-start">
            Let's go through this bit by bit.
          </p>
          {/* line 45 quote */}
          <q
            cite="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createchannelincategory.js#L45"
            class="custom-quote italic self-start"
          >
            if (!interaction.channel.parent) &#123; (
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createchannelincategory.js#L45"
              title="view source"
              content="line 45"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify">
            First, we are checking if the{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            where the command was used doesn't have a parent, which would mean
            they are not nested within a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Category"
              customRel="noopener noreferrer"
            />. If this check succeeds, then this is a stray{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            and we can reuse our previous code to create another stray{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            . Do note that we end this if check with a{" "}
            <span class="shl-inline">return</span>{" "}
            statement. More on that is below.
          </p>
          {/* line 66 quote */}
          <q
            cite="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createchannelincategory.js#L66"
            class="custom-quote italic self-start"
          >
            if (interaction.channel.parent) &#123; (
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createchannelincategory.js#L66"
              title="view source"
              content="line 66"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify">
            Now we are checking if the{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            where the command was used does have a parent, meaning they are
            nested in a{"  "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Category"
              customRel="noopener noreferrer"
            />.
          </p>
          {/* line 69 quote */}
          <q
            cite="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createchannelincategory.js#L69"
            class="custom-quote italic self-start"
          >
            await interaction.channel.parent.children.create(&#123; (
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createchannelincategory.js#L69"
              title="view source"
              content="line 69"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify">
            Since the{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            where the command was used does have a parent, we need to create our
            {" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            inside that same{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Category"
              customRel="noopener noreferrer"
            />. For that, we need to first access the children of that{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Category"
              customRel="noopener noreferrer"
            />{" "}
            and then create our{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            within.
          </p>
          <p class="my-2 text-justify">
            Now that we are handling both cases for stray{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channels"
              customRel="noopener noreferrer"
            />{" "}
            and nested{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channels"
              customRel="noopener noreferrer"
            />, let's switch gears for a moment and talk about{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/ThreadChannel"
              title="ThreadChannel (D.JS Docs)"
              content="Thread"
              customRel="noopener noreferrer"
            />{" "}
            before we proceed to Voice Channels, Categories, and Roles.
          </p>

          {/* Create thread section */}
          <StyledSubHeader title="Create a Thread with a dynamic name" />
          <p class="my-2 text-justify">
            Starting a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/ThreadChannel"
              title="ThreadChannel (D.JS Docs)"
              content="Thread"
              customRel="noopener noreferrer"
            />{" "}
            is about as simple as creating a{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />, all you need is either a message or a{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            that will host the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/ThreadChannel"
              title="ThreadChannel (D.JS Docs)"
              content="Thread"
              customRel="noopener noreferrer"
            />. Because{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/ThreadChannel"
              title="ThreadChannel (D.JS Docs)"
              content="Threads"
              customRel="noopener noreferrer"
            />{" "}
            live inside a{" "}
            <GradientLink
              link="https://discord.com/moderation/208-channel-categories-and-names"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />, regardless of using a message as a starting point or not, you
            don't need to care for{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Categories"
              customRel="noopener noreferrer"
            />.
          </p>

          {/* Create Thread code block */}
          <div class="shl-block">
            <span class="shl-cmnt">
              // Importing SlashCommandBuilder is required for every slash
              command{`
`}
            </span>
            <span class="shl-kwd">const</span> &#123;{" "}
            <span class="shl-class">SlashCommandBuilder</span> &#125;{" "}
            <span class="shl-oper">=</span>{" "}
            <span class="shl-func">require</span>(<span class="shl-str">
              "discord.js"
            </span>);{`
`}module<span class="shl-oper">.</span>exports <span class="shl-oper">=</span>
            {" "}
            &#123;{`
  `}data<span class="shl-oper">:</span> <span class="shl-kwd">new</span>{" "}
            <span class="shl-class">SlashCommandBuilder</span>(){`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setName</span>(<span class="shl-str">
              "createthread"
            </span>){" "}
            <span class="shl-cmnt">// Command name matching file name</span>
            {`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setDescription</span>(<span class="shl-str">
              "Creates a new thread"
            </span>){`
    `}
            <span class="shl-cmnt">// Thread name</span>
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
              "threadname"
            </span>){" "}
            <span class="shl-cmnt">
              // option names need to always be lowercase and have no spaces
            </span>
            {`
        `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setDescription</span>(<span class="shl-str">
              "Choose the name to give to the thread"
            </span>){`
        `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setRequired</span>(<span class="shl-bool">
              true
            </span>){`
    `}){`
    `}
            <span class="shl-cmnt">// Thread starts from message</span>
            {`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">addBooleanOption</span>((option){" "}
            <span class="shl-kwd">=&gt;</span>
            {`
      `}option{`
        `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setName</span>(<span class="shl-str">
              "messageparent"
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
              "Choose if this thread should be use the initial message as
              parent"
            </span>
            <span class="shl-oper">,</span>
            {`
        `}){`
        `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setRequired</span>(<span class="shl-bool">
              true
            </span>){`
    `})<span class="shl-oper">,</span>
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
            <span class="shl-kwd">const</span> interactionReplied{" "}
            <span class="shl-oper">=</span> <span class="shl-kwd">await</span>
            {" "}
            interaction<span class="shl-oper">.</span>
            <span class="shl-func">reply</span>(&#123;{`
      `}content<span class="shl-oper">:</span>{" "}
            <span class="shl-str">
              "Fetched all input and working on your request!"
            </span>
            <span class="shl-oper">,</span>
            {`
      `}fetchReply<span class="shl-oper">:</span>{" "}
            <span class="shl-bool">true</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">
              // notice how we are instantiating this reply to
            </span>
            {`
      `}
            <span class="shl-cmnt">
              // a constant and passing `fetchReply: true` in the reply options
            </span>
            {`
    `}&#125;);{`

    `}
            <span class="shl-cmnt">
              // After acknowledging the interaction, we retrieve the string
              sent by the user
            </span>
            {`
    `}
            <span class="shl-kwd">const</span> chosenThreadName{" "}
            <span class="shl-oper">=</span> interaction<span class="shl-oper">
              .
            </span>options<span class="shl-oper">.</span>
            <span class="shl-func">getString</span>(<span class="shl-str">
              "threadname"
            </span>);{`
    `}
            <span class="shl-kwd">const</span> threadWithMessageAsParent{" "}
            <span class="shl-oper">=</span> interaction<span class="shl-oper">
              .
            </span>options<span class="shl-oper">.</span>
            <span class="shl-func">getBoolean</span>({`
      `}
            <span class="shl-str">"messageparent"</span>
            <span class="shl-oper">,</span>
            {`
    `});{`
    `}
            <span class="shl-cmnt">
              // Do note that the string passed to the method .getString() and
              .getBoolean()
            </span>
            {`
    `}
            <span class="shl-cmnt">
              // needs to match EXACTLY the name of the options provided (line
              10 and 17
            </span>
            {`
    `}
            <span class="shl-cmnt">
              // in this file). If it's not a perfect match, these will always
              return null
            </span>
            {`

    `}
            <span class="shl-kwd">try</span> &#123;{`
      `}
            <span class="shl-cmnt">
              // Check if the current Channel the command was used is a Thread,
            </span>
            {`
      `}
            <span class="shl-cmnt">
              // which would cause the creation of another Thread to fail.
            </span>
            {`
      `}
            <span class="shl-cmnt">
              // Threads cannot be parents of other Threads!
            </span>
            {`
      `}
            <span class="shl-kwd">if</span> (interaction<span class="shl-oper">
              .
            </span>channel<span class="shl-oper">.</span>
            <span class="shl-func">isThread</span>(){" "}
            <span class="shl-oper">==</span>{" "}
            <span class="shl-bool">true</span>) &#123;{`
        `}
            <span class="shl-cmnt">
              // If the current Channel is a Thread, return a fail message
            </span>
            {`
        `}
            <span class="shl-cmnt">// and stop the command</span>
            {`
        `}
            <span class="shl-kwd">await</span>{" "}
            interactionReplied<span class="shl-oper">.</span>
            <span class="shl-func">edit</span>(&#123;{`
          `}content<span class="shl-oper">:</span>
            {`
            `}
            <span class="shl-str">
              `It's impossible to create a thread within another thread. Try
              again inside a text channel!`
            </span>
            <span class="shl-oper">,</span>
            {`
        `}&#125;);{`
        `}
            <span class="shl-kwd">return</span>;{" "}
            <span class="shl-cmnt">
              // Return statement here to stop all further code execution on
              this file
            </span>
            {`
      `}&#125;{`

      `}
            <span class="shl-cmnt">
              // Check if the Channel where the command was used is not a Thread
            </span>
            {`
      `}
            <span class="shl-kwd">if</span> (interaction<span class="shl-oper">
              .
            </span>channel<span class="shl-oper">.</span>
            <span class="shl-func">isThread</span>(){" "}
            <span class="shl-oper">==</span>{" "}
            <span class="shl-bool">false</span>) &#123;{`
        `}
            <span class="shl-cmnt">
              // If the Channel isn't a Thread, check if the user
            </span>
            {`
        `}
            <span class="shl-cmnt">
              // requested the initial message to be the parent of the Thread
            </span>
            {`
        `}
            <span class="shl-kwd">if</span> (threadWithMessageAsParent{" "}
            <span class="shl-oper">==</span>{" "}
            <span class="shl-bool">true</span>) &#123;{`
          `}
            <span class="shl-cmnt">
              // If the initial message will be used as parent for the
            </span>
            {`
          `}
            <span class="shl-cmnt">
              // Thread, check if the message already has a Thread
            </span>
            {`
          `}
            <span class="shl-kwd">if</span>{" "}
            (interactionReplied<span class="shl-oper">.</span>hasThread{" "}
            <span class="shl-oper">==</span>{" "}
            <span class="shl-bool">true</span>) &#123;{`
            `}
            <span class="shl-cmnt">
              // If the initial message already has a Thread,
            </span>
            {`
            `}
            <span class="shl-cmnt">
              // return an error message to the user and stop the command
            </span>
            {`
            `}interactionReplied<span class="shl-oper">.</span>
            <span class="shl-func">edit</span>(&#123;{`
              `}content<span class="shl-oper">:</span>
            {`
                `}
            <span class="shl-str">
              "It was not possible to create a thread in this message because it
              already has one."
            </span>
            <span class="shl-oper">,</span>
            {`
            `}&#125;);{`
            `}
            <span class="shl-kwd">return</span>;{" "}
            <span class="shl-cmnt">
              // Return statement here to stop all further code execution on
              this file
            </span>
            {`
          `}&#125;{`

          `}
            <span class="shl-cmnt">
              // If the initial message will be used as parent for the
            </span>
            {`
          `}
            <span class="shl-cmnt">
              // Thread, check if the message already doesn't have a Thread
            </span>
            {`
          `}
            <span class="shl-kwd">if</span>{" "}
            (interactionReplied<span class="shl-oper">.</span>hasThread{" "}
            <span class="shl-oper">==</span>{" "}
            <span class="shl-bool">false</span>) &#123;{`
            `}
            <span class="shl-cmnt">
              // If the initial message doesn't have a Thread,
            </span>
            {`
            `}
            <span class="shl-cmnt">// create one.</span>
            {`
            `}
            <span class="shl-kwd">await</span>{" "}
            interactionReplied<span class="shl-oper">.</span>
            <span class="shl-func">startThread</span>(&#123;{`
              `}name<span class="shl-oper">:</span>{" "}
            chosenThreadName<span class="shl-oper">,</span>
            {`
            `}&#125;);{`
            `}
            <span class="shl-cmnt">
              // We don't return here because we want
            </span>
            {`
            `}
            <span class="shl-cmnt">// to use the success message below</span>
            {`
          `}&#125;{`
        `}&#125;{`

        `}
            <span class="shl-cmnt">
              // If the initial message isn't meant to be the parent of
            </span>
            {`
        `}
            <span class="shl-cmnt">
              // the Thread, create an orphaned Thread in this Channel
            </span>
            {`
        `}
            <span class="shl-kwd">if</span> (threadWithMessageAsParent{" "}
            <span class="shl-oper">==</span>{" "}
            <span class="shl-bool">false</span>) &#123;{`
          `}
            <span class="shl-cmnt">
              // Create the orphaned Thread in the command Channel
            </span>
            {`
          `}
            <span class="shl-kwd">await</span>{" "}
            interaction<span class="shl-oper">
              .
            </span>channel<span class="shl-oper">
              .
            </span>threads<span class="shl-oper">.</span>
            <span class="shl-func">create</span>(&#123;{`
            `}name<span class="shl-oper">:</span>{" "}
            chosenThreadName<span class="shl-oper">,</span>
            {`
          `}&#125;);{`
          `}
            <span class="shl-cmnt">
              // We don't return here because we want
            </span>
            {`
          `}
            <span class="shl-cmnt">// to use the success message below</span>
            {`
        `}&#125;{`

        `}
            <span class="shl-cmnt">
              // If we managed to create the Thread, orphaned or using the
            </span>
            {`
        `}
            <span class="shl-cmnt">
              // initial message as parent, edit the initial response
            </span>
            {`
        `}
            <span class="shl-cmnt">// with a success message</span>
            {`
        `}
            <span class="shl-kwd">await</span>{" "}
            interactionReplied<span class="shl-oper">.</span>
            <span class="shl-func">edit</span>(&#123;{`
          `}content<span class="shl-oper">:</span>{" "}
            <span class="shl-str">"Your thread was successfully created!"</span>
            <span class="shl-oper">,</span>
            {`
        `}&#125;);{`
      `}&#125;{`
    `}&#125; <span class="shl-kwd">catch</span> (error) &#123;{`
      `}
            <span class="shl-cmnt">
              // If an error occurred and we were not able to create the Thread,
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
            interactionReplied<span class="shl-oper">.</span>
            <span class="shl-func">edit</span>(&#123;{`
        `}content<span class="shl-oper">:</span>
            {`
          `}
            <span class="shl-str">
              "Your thread could not be created! Please check if the bot has the
              necessary permissions!"
            </span>
            <span class="shl-oper">,</span>
            {`
      `}&#125;);{`
      `}
            <span class="shl-kwd">return</span>;{`
    `}&#125;{`
  `}&#125;<span class="shl-oper">,</span>
            {`
`}&#125;;{`
`}
          </div>
          <ViewOnGitHub githubLink="https://github.com/TheYuriG/blog_lessons/blob/master/discord_create_channels/commands/createthread.js" />
          <p class="my-2 text-justify self-start">
            Alright, few key points with this code:
          </p>
          <GreekList
            items={[
              <p>
                We are now storing the message sent as a reply to the
                interaction in the constant{" "}
                <span class="shl-inline">
                  interactionReplied
                </span>{" "}
                (<GradientLink
                  link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createthread.js#L25"
                  title="view source"
                  content="line 25"
                  customRel="noopener noreferrer"
                />
                ). This is done so we can refer to that message later if the
                user requested to use our message as a parent to the{" "}
                <GradientLink
                  link="https://discord.js.org/#/docs/discord.js/main/class/ThreadChannel"
                  title="ThreadChannel (D.JS Docs)"
                  content="Thread"
                  customRel="noopener noreferrer"
                />{" "}
                we are going to create (<GradientLink
                  link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createthread.js#L73"
                  title="view source"
                  content="line 73"
                  customRel="noopener noreferrer"
                />
                ).
              </p>,
              <p>
                We also handle the case that the user might not want to create a
                {" "}
                <GradientLink
                  link="https://discord.js.org/#/docs/discord.js/main/class/ThreadChannel"
                  title="ThreadChannel (D.JS Docs)"
                  content="Thread"
                  customRel="noopener noreferrer"
                />{" "}
                on the message itself, so an orphaned{"  "}
                <GradientLink
                  link="https://discord.js.org/#/docs/discord.js/main/class/ThreadChannel"
                  title="ThreadChannel (D.JS Docs)"
                  content="Thread"
                  customRel="noopener noreferrer"
                />{" "}
                is created in the{" "}
                <GradientLink
                  link="https://discord.com/moderation/208-channel-categories-and-names"
                  title="GuildChannel (D.JS Docs)"
                  content="Channel"
                  customRel="noopener noreferrer"
                />{" "}
                where the command was used instead.
              </p>,
            ]}
          />

          {/* Next post: voice channels */}
          <p class="mt-4 text-justify self-start">
            Next post:{" "}
            <DottedLink
              content={nextPost.title}
              link={nextPost.link}
              customRel="next"
            />.
          </p>
          {/* Post author */}
          <BlogPostFooter />

          {/* Scroll up button */}
          <ScrollToTop />
        </article>
      </Base>
    </>
  );
}
