//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../../components/base/Base.tsx";
//? Default styled headers
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
import { StyledSubHeader } from "../../components/UI/StyledSubHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
//? A HTML Link component to pre-format links and reduce boiletplate
import { GradientLink } from "../../components/UI/GradientLink.tsx";
//? Import post summary
import { createCategoryPost as previousPost } from "../../data/blog/how-create-categories-discord-v14.ts";
import { createRolesPost as postSummary } from "../../data/blog/how-create-roles-discord-v14.ts";

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
            This is the fourth and last part of the Discord.JS V14 tutorial that
            I've published. You can read the{" "}
            <GradientLink
              link={previousPost.link}
              title={previousPost.title}
              content="third part"
              customRel="prev"
              newTab={false}
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
            Creating{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Roles"
              customRel="noopener noreferrer"
            />, like{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/ThreadChannel"
              title="ThreadChannel (D.JS Docs)"
              content="Threads"
              customRel="noopener noreferrer"
            />, does not care about the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/BaseChannel"
              title="BaseChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            or its{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Categories"
              customRel="noopener noreferrer"
            />.{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Roles"
              customRel="noopener noreferrer"
            />{" "}
            also have many interesting properties that we can modify, like
            color. Let's tweak a little the code we used for creating a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/BaseChannel"
              title="BaseChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />.
          </p>

          {/* Create dynamic name role code block */}
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
            <span class="shl-kwd">const</span> &#123;{" "}
            <span class="shl-class">SlashCommandBuilder</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-class">PermissionFlagsBits</span> &#125;{" "}
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
              "createrole"
            </span>){" "}
            <span class="shl-cmnt">// Command name matching file name</span>
            {`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setDescription</span>(<span class="shl-str">
              "Creates a new role"
            </span>){`
    `}
            <span class="shl-cmnt">// Role name</span>
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
              "rolename"
            </span>){" "}
            <span class="shl-cmnt">
              // option names need to always be lowercase and have no spaces
            </span>
            {`
        `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setDescription</span>(<span class="shl-str">
              "Choose the name to give to the role"
            </span>){`
        `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setMinLength</span>(<span class="shl-num">
              1
            </span>) <span class="shl-cmnt">// A role needs to be named</span>
            {`
        `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setMaxLength</span>(<span class="shl-num">
              100
            </span>){" "}
            <span class="shl-cmnt">
              // Hard limit set by Discord for role names
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
              // It's impossible to create roles inside DMs, so
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
            <span class="shl-kwd">const</span> chosenRoleName{" "}
            <span class="shl-oper">=</span> interaction<span class="shl-oper">
              .
            </span>options<span class="shl-oper">.</span>
            <span class="shl-func">getString</span>(<span class="shl-str">
              "rolename"
            </span>);{`
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
            <span class="shl-cmnt">// Create the role</span>
            {`
      `}
            <span class="shl-kwd">await</span>{" "}
            interaction<span class="shl-oper">
              .
            </span>guild<span class="shl-oper">
              .
            </span>roles<span class="shl-oper">.</span>
            <span class="shl-func">create</span>(&#123;{`
        `}name<span class="shl-oper">:</span>{" "}
            chosenRoleName<span class="shl-oper">,</span>
            {`
      `}&#125;);{`

      `}
            <span class="shl-cmnt">
              // Inform the user about the role creation being successful
            </span>
            {`
      `}
            <span class="shl-kwd">await</span>{" "}
            interaction<span class="shl-oper">.</span>
            <span class="shl-func">editReply</span>(&#123;{`
        `}content<span class="shl-oper">:</span>{" "}
            <span class="shl-str">"Your role was created successfully!"</span>
            <span class="shl-oper">,</span>
            {`
      `}&#125;);{`
      `}
            <span class="shl-kwd">return</span>;{`
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
              "Your role could not be created! Please check if the bot has the
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
          {/* Code link */}
          <p class="self-start mb-4">
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/master/discord_create_channels/commands/createrole.js"
              title="Link to this file on GitHub"
              content="View/Download file"
              customRel="noopener noreferrer"
            />
          </p>
          {/* line 65 quote */}
          <q class="custom-quote italic self-start">
            await interaction.guild.roles.create(&#123;
          </q>
          <p class="my-2 text-justify">
            To create a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />, you need to access the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/RoleManager"
              title="RoleManager (D.JS Docs)"
              content="roles"
              customRel="noopener noreferrer"
            />{" "}
            of a server and then create a new{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            there. Creating a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            can take some additional{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/typedef/RoleCreateOptions"
              title="RoleCreateOptions (D.JS Docs)"
              content="configuration"
              customRel="noopener noreferrer"
            />, but all settings are optional (a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            with no configuration will be called "new role" and have no color).
            As in previous lessons, we create a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            that has a name provided by the user and, after that{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            is created, we edit the initial message with a success message
            (<GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createrole.js#L46"
              title="view source"
              content="line 46"
              customRel="noopener noreferrer"
            />).
          </p>
          <p class="my-2 text-justify">
            Now that we know how to create a role, how about we learn how to
            create a colored role?
          </p>

          <StyledSubHeader title="Creating a colored role" />
          <p class="my-2 text-justify">
            Discord{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Roles"
              customRel="noopener noreferrer"
            />{" "}
            can have any color you want. Discord even provides us with some
            colors they have standardized. We will both offer to use Discord's
            standard color selection, while also allowing users to customize
            exactly the color they want for the role, using hex codes for RGB
            colors.
          </p>

          {/* Creating colored role code block */}
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
              // Role color options using Discord's defaults{`
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
              'rolecolor'
            </span>){`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setDescription</span>(<span class="shl-str">
              'Select a color for your role (using Discord defaults)'
            </span>){`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">addChoices</span>({`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'Aqua'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0x1abc9c'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'Green'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0x57f287'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'Blue'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0x3498db'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'Yellow'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0xfee75c'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'LuminousVividPink'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0xe91e63'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'Fuchsia'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0xeb459e'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'Gold'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0xf1c40f'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'Orange'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0xe67e22'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'Red'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0xed4245'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'Grey'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0x95a5a6'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'Navy'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0x34495e'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'DarkAqua'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0x11806a'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'DarkGreen'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0x1f8b4c'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'DarkBlue'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0x206694'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'DarkPurple'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0x71368a'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'DarkVividPink'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0xad1457'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'DarkGold'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0xc27c0e'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'DarkOrange'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0xa84300'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'DarkRed'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0x992d22'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'DarkerGrey'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0x7f8c8d'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'LightGrey'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0xbcc0c0'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'DarkNavy'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0x2c3e50'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'Blurple'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0x5865f2'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'Greyple'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0x99aab5'</span>{" "}
            &#125;<span class="shl-oper">,</span>
            {`
      `}&#123; name<span class="shl-oper">:</span>{" "}
            <span class="shl-str">'DarkButNotBlack'</span>
            <span class="shl-oper">,</span> value<span class="shl-oper">:</span>
            {" "}
            <span class="shl-str">'0x2c2f33'</span> &#125;{`
    `}){`
  `}){`
`}
            <span class="shl-cmnt">
              // Role color options using a hex code or integer{`
`}
            </span>
            <span class="shl-cmnt">
              // relevant link for hex codes:
              https://www.rapidtables.com/web/color/RGB_Color.html{`
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
              'customrolecolor'
            </span>){`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setDescription</span>({`
      `}
            <span class="shl-str">
              'Select a custom color for your role (hex code only. overrides
              "rolecolor")'
            </span>
            {`
    `}){`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setMinLength</span>(<span class="shl-num">
              8
            </span>){`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setMaxLength</span>(<span class="shl-num">
              8
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
            <span class="shl-kwd">const</span> chosenRoleName{" "}
            <span class="shl-oper">=</span> interaction<span class="shl-oper">
              .
            </span>options<span class="shl-oper">.</span>
            <span class="shl-func">getString</span>(<span class="shl-str">
              'rolename'
            </span>);{`
`}
            <span class="shl-kwd">const</span> chosenRoleColor{" "}
            <span class="shl-oper">=</span>
            {`
  `}interaction<span class="shl-oper">.</span>options<span class="shl-oper">
              .
            </span>
            <span class="shl-func">getString</span>(<span class="shl-str">
              'customrolecolor'
            </span>) <span class="shl-oper">??</span>
            {`
  `}interaction<span class="shl-oper">.</span>options<span class="shl-oper">
              .
            </span>
            <span class="shl-func">getString</span>(<span class="shl-str">
              'rolecolor'
            </span>) <span class="shl-oper">??</span>
            {`
  `}
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
            chosenRoleName<span class="shl-oper">,</span>
            {`
`}color<span class="shl-oper">:</span>{" "}
            chosenRoleColor<span class="shl-oper">,</span>
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
          <p class="self-start mb-4">
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/master/discord_create_channels/commands/createcoloredrole.js"
              title="Link to this file on GitHub"
              content="View/Download file"
              customRel="noopener noreferrer"
            />
          </p>

          <p class="my-2 text-justify self-start">
            Once again, let's go through each bit of code individually.
          </p>
          {/* line 20 quote */}
          <q class="custom-quote italic self-start">
            .setName('rolecolor') (<GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createcoloredrole.js#L20"
              title="view source"
              content="line 20"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify">
            The first of the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/typedef/RoleCreateOptions"
              title="RoleCreateOptions (D.JS Docs)"
              content="options"
              customRel="noopener noreferrer"
            />{" "}
            we added is <span class="shl-inline">rolecolor</span>. This{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/typedef/RoleCreateOptions"
              title="RoleCreateOptions (D.JS Docs)"
              content="option"
              customRel="noopener noreferrer"
            />{" "}
            has 25 choices with colors that were standardized by Discord on
            their{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role?scrollTo=color"
              title="color property (D.JS Docs)"
              content="role color"
              customRel="noopener noreferrer"
            />{" "}
            selection and their brand color palette. This is the easiest way for
            users to pick a color without needing to find a specific hex code.
          </p>
          {/* line 54 quote */}
          <q class="custom-quote italic self-start">
            .setName('customrolecolor') (<GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createcoloredrole.js#L54"
              title="view source"
              content="line 54"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify">
            The second{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/typedef/RoleCreateOptions"
              title="RoleCreateOptions (D.JS Docs)"
              content="option"
              customRel="noopener noreferrer"
            />{" "}
            we added is{" "}
            <span class="shl-inline">customrolecolor</span>. This allows users
            to create a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            with ANY color they want, by using a hex code. There are various
            websites that can be used to get a hex code from a color. The one
            I've been using for years is{" "}
            <GradientLink
              link="https://www.rapidtables.com/web/color/RGB_Color.html"
              title="RapidTables, a website to pick color codes (Website)"
              content="RapidTables"
              customRel="noopener noreferrer"
            />.
          </p>
          {/* lines 58 and 59 quote */}
          <q class="custom-quote italic self-start">
            .setMinLength(8) .setMaxLength(8) (lines{" "}
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createcoloredrole.js#L58"
              title="view source"
              content="58"
              customRel="noopener noreferrer"
            />{" "}
            and{" "}
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createcoloredrole.js#L59"
              title="view source"
              content="59"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify">
            You might have noticed that we have those strict limiters in place.
            This is because every RGB hex code has exactly 8 digits, the first
            two being <span class="shl-inline">0x</span>{" "}
            which identifies that the following digits are a hexadecimal number.
            The next two digits are responsible for the Red, the 5th and 6th
            digits are responsible for the Green and the last 2 digits are
            responsible for the Blue.
          </p>
          {/* lines 79 to 82 quote */}
          <q class="custom-quote italic self-start">
            const chosenRoleColor =
            interaction.options.getString('customrolecolor') ??
            interaction.options.getString('rolecolor') ?? undefined; (lines{" "}
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createcoloredrole.js#L79"
              title="view source"
              content="79"
              customRel="noopener noreferrer"
            />{" "}
            to{" "}
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createcoloredrole.js#L82"
              title="view source"
              content="82"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify">
            If you noticed that we mention that{" "}
            <span class="shl-inline">customrolecolor</span> overrides{" "}
            <span class="shl-inline">rolecolor</span> on{" "}
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createcoloredrole.js#L56"
              title="view source"
              content="line 56"
              customRel="noopener noreferrer"
            />, this is the reason why. Since a single{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            can't have two colors, we need to prioritize one of the inputs over
            the other and since it takes more effort to find a custom RGB hex
            code, we will assume that the user would rather use that color
            instead, in case they picked a{" "}
            <span class="shl-inline">rolecolor</span>{" "}
            by mistake (or intentionally, since some users enjoy trying to break
            things just because they can). Here we use the{" "}
            <GradientLink
              link="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing"
              title="Nullish Coalescence (MDN Docs)"
              content="Javascript Nullish Coalescence"
              customRel="noopener noreferrer"
            />{" "}
            operator <span class="shl-inline">??</span>{" "}
            to check if the user provided any custom value. If they didn't, then
            we check if they picked one of Discord's standard colors. If they
            also didn't, then we set the color as{" "}
            <span class="shl-inline">undefined</span>, so a colorless{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            can be created as the default fallback.
          </p>
          {/* line 91 quote */}
          <q class="custom-quote italic self-start">
            color: chosenRoleColor, (<GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createcoloredrole.js#L91"
              title="view source"
              content="line 91"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify">
            Finally, we use either the{" "}
            <span class="shl-inline">customrolecolor</span> or the{" "}
            <span class="shl-inline">rolecolor</span> or{" "}
            <span class="shl-inline">undefined</span>{" "}
            to set the color (or no color) for the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            we will be creating.
          </p>
          <p class="my-2 text-justify">
            Now we have a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            and it can have a color, but what's the use of a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            that no one possesses? Let's grant this{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            to some{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildMember"
              title="GuildMember (D.JS Docs)"
              content="Members"
              customRel="noopener noreferrer"
            />.
          </p>

          <StyledSubHeader title="Creating a role and then granting it to members" />
          <p class="my-2 text-justify">
            Granting a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            to a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildMemberManager?scrollTo=addRole"
              title="GuildMemberManager (D.JS Docs)"
              content="Member"
              customRel="noopener noreferrer"
            />{" "}
            is very simple, you just need to access their{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Roles"
              customRel="noopener noreferrer"
            />{" "}
            and then add the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />. Let's take a look at what that code would look like.
          </p>

          {/* Granting role code block */}
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
              // Member that should get the role{`
`}
            </span>a<span class="shl-oper">.</span>
            <span class="shl-func">addMemberOption</span>((option){" "}
            <span class="shl-kwd">=&gt;</span>
            {`
  `}option{`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setName</span>(<span class="shl-str">
              "membertoreceiverole"
            </span>){`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setDescription</span>(<span class="shl-str">
              "The user you want to give the newly created role to"
            </span>){`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setRequired</span>(<span class="shl-bool">
              true
            </span>){`
`});{`
`}
            <span class="shl-cmnt">
              // Grant role to the member using the command{`
`}
            </span>a<span class="shl-oper">.</span>
            <span class="shl-func">addBooleanOption</span>((option){" "}
            <span class="shl-kwd">=&gt;</span>
            {`
  `}option{`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setName</span>(<span class="shl-str">
              "grantroletocommanduser"
            </span>){" "}
            <span class="shl-cmnt">
              // option names need to always be lowercase and have no spaces
            </span>
            {`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setDescription</span>(<span class="shl-str">
              "Choose you should be granted the role after creation"
            </span>){`
`});{`

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
            <span class="shl-kwd">const</span> chosenRoleColor{" "}
            <span class="shl-oper">=</span> interaction<span class="shl-oper">
              .
            </span>options<span class="shl-oper">.</span>
            <span class="shl-func">getString</span>(<span class="shl-str">
              "customrolecolor"
            </span>) <span class="shl-oper">??</span>
            {`
  `}interaction<span class="shl-oper">.</span>options<span class="shl-oper">
              .
            </span>
            <span class="shl-func">getString</span>(<span class="shl-str">
              "rolecolor"
            </span>) <span class="shl-oper">??</span>
            {`
  `}
            <span class="shl-num">undefined</span>;{`
`}
            <span class="shl-kwd">const</span> memberNeedingRole{" "}
            <span class="shl-oper">=</span> interaction<span class="shl-oper">
              .
            </span>options<span class="shl-oper">.</span>
            <span class="shl-func">getMember</span>(<span class="shl-str">
              "membertoreceiverole"
            </span>);{`
`}
            <span class="shl-kwd">const</span> grantRoleToSelf{" "}
            <span class="shl-oper">=</span>
            {`
  `}interaction<span class="shl-oper">.</span>options<span class="shl-oper">
              .
            </span>
            <span class="shl-func">getBoolean</span>(<span class="shl-str">
              "grantroletocommanduser"
            </span>) <span class="shl-oper">??</span>{" "}
            <span class="shl-bool">false</span>;{`

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
              // Check if the user selected "True" to the option to grant role
              to self{`
`}
            </span>
            <span class="shl-kwd">if</span> (grantRoleToSelf{" "}
            <span class="shl-oper">==</span>{" "}
            <span class="shl-bool">true</span>) &#123;{`
  `}
            <span class="shl-cmnt">
              // If they did, navigate their properties until their roles and
            </span>
            {`
  `}
            <span class="shl-cmnt">// add the newly created role to them</span>
            {`
  `}
            <span class="shl-kwd">await</span>{" "}
            interaction<span class="shl-oper">
              .
            </span>member<span class="shl-oper">
              .
            </span>roles<span class="shl-oper">.</span>
            <span class="shl-func">
              add
            </span>(coloredRole)<span class="shl-oper">.</span>
            <span class="shl-kwd">catch</span>((e){" "}
            <span class="shl-kwd">=&gt;</span> &#123;{`
    `}
            <span class="shl-cmnt">
              // If it fails, send a followUp message with the error
            </span>
            {`
    `}interaction<span class="shl-oper">.</span>
            <span class="shl-func">followUp</span>(&#123;{`
      `}content<span class="shl-oper">:</span>
            {`
        `}
            <span class="shl-str">
              "Failed to give you the new role. Do you have any roles with
              higher priority than me?"
            </span>
            <span class="shl-oper">,</span>
            {`
      `}ephemeral<span class="shl-oper">:</span>{" "}
            <span class="shl-bool">true</span>
            <span class="shl-oper">,</span>
            {`
    `}&#125;);{`
  `}&#125;);{`
`}&#125;{`

`}
            <span class="shl-cmnt">
              // Check if a guild member was provided to receive the role{`
`}
            </span>
            <span class="shl-kwd">if</span> (memberNeedingRole{" "}
            <span class="shl-oper">!=</span>{" "}
            <span class="shl-num">null</span>) &#123;{`
  `}
            <span class="shl-cmnt">
              // Check if the command user requested to get the role
            </span>
            {`
  `}
            <span class="shl-cmnt">
              // and also provided their own member to receive the role
            </span>
            {`
  `}
            <span class="shl-kwd">if</span> ({`
    `}interaction<span class="shl-oper">.</span>member<span class="shl-oper">
              .
            </span>id <span class="shl-oper">===</span>{" "}
            memberNeedingRole<span class="shl-oper">.</span>id{" "}
            <span class="shl-oper">&amp;&amp;</span> grantRoleToSelf{" "}
            <span class="shl-oper">==</span> <span class="shl-bool">true</span>
            {`
  `}) &#123;{`
    `}
            <span class="shl-cmnt">
              // If they did, give them an ephemeral error message
            </span>
            {`
    `}interaction<span class="shl-oper">.</span>
            <span class="shl-func">followUp</span>(&#123;{`
      `}content<span class="shl-oper">:</span>{" "}
            <span class="shl-str">"You were already granted the role!"</span>
            <span class="shl-oper">,</span>
            {`
      `}ephemeral<span class="shl-oper">:</span>{" "}
            <span class="shl-bool">true</span>
            <span class="shl-oper">,</span>
            {`
    `}&#125;);{`
  `}&#125;{`

  `}
            <span class="shl-cmnt">
              // Check if the command user provided a different member
            </span>
            {`
  `}
            <span class="shl-cmnt">// than themselves to receive the role</span>
            {`
  `}
            <span class="shl-kwd">if</span> ({`
    `}interaction<span class="shl-oper">.</span>member<span class="shl-oper">
              .
            </span>id <span class="shl-oper">!==</span>{" "}
            memberNeedingRole<span class="shl-oper">.</span>id{" "}
            <span class="shl-oper">||</span> grantRoleToSelf{" "}
            <span class="shl-oper">==</span> <span class="shl-bool">false</span>
            {`
  `}) &#123;{`
    `}
            <span class="shl-cmnt">
              // If they did, navigate their properties until their roles and
            </span>
            {`
    `}
            <span class="shl-cmnt">// add the newly created role to them</span>
            {`
    `}
            <span class="shl-kwd">await</span>{" "}
            memberNeedingRole<span class="shl-oper">
              .
            </span>roles<span class="shl-oper">.</span>
            <span class="shl-func">
              add
            </span>(coloredRole)<span class="shl-oper">.</span>
            <span class="shl-kwd">catch</span>((e){" "}
            <span class="shl-kwd">=&gt;</span> &#123;{`
      `}
            <span class="shl-cmnt">
              // If it fails, send a followUp message with the error
            </span>
            {`
      `}interaction<span class="shl-oper">.</span>
            <span class="shl-func">followUp</span>(&#123;{`
        `}content<span class="shl-oper">:</span>
            {`
          `}
            <span class="shl-str">
              "Failed to give the new role to the member. Do they have any roles
              with higher priority than me?"
            </span>
            <span class="shl-oper">,</span>
            {`
      `}&#125;);{`
    `}&#125;);{`
  `}&#125;{`
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
            <span class="shl-cmnt">
              // ...{`
`}
            </span>
          </div>
          {/* Code link */}
          <p class="self-start mb-4">
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/master/discord_create_channels/commands/createandgrantrole.js"
              title="Link to this file on GitHub"
              content="View/Download file"
              customRel="noopener noreferrer"
            />
          </p>

          <p class="my-2 text-justify self-start">
            Let's break down this code into smaller chunks again.
          </p>
          {/* lines 61 and 62 quote */}
          <q class="custom-quote italic self-start">
            const chosenRoleColor =
            interaction.options.getString('customrolecolor') ??
            interaction.options.getString('rolecolor') ?? undefined; (lines{" "}
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createandgrantrole.js#L61"
              title="view source"
              content="61"
              customRel="noopener noreferrer"
            />{" "}
            to{" "}
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createandgrantrole.js#L62"
              title="view source"
              content="62"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify">
            This{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/typedef/RoleCreateOptions"
              title="RoleCreateOptions (D.JS Docs)"
              content="option"
              customRel="noopener noreferrer"
            />{" "}
            allows the user to select a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildMember"
              title="GuildMember (D.JS Docs)"
              content="Member"
              customRel="noopener noreferrer"
            />{" "}
            that will receive the role, once it has been created. This will not
            ping them or notify them in any way.
          </p>
          {/* lines 68 to 69 quote */}
          <q class="custom-quote italic self-start">
            const chosenRoleColor =
            interaction.options.getString('customrolecolor') ??
            interaction.options.getString('rolecolor') ?? undefined; (lines{" "}
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createandgrantrole.js#L68"
              title="view source"
              content="68"
              customRel="noopener noreferrer"
            />{" "}
            to{" "}
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createandgrantrole.js#L69"
              title="view source"
              content="69"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify">
            This{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/typedef/RoleCreateOptions"
              title="RoleCreateOptions (D.JS Docs)"
              content="option"
              customRel="noopener noreferrer"
            />{" "}
            was added to allow the person using the command to get the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            added to them after being created if they select true when using the
            command.
          </p>
          {/* lines 96 to 97 quote */}
          <q class="custom-quote italic self-start">
            const chosenRoleColor =
            interaction.options.getString('customrolecolor') ??
            interaction.options.getString('rolecolor') ?? undefined; (lines{" "}
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createandgrantrole.js#L96"
              title="view source"
              content="96"
              customRel="noopener noreferrer"
            />{" "}
            to{" "}
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createandgrantrole.js#L97"
              title="view source"
              content="97"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify">
            Fetches the user input from the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/typedef/RoleCreateOptions"
              title="RoleCreateOptions (D.JS Docs)"
              content="options"
              customRel="noopener noreferrer"
            />{" "}
            mentioned above. Note how{" "}
            <span class="shl-inline">grantRoleToSelf</span>{" "}
            will default to false if the user doesn't select an{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/typedef/RoleCreateOptions"
              title="RoleCreateOptions (D.JS Docs)"
              content="option"
              customRel="noopener noreferrer"
            />. This means that the only way for the user to be granted the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            they have created is by manually selecting{" "}
            <span class="shl-inline">true</span> when using the command.
          </p>
          {/* line 110 quote */}
          <q class="custom-quote italic self-start">
            if (grantRoleToSelf == true) &#123; (
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createandgrantrole.js#L110"
              title="view source"
              content="line 110"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify">
            Checks if the user requested to give themselves the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            after creation and, if they did, attempt to give it to them. This,
            just like giving a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            to any{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildMember"
              title="GuildMember (D.JS Docs)"
              content="Member"
              customRel="noopener noreferrer"
            />, is prone to fail if the bot doesn't have permission to{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildMemberManager"
              title="GuildMemberManager (D.JS Docs)"
              content="Manage Members"
              customRel="noopener noreferrer"
            />{" "}
            or if the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildMember"
              title="GuildMember (D.JS Docs)"
              content="Member"
              customRel="noopener noreferrer"
            />{" "}
            that we are trying to give the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            already has another{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            that has higher priority than the all of bot's{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Roles"
              customRel="noopener noreferrer"
            />.
          </p>
          {/* line 124 quote */}
          <q class="custom-quote italic self-start">
            if (memberNeedingRole != null) &#123; (
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createandgrantrole.js#L124"
              title="view source"
              content="line 124"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify self-start">
            Check if the user provided us with a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildMember"
              title="GuildMember (D.JS Docs)"
              content="Member"
              customRel="noopener noreferrer"
            />{" "}
            to give the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />.
          </p>
          {/* line 127 quote */}
          <q class="custom-quote italic self-start">
            if (interaction.member.id === memberNeedingRole.id &&
            grantRoleToSelf == true) &#123; (
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createandgrantrole.js#L127"
              title="view source"
              content="line 127"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify">
            Check if the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildMember"
              title="GuildMember (D.JS Docs)"
              content="Member"
              customRel="noopener noreferrer"
            />{" "}
            provided is the same person as the user that triggered the command
            and if they have previously asked to receive the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />. This will only give them an error message if they asked for the
            {" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            twice, otherwise, it will just give them the role.
          </p>
          {/* line 137 quote */}
          <q class="custom-quote italic self-start">
            if (interaction.member.id !== memberNeedingRole.id ||
            grantRoleToSelf == false) &#123; (
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createandgrantrole.js#L137"
              title="view source"
              content="line 137"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify">
            If the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildMember"
              title="GuildMember (D.JS Docs)"
              content="Member"
              customRel="noopener noreferrer"
            />{" "}
            provided is different than the user triggering the command or if a
            {" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildMember"
              title="GuildMember (D.JS Docs)"
              content="Member"
              customRel="noopener noreferrer"
            />{" "}
            was provided and the user didn't request to have the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            added to themselves with the other{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/typedef/RoleCreateOptions"
              title="RoleCreateOptions (D.JS Docs)"
              content="option"
              customRel="noopener noreferrer"
            />, grant the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildMember"
              title="GuildMember (D.JS Docs)"
              content="Member"
              customRel="noopener noreferrer"
            />{" "}
            to have the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />.
          </p>
          <p class="my-2 text-justify">
            That was quite a bit of code we added and with that, we have also
            covered an edge case where users can try to give themselves the same
            {" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Role"
              customRel="noopener noreferrer"
            />{" "}
            twice.{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Role"
              title="Role (D.JS Docs)"
              content="Roles"
              customRel="noopener noreferrer"
            />{" "}
            are very complex entities and there is a lot more that can be done
            with them, like setting up additional permissions and updating them
            post-creation, but that's a lesson for another day.
          </p>

          {/* Post author */}
          <footer class="mt-auto w-full text-right text-sm">
            Written with 💞 by TheYuriG
          </footer>
        </article>
      </Base>
    </>
  );
}
