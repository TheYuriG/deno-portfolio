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
//? Render multiple comparison tables of the language differences
import { ComparisonTable } from "../../components/blog/ComparisonTable.tsx";
//? Import the default post footer
import { BlogPostFooter } from "../../components/blog/BlogPostFooter.tsx";
//? Import post summary
import { javascriptPythonSyntaxPost as postSummary } from "../../data/blog/javascript-python-syntax.ts";

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
        />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Title header */}
          <StyledHeader title={postSummary.title} />
          {/* Post creation date */}
          <p class="text-sm mb-2 w-full text-center">
            {new Date(postSummary.date).toLocaleString()}
          </p>
          {/* Introduction */}
          <p class="my-2 text-justify">
            I'm a Typescript developer, but I enjoy watching tutorials on other
            languages for exposure, before going to bed (unlike what I was doing
            a year ago: doomscrolling Instagram Reels until 1am).
          </p>
          <p class="my-2 text-justify">
            One of the things that I've spent my recent nights watching was{" "}
            <GradientLink
              content="Al Sweigart"
              link="https://github.com/asweigart"
              customRel="noopener noreferrer"
            />{" "}
            teaching how to Automate The Boring Stuff With Python on{" "}
            <GradientLink
              content="Udemy"
              link="https://www.udemy.com/course/automate/learn/lecture/3465866"
              customRel="noopener noreferrer"
            />
            . While I don't see myself switching my working language to Python
            in the near future, I thought it would be interesting to keep an
            easy-to-reference cheatsheet of the syntax differences between both
            languages.
          </p>
          <p class="my-2 text-justify">
            I don't really Python, so this list is not as compreheensive as I
            would like it to be. If you think that you could contribute to it,
            please make a comment on the{" "}
            <GradientLink
              content="related issue"
              link="https://github.com/TheYuriG/deno-portfolio/issues/104"
              customRel="noopener noreferrer"
            />{" "}
            and I'll add it. My main problem is how to represent stuff that
            can't be 1:1 matched like <span class="shl-inline">range()</span>
            {" "}
            or slices. How can I display those in a way that a Javascript
            developer would understand?
          </p>
          <StyledSubHeader title="Table of Contents" />
          <GreekList
            items={[
              <DottedLink content="Declaring variables" link="#variables" />,
              <DottedLink content="Expressions" link="#expressions" />,
              <DottedLink content="Utilities" link="#utilities" />,
              <DottedLink content="Strings" link="#strings" />,
              <DottedLink content="Arrays/Lists" link="#arrays" />,
              //   <DottedLink content="Objects/Dictionaries" link="#objects" />,
              //   <DottedLink content="Converting types" link="#type-conversion" />,
            ]}
          />

          {/* Declaring variables */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Declaring Variables"
            tableId="variables"
            differenceList={[
              {
                label: "Global variable",
                itemOne: "var count = 0",
                itemTwo: "",
                note:
                  "Python doesn't have var, your variables don't bleed out of the scope they are defined at.",
              },
              {
                label: "Scoped variable",
                itemOne: "let count = 0",
                itemTwo: "count = 0",
              },
              {
                label: "Immutable variable",
                itemOne: "const count = 0",
                itemTwo: "",
                note:
                  "Python doesn't have const, all values are mutable and reassignable.",
              },
              {
                label: "True boolean",
                itemOne: "let x = true",
                itemTwo: "x = True",
                note: "Python capitalizes both boolean values.",
              },
              {
                label: "False boolean",
                itemOne: "let x = false",
                itemTwo: "x = False",
                note: "Python capitalizes both boolean values.",
              },
            ]}
          />

          {/* Expressions */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Expressions"
            tableId="expressions"
            differenceList={[
              {
                label: "Weak equality",
                itemOne: "'1' == 1",
                itemTwo: "",
                note: "Python doesn't have weak equality checks.",
              },
              {
                label: "Strict equality",
                itemOne: "10 === 10",
                itemTwo: "10 == 0",
              },
              {
                label: "Weak inequality",
                itemOne: "true != false",
                itemTwo: "",
                note: "Python doesn't have weak inequality checks.",
              },
              {
                label: "Strict inequality",
                itemOne: "true !== false",
                itemTwo: "True != False",
              },
              {
                label: "Item present in Array/List",
                itemOne: "[1, 2, 3].includes(1)",
                itemTwo: "1 in [1, 2, 3]",
              },
              {
                label: "Item missing from Array/List",
                itemOne: "![1, 2, 3].includes(1)",
                itemTwo: "1 not in [1, 2, 3]",
              },
            ]}
          />

          {/* Utilities */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Utilities"
            tableId="utilities"
            differenceList={[
              // Increment
              {
                label: "Increment",
                itemOne: "i++",
                itemTwo: "",
                note: "Python doesn't have pre/post increment operators.",
              },
              // Decrement
              {
                label: "Decrement",
                itemOne: "i--",
                itemTwo: "",
                note: "Python doesn't have pre/post decrement operators.",
              },
              // Console
              {
                label: "Write to console",
                itemOne: "console.log('hi')",
                itemTwo: "print('hi')",
              },
              // Functions
              {
                label: "Functions",
                itemOne: `function multiplyByTwo(x) {
  return x * 2
}`,
                itemTwo: `def multiplyByTwo(x):
  return x * 2`,
                note:
                  "Python defines scope through indentation, Javascript usually does it through the use of curly braces",
              },
              // Else if
              {
                label: "Else if/Elif",
                itemOne: `} else if (condition === true) {`,
                itemTwo: `elif condition == True:`,
              },
              // Single line comment
              {
                label: "Single line comments",
                itemOne: "// comment",
                itemTwo: "# comment",
              },
              // Multi line comment
              {
                label: "Multi line comments",
                itemOne: `/*
This is a multiline comment
*/`,
                itemTwo: "",
                note:
                  "Python doesn't exactly have multi line comments, but you can use a multi line string to do basically the same thing.",
              },
            ]}
          />

          {/* Strings */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Strings"
            tableId="strings"
            differenceList={[
              // Single quotes
              {
                label: "Single quotes string",
                itemOne: "const styling = 'css'",
                itemTwo: "styling = 'css'",
              },
              // Double quotes
              {
                label: "Double quotes string",
                itemOne: 'const markup = "html"',
                itemTwo: 'markup = "html"',
              },
              // Length
              {
                label: "String length",
                itemOne: '"text".length',
                itemTwo: 'len("text")',
              },
              // Concatenation
              {
                label: "Concatenation",
                itemOne: '"two " + "strings"',
                itemTwo: '"two " + "strings"',
              },
              // Escape
              {
                label: "Escaping characters",
                itemOne: "'Don\\'t repeat yourself'",
                itemTwo: "'Don\\'t repeat yourself'",
              },
              // Raw string
              {
                label: "Raw strings",
                itemOne: "",
                itemTwo: "r'\\back\\slash'",
                note: "Javascript doesn't have raw strings.",
              },
              // Multiline string
              {
                label: "Multiline strings",
                itemOne: `"""
multiline
text
here
"""`,
                itemTwo: `\`
multiline
text
here
\``,
                note:
                  "Python can use double or single quotes for multilines, as long as what you use at the start, you also use at the end. Javascript exclusively uses backticks.",
              },
              // String interpolation (1)
              {
                label: "String interpolation (1)",
                itemOne: "`My name is ${name}.`",
                itemTwo: "'My name is %s.' % (name)",
              },
              // String interpolation (1)
              {
                label: "String interpolation (2)",
                itemOne: "`My name is ${name}.`",
                itemTwo: "f'My name is {name}.'",
                note: "Python's f-strings require Python 3.6 or higher.",
              },
            ]}
          />

          {/* Arrays/Lists */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Arrays/Lists"
            tableId="arrays"
            differenceList={[
              // New Array/List
              {
                label: "New array/list",
                itemOne: "new Array()",
                itemTwo: "list()",
              },
              // Length
              {
                label: "Array/List length",
                itemOne: "[1, 2, 3].length",
                itemTwo: "len([1, 2, 3])",
              },
              // Tuple
              {
                label: "Tuples",
                itemOne: "",
                itemTwo: "x = (1, 2, 3)",
                note: "Javascript doesn't support Tuples.",
              },
            ]}
          />

          {/* Post author */}
          <BlogPostFooter />
        </article>
      </Base>
    </>
  );
}
