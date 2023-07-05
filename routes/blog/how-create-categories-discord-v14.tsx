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
import { createVoiceChannelPost as previousPost } from "../../data/blog/how-create-voice-channels-discord-v14.ts";
import { createCategoryPost as postSummary } from "../../data/blog/how-create-categories-discord-v14.ts";
import { createRolesPost as nextPost } from "../../data/blog/how-create-roles-discord-v14.ts";
import { createTextChannelPost } from "../../data/blog/how-create-text-channels-discord-v14.ts";

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
            This is the third (of four) parts of the Discord.JS V14 tutorial
            that I've published. You can read the{" "}
            <GradientLink
              link={previousPost.link}
              title={previousPost.title}
              content="second part"
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
            As mentioned in the previous lessons,{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Categories"
              customRel="noopener noreferrer"
            />{" "}
            are the parents of some{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildChannel"
              title="GuildChannel (D.JS Docs)"
              content="Channels"
              customRel="noopener noreferrer"
            />. Not all{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildChannel"
              title="GuildChannel (D.JS Docs)"
              content="Channels"
              customRel="noopener noreferrer"
            />{" "}
            belong to a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Category"
              customRel="noopener noreferrer"
            />{" "}
            (the ones that don't, are referred as "stray Channels").
          </p>
          <p class="my-2 text-justify">
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Categories"
              customRel="noopener noreferrer"
            />{" "}
            exist for primarily two reasons: Organizing{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildChannel"
              title="GuildChannel (D.JS Docs)"
              content="Channels"
              customRel="noopener noreferrer"
            />{" "}
            within a certain topic and quickly syncing the permissions of all
            {" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildChannel"
              title="GuildChannel (D.JS Docs)"
              content="Channels"
              customRel="noopener noreferrer"
            />{" "}
            within it. They also are very simple to create, even simpler than
            {" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel"
              title="VoiceChannel (D.JS Docs)"
              content="Voice Channels"
              customRel="noopener noreferrer"
            />{" "}
            or{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/TextChannel"
              title="TextChannel (D.JS Docs)"
              content="Text Channels"
              customRel="noopener noreferrer"
            />, since the number of configuration options for them is limited.
          </p>
          <p class="my-2 text-justify">
            Let's modify the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/TextChannel"
              title="TextChannel (D.JS Docs)"
              content="Text Channel"
              customRel="noopener noreferrer"
            />{" "}
            file a bit and then talk about the differences between them and{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Categories"
              customRel="noopener noreferrer"
            />:
          </p>

          {/* Creating category code block */}
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
            <span class="shl-oper">.</span>
            <span class="shl-func">addStringOption</span>((option){" "}
            <span class="shl-kwd">=&gt;</span>
            {`
  `}option{`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setName</span>(<span class="shl-str">
              "categoryname"
            </span>){" "}
            <span class="shl-cmnt">
              // option names need to always be lowercase and have no spaces
            </span>
            {`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setDescription</span>(<span class="shl-str">
              "Choose the name to give to the category"
            </span>){`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setMinLength</span>(<span class="shl-num">
              1
            </span>){" "}
            <span class="shl-cmnt">// A Category needs to be named</span>
            {`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setMaxLength</span>(<span class="shl-num">
              25
            </span>){" "}
            <span class="shl-cmnt">
              // Discord will cut-off names past the ~27 characters (for
              Categories),
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
            <span class="shl-kwd">const</span> chosenCategoryName{" "}
            <span class="shl-oper">=</span> interaction<span class="shl-oper">
              .
            </span>options<span class="shl-oper">.</span>
            <span class="shl-func">getString</span>(<span class="shl-str">
              "categoryname"
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
            chosenCategoryName<span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">
              // The name given to the Channel by the user
            </span>
            {`
  `}type<span class="shl-oper">:</span>{" "}
            <span class="shl-class">ChannelType</span>
            <span class="shl-oper">.</span>
            <span class="shl-class">GuildCategory</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">
              // The type of the Channel created.{`
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
            <span class="shl-cmnt">
              // ...{`
`}
            </span>
          </div>
          {/* Code link */}
          <p class="self-start mb-4">
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/master/discord_create_channels/commands/createcategory.js"
              title="Link to this file on GitHub"
              content="View/Download file"
              customRel="noopener noreferrer"
            />
          </p>
          <p class="my-2 text-justify">
            As you probably noticed if you paid attention to the{" "}
            <GradientLink
              link={createTextChannelPost.link}
              title={createTextChannelPost.title}
              content="Create a Text Channel with Dynamic Names"
              newTab={false}
            />{" "}
            lesson, not much was changed. We have renamed our variable, updated
            the command and the option name, and changed the type of{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildChannel"
              title="GuildChannel (D.JS Docs)"
              content="Channel"
              customRel="noopener noreferrer"
            />{" "}
            being created to{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="GuildCategory"
              customRel="noopener noreferrer"
            />. Simple, right? But there is not much use in having empty{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Categories"
              customRel="noopener noreferrer"
            />, so let's populate our newly created{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Category"
              customRel="noopener noreferrer"
            />{" "}
            with some{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildChannel"
              title="GuildChannel (D.JS Docs)"
              content="Channels"
              customRel="noopener noreferrer"
            />{" "}
            now.
          </p>

          <StyledSubHeader title="Creating a Category that nests other types of channels" />
          <p class="my-2 text-justify">
            We have seen how to create{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/TextChannel"
              title="TextChannel (D.JS Docs)"
              content="Text"
              customRel="noopener noreferrer"
            />{" "}
            and{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel"
              title="VoiceChannel (D.JS Docs)"
              content="Voice Channels"
              customRel="noopener noreferrer"
            />{" "}
            that can be nested in their existing parent{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Categories"
              customRel="noopener noreferrer"
            />{" "}
            (when there is one), but now we are going to create a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Category"
              customRel="noopener noreferrer"
            />{" "}
            and immediately nest newly created{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/TextChannel"
              title="TextChannel (D.JS Docs)"
              content="Text Channels"
              customRel="noopener noreferrer"
            />{" "}
            and{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel"
              title="VoiceChannel (D.JS Docs)"
              content="Voice Channels"
              customRel="noopener noreferrer"
            />{" "}
            within. As you can probably guess, we won't need to change a lot of
            our existing code, but we gonna reuse code from a few of our files
            to accomplish this.
          </p>

          {/* Category with nested channels code block */}
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
              "textchannelname"
            </span>){" "}
            <span class="shl-cmnt">
              // option names need to always be lowercase and have no spaces
            </span>
            {`
    `}
            <span class="shl-oper">.</span>
            <span class="shl-func">setDescription</span>(<span class="shl-str">
              "Choose the name to give to the text channel"
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
`});{`
`}
            <span class="shl-cmnt">
              // Voice Channel name{`
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
            <span class="shl-kwd">const</span> chosenTextChannelName{" "}
            <span class="shl-oper">=</span> interaction<span class="shl-oper">
              .
            </span>options<span class="shl-oper">.</span>
            <span class="shl-func">getString</span>(<span class="shl-str">
              "textchannelname"
            </span>);{`
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
              // Now create the Category in the server.{`
`}
            </span>
            <span class="shl-kwd">const</span> newlyCreatedCategory{" "}
            <span class="shl-oper">=</span> <span class="shl-kwd">await</span>
            {" "}
            interaction<span class="shl-oper">
              .
            </span>guild<span class="shl-oper">
              .
            </span>channels<span class="shl-oper">.</span>
            <span class="shl-func">create</span>(&#123;{`
  `}name<span class="shl-oper">:</span>{" "}
            chosenCategoryName<span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">
              // The name given to the Channel by the user
            </span>
            {`
  `}type<span class="shl-oper">:</span>{" "}
            <span class="shl-class">ChannelType</span>
            <span class="shl-oper">.</span>
            <span class="shl-class">GuildCategory</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-cmnt">
              // The type of the Channel created.{`
`}
            </span>&#125;);{`

`}
            <span class="shl-cmnt">
              // Now we create the Text Channel within the Category we just
              created{`
`}
            </span>
            <span class="shl-kwd">await</span>{" "}
            newlyCreatedCategory<span class="shl-oper">
              .
            </span>children<span class="shl-oper">.</span>
            <span class="shl-func">create</span>(&#123;{`
  `}name<span class="shl-oper">:</span>{" "}
            chosenTextChannelName<span class="shl-oper">,</span>{" "}
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
              // Lastly we create the Voice Channel within the same Category{`
`}
            </span>
            <span class="shl-kwd">await</span>{" "}
            newlyCreatedCategory<span class="shl-oper">
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
            <span class="shl-cmnt">
              // The type of the Channel created.{`
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
            <span class="shl-cmnt">
              // ...{`
`}
            </span>
          </div>
          {/* Code link */}
          <p class="self-start mb-4">
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/master/discord_create_channels/commands/createcategorywithnestedchannels.js"
              title="Link to this file on GitHub"
              content="View/Download file"
              customRel="noopener noreferrer"
            />
          </p>
          <p class="my-2 text-justify">
            You should be fairly familiar with what's happening here by this
            point if you have been following along. We are requiring the user to
            provide us a name for the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/TextChannel"
              title="TextChannel (D.JS Docs)"
              content="Text Channel"
              customRel="noopener noreferrer"
            />{" "}
            and the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel"
              title="VoiceChannel (D.JS Docs)"
              content="Voice Channel"
              customRel="noopener noreferrer"
            />, we are then fetching that input and using it to create them
            nested within the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Category"
              customRel="noopener noreferrer"
            />{" "}
            we created. There are only two points that I think it's important to
            go through in more detail:
          </p>
          {/* line 65 quote */}
          <q className="custom-quote italic self-start">
            const newlyCreatedCategory = await
            interaction.guild.channels.create(&#123; (<GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createcategorywithnestedchannels.js#L65"
              title="view source"
              content="line 65"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify">
            We are now fetching the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Category"
              customRel="noopener noreferrer"
            />{" "}
            and storing it to a constant, so it can be used to nest the newly
            created{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/TextChannel"
              title="TextChannel (D.JS Docs)"
              content="Text"
              customRel="noopener noreferrer"
            />{" "}
            and{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/VoiceChannel"
              title="VoiceChannel (D.JS Docs)"
              content="Voice Channels"
              customRel="noopener noreferrer"
            />.
          </p>
          {/* lines 74 and 81 quote */}
          <q className="custom-quote italic self-start">
            await newlyCreatedCategory.children.create(&#123; (lines{" "}
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createcategorywithnestedchannels.js#L74"
              title="view source"
              content="74"
              customRel="noopener noreferrer"
            />{" "}
            and{" "}
            <GradientLink
              link="https://github.com/TheYuriG/blog_lessons/blob/4fc83cf7d08c20fc43cc0018d24db2eb9ff33ae1/discord_create_channels/commands/createcategorywithnestedchannels.js#L81"
              title="view source"
              content="81"
              customRel="noopener noreferrer"
            />)
          </q>
          <p class="my-2 text-justify">
            Since we now have a{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Category"
              customRel="noopener noreferrer"
            />, we don't need to transverse through the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CommandInteraction"
              title="CommandInteraction (D.JS Docs)"
              content="interaction"
              customRel="noopener noreferrer"
            />, then the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/Guild"
              title="Guild (D.JS Docs)"
              content="guild"
              customRel="noopener noreferrer"
            />, and then the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildChannelManager"
              title="GuildChannelManager (D.JS Docs)"
              content="guild channels"
              customRel="noopener noreferrer"
            />{" "}
            to create our{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildChannel"
              title="GuildChannel (D.JS Docs)"
              content="Channels"
              customRel="noopener noreferrer"
            />, we can just use the{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannel"
              title="CategoryChannel (D.JS Docs)"
              content="Category"
              customRel="noopener noreferrer"
            />'s{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/CategoryChannelChildManager"
              title="CategoryChannelChildManager (D.JS Docs)"
              content="children"
              customRel="noopener noreferrer"
            />{" "}
            and nest our{" "}
            <GradientLink
              link="https://discord.js.org/#/docs/discord.js/main/class/GuildChannel"
              title="GuildChannel (D.JS Docs)"
              content="Channels"
              customRel="noopener noreferrer"
            />{" "}
            inside that.
          </p>

          {/* Next post: Roles */}
          <p class="mt-4 text-justify self-start">
            Next post:{" "}
            <GradientLink
              link={nextPost.link}
              title={nextPost.title}
              content={nextPost.title}
              customRel="next"
              newTab={false}
            />.
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
