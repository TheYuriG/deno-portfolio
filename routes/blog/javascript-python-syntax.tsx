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
            I don't use Python at all, so this list is not as compreheensive as
            I would like it to be. If you think that you could contribute to it,
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
            developer would understand? It's quite honestly a whole different
            world.
          </p>
          <StyledSubHeader title="Table of Contents" />
          <GreekList
            items={[
              <DottedLink content="Naming Conventions" link="#naming" />,
              <DottedLink content="Declaring variables" link="#variables" />,
              <DottedLink content="Expressions" link="#expressions" />,
              <DottedLink content="Mathematical Operators" link="#mathops" />,
              <DottedLink content="Bitwise Operators" link="#bitops" />,
              <DottedLink content="Utilities" link="#utilities" />,
              <DottedLink content="Strings" link="#strings" />,
              <DottedLink content="Arrays/Lists" link="#arrays" />,
              <DottedLink content="Objects/Dictionaries" link="#objects" />,
              //   <DottedLink content="Converting types" link="#type-conversion" />,
            ]}
          />

          {/* Naming conventions */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Naming Conventions"
            tableId="naming"
            differenceList={[
              {
                label: "Variables/Functions",
                itemOne: "camelCase",
                itemTwo: "snake_case",
              },
              {
                label: "Classes",
                itemOne: "PascalCase",
                itemTwo: "PascalCase",
              },
              {
                label: "Constants",
                itemOne: "SCREAMING_SNAKE_CASE",
                itemTwo: "SCREAMING_SNAKE_CASE",
                note:
                  "Python uses this as a convention for constants that shouldn't be reassigned. Because Javascript has 'const' assignments, this is usually reserved for naming variables that would be otherwise magic values, like PI.",
              },
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
                label: "Multiple assignment",
                itemOne: "",
                itemTwo: "a = b = c = 5",
                note: "Javascript doesn't have multiple assignment.",
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

          {/* Mathematical Operators */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Mathematical Operators"
            tableId="mathops"
            differenceList={[
              // Addition
              {
                label: "Addition",
                itemOne: "5 + 8",
                itemTwo: "5 + 8",
              },
              // Shorthand addition
              {
                label: "Shorthand addition",
                itemOne: "num += 5",
                itemTwo: "num += 5",
              },
              // Increment
              {
                label: "Increment",
                itemOne: "i++",
                itemTwo: "",
                note: "Python doesn't have pre/post increment operators.",
              },
              // Subtraction
              {
                label: "Subtraction",
                itemOne: "13 - 5",
                itemTwo: "13 - 5",
              },
              // Shorthand subtraction
              {
                label: "Shorthand subtraction",
                itemOne: "num -= 5",
                itemTwo: "num -= 5",
              },
              // Decrement
              {
                label: "Decrement",
                itemOne: "i--",
                itemTwo: "",
                note: "Python doesn't have pre/post decrement operators.",
              },
              // Multiply
              {
                label: "Multiply",
                itemOne: "3 * 5",
                itemTwo: "3 * 5",
              },
              // Shorthand multiplication
              {
                label: "Shorthand multiplication",
                itemOne: "num *= 5",
                itemTwo: "num *= 5",
              },
              // Exponent
              {
                label: "Exponent",
                itemOne: "num ** 2",
                itemTwo: "num ** 2",
              },
            ]}
          />

          {/* Bitwise Operators */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Bitwise Operators (a.k.a. Binary Black Magic)"
            tableId="bitops"
            differenceList={[
              // Bitwise AND
              {
                label: "AND",
                itemOne: "&",
                itemTwo: "&",
              },
              // &=
              {
                label: "",
                itemOne: "&=",
                itemTwo: "&=",
              },
              // Bitwise OR
              {
                label: "OR",
                itemOne: "|",
                itemTwo: "|",
              },
              // |=
              {
                label: "",
                itemOne: "|=",
                itemTwo: "|=",
              },
              // Bitwise XOR
              {
                label: "XOR",
                itemOne: "^",
                itemTwo: "^",
              },
              // ^=
              {
                label: "",
                itemOne: "^=",
                itemTwo: "^=",
              },
              // Bitwise NOT
              {
                label: "NOT",
                itemOne: "~",
                itemTwo: "~",
              },
              // Bitwise Right Shift
              {
                label: "Right shift",
                itemOne: ">>",
                itemTwo: ">>",
              },
              // >>=
              {
                label: "",
                itemOne: ">>=",
                itemTwo: ">>=",
              },
              // Bitwise Left Shift
              {
                label: "Left shift",
                itemOne: "<<",
                itemTwo: "<<",
              },
              // <<=
              {
                label: "",
                itemOne: "<<=",
                itemTwo: "<<=",
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
              // Inline functions
              {
                label: "Fat Arrow Functions/Lambdas",
                itemOne: "const add = (a, b) => a + b",
                itemTwo: "add = lambda a, b: a + b",
              },
              // If
              {
                label: "If",
                itemOne: `if (condition === true) {`,
                itemTwo: `if condition == True:`,
              },
              // Else if
              {
                label: "Else if/Elif",
                itemOne: `} else if (condition === true) {`,
                itemTwo: `elif condition == True:`,
              },
              // Else
              {
                label: "Else",
                itemOne: `} else {`,
                itemTwo: `else:`,
              },
              // Ternary operator
              {
                label: "Ternary operator",
                itemOne: 'happy === true ? "smile" : "frown"',
                itemTwo: '"smile" if happy == True else "frown"',
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
                itemOne: `\`
multiline
text
here
\``,
                itemTwo: `"""
multiline
text
here
"""`,
                note:
                  "Python can use double or single quotes for multilines, as long as what you use at the start, you also use at the end. Javascript exclusively uses backticks.",
              },
              // String interpolation (1)
              {
                label: "String interpolation (1)",
                itemOne: "",
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
                itemOne: "const a = new Array()",
                itemTwo: "a = list()",
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

          {/* Objects/Dictionaries */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Objects/Dictionaries"
            tableId="objects"
            differenceList={[
              // New Object/Dict (1)
              {
                label: "New object/dict (1)",
                itemOne: "const o = {}",
                itemTwo: "o = {}",
              },
              // New Object/Dict (2)
              {
                label: "New object/dict (2)",
                itemOne: "const o = new Object()",
                itemTwo: "o = dict()",
              },
              // New Object/Dict (3)
              {
                label: "New object/dict (3)",
                itemOne: "const o = Object.create(null)",
                itemTwo: "",
                note: "No Python equivalent.",
              },
              // Adding property value (1)
              {
                label: "Adding property (1)",
                itemOne: "obj['keyName'] = 'value",
                itemTwo: "dict['key_name'] = 'value'",
              },
              // Adding property value (2)
              {
                label: "Adding property (2)",
                itemOne: "obj.keyName = 'value'",
                itemTwo: "",
                note: "No Python equivalent.",
              },
              // Accessing property value (1)
              {
                label: "Accessing property value (1)",
                itemOne: "obj['keyName']",
                itemTwo: "dict['key_name']",
              },
              // Accessing property value (2)
              {
                label: "Accessing property value (2)",
                itemOne: "obj.keyName",
                itemTwo: "",
                note: "No Python equivalent.",
              },
              // Length
              {
                label: "Length",
                itemOne: "",
                itemTwo: "len(dict)",
                note:
                  "Can't use obj.length in Javascript, but you can convert the Object to an Array using Object.entries(obj)/Object.keys(obj)/Object.values(obj) and then get the length of that.",
              },
              // Check if key exists
              {
                label: "Check if key exists",
                itemOne: "'key_name' in dict",
                itemTwo: "'keyName' in obj",
              },
              // Comparing two objects/dictionaries
              {
                label: "Comparing two objects/dictionaries",
                itemOne: `const a = {name: 'yuri'}
const b = {name: 'yuri'}
a == b // false`,
                itemTwo: `a = {name: 'yuri'}
b = {name: 'yuri'}
a == b // True`,
                note:
                  "Python makes a deep equality check by default, Javascript instead compares if the reference in memory is the same.",
              },
              // Looping (keys)
              {
                label: "Looping through keys",
                itemOne: `for (const key of obj) {
    console.log(key)
}`,
                itemTwo: `for key in dict.keys():
    print(key)`,
              },
              // Looping (values)
              {
                label: "Looping through values",
                itemOne: `for (const value of Object.values(obj)) {
    console.log(value)
}`,
                itemTwo: `for value in dict.values():
    print(value)`,
              },
              // Looping (keys and values)
              {
                label: "Looping through keys + values",
                itemOne: `for (const [k, v] of Object.entries(obj)) {
    console.log(k, ':', v)
}`,
                itemTwo: `for k, v in dict.items():
    print(k, ':', v)`,
              },
              // Looping (keys)
              {
                label: "Looping through keys",
                itemOne: `for (const key of obj) {
    console.log(key)
}`,
                itemTwo: `for k in dict.keys():
    print(k)`,
              },
              // Deleting
              {
                label: "Deleting a key",
                itemOne: "delete obj['key']",
                itemTwo: "del obj['key']",
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
