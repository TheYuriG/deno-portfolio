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
//? Import post summary
import { javascriptPythonSyntaxPost as postSummary } from "../../data/blog/javascript-python-syntax.ts";
//? Add a button to scroll to the top on the bottom right corner of the page
import ScrollToTop from "../../islands/misc/ScrollToTop.tsx";

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
        {/* The whole thing */}
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Title header */}
          <StyledHeader title={postSummary.title} />
          {/* Post creation date */}
          <p class="text-sm mb-2 w-full text-center">
            {new Date(postSummary.date).toLocaleString()}
          </p>

          {/* Motivation for this */}
          <p class="my-2 text-justify">
            I enjoy watching tutorials on other languages before going to bed,
            for exposure. One of the things that I've spent my recent nights
            watching was{" "}
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
            languages, in case me or other people need one.
          </p>

          <StyledSubHeader title="Table of Contents" />
          <GreekList
            items={[
              <DottedLink content="Naming Conventions" link="#naming" />,
              <DottedLink content="Declaring variables" link="#variables" />,
              <DottedLink content="Data types" link="#data" />,
              <DottedLink
                content="Data Type Conversions"
                link="#conversions"
              />,
              <DottedLink content="Expressions" link="#expressions" />,
              <DottedLink content="Mathematical Operators" link="#mathops" />,
              <DottedLink content="Bitwise Operators" link="#bitops" />,
              <DottedLink content="Utilities" link="#utilities" />,
              <DottedLink content="Strings" link="#strings" />,
              <DottedLink content="Arrays/Lists" link="#arrays" />,
              <DottedLink content="Objects/Dictionaries" link="#objects" />,
              <DottedLink content="Classes" link="#classes" />,
              <DottedLink content="Loops" link="#loops" />,
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
              // Global variable
              {
                label: "Global variable",
                itemOne: "var count = 0",
                itemTwo: "global count = 0",
              },
              // Scoped variable
              {
                label: "Scoped variable",
                itemOne: "let count = 0",
                itemTwo: "count = 0",
              },
              // Constant
              {
                label: "Immutable variable",
                itemOne: "const count = 0",
                itemTwo: "",
                note:
                  "Python doesn't have const, all variables are mutable and reassignable. Python offers some data types that have immutable values, like Tuples and Frozensets.",
              },
              // Multiple assignment
              {
                label: "Multiple assignment",
                itemOne: "let a = 5, b = a, c = b",
                itemTwo: "a = b = c = 5",
              },
            ]}
          />

          {/* Data types */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Data Types"
            tableId="data"
            differenceList={[
              // Boolean
              {
                label: "Boolean",
                itemOne: "true / false",
                itemTwo: "True / False",
                note: "Python capitalizes both boolean values.",
              },
              // String
              {
                label: "Strings",
                itemOne: "'' / \"\" / ``",
                itemTwo: `'' / "" / r'' / f''`,
                note:
                  "Python can also use triple single-quotes or triple double-quotes to create a multiline string.",
              },
              // Integers
              {
                label: "Integers",
                itemOne: "",
                itemTwo: "13",
              },
              // Floats
              {
                label: "Floats",
                itemOne: "",
                itemTwo: "12.4",
              },
              // Complex
              {
                label: "Complex",
                itemOne: "",
                itemTwo: "complex(1j)",
              },
              // Numbers
              {
                label: "Numbers",
                itemOne: "13 / 12.4",
                itemTwo: "",
                note:
                  "Javascript doesn't have separate type for integers or floats, they are all just Number.",
              },
              // BigInt
              {
                label: "BigInt",
                itemOne: "BigInt(bigNumberString)",
                itemTwo: "",
              },
              // Array/List
              {
                label: "Array/List",
                itemOne: "[]",
                itemTwo: "[]",
                note:
                  "In Javascript, Arrays are technically, a subtype of Object.",
              },
              // Set
              {
                label: "Set",
                itemOne: "new Set(['a'])",
                itemTwo: "set(['a'])",
                note: "Like Arrays/Lists, but cannot contain duplicate values.",
              },
              // Frozenset
              {
                label: "Frozenset",
                itemOne: "",
                itemTwo: "frozenset(('a'))",
                note: "Immutable version of set().",
              },
              // Range
              {
                label: "Range",
                itemOne: "",
                itemTwo: "range(6)",
              },
              // Object/Dictionary
              {
                label: "Object/Dictionary",
                itemOne: "{key: 'value'}",
                itemTwo: "{key: 'value'}",
                note:
                  "In Python, putting values inside curly braces without providing a key will create a set() instead.",
              },
              // Date
              {
                label: "Date",
                itemOne: "new Date()",
                itemTwo: "",
                note: "Technically, a subtype of Object.",
              },
              // Null/None
              {
                label: "Null/None",
                itemOne: "null",
                itemTwo: "None",
              },
              // Undefined
              {
                label: "Undefined",
                itemOne: "undefined",
                itemTwo: "",
                note:
                  "The closest equivalent in Python would be a Nonetype for whenever you assign a variable to the result of a function that doesn't return any value.",
              },
              // Symbol
              {
                label: "Symbol",
                itemOne: "Symbol('a')",
                itemTwo: "",
              },
              // Bytes
              {
                label: "Bytes",
                itemOne: "",
                itemTwo: "b'hi'",
              },
              // Bytearray
              {
                label: "Bytearray",
                itemOne: "",
                itemTwo: "bytearray(4)",
              },
              // Memoryview
              {
                label: "Memoryview",
                itemOne: "",
                itemTwo: "memoryview(bytes('a'))",
              },
            ]}
          />

          {/* Conversions */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Converting Data Types"
            tableId="conversions"
            differenceList={[
              // Boolean
              {
                label: "Boolean",
                itemOne: "!!'word'",
                itemTwo: "bool('word')",
              },
              // String (1)
              {
                label: "String (1)",
                itemOne: "String(10)",
                itemTwo: "str(10)",
              },
              // String (2)
              {
                label: "String (2)",
                itemOne: "10.toString()",
                itemTwo: "",
              },
              // Integer (1)
              {
                label: "Number (1)",
                itemOne: "Number('10')",
                itemTwo: "int('10')",
              },
              // Integer (2)
              {
                label: "Number (2)",
                itemOne: "parseInt('10')",
                itemTwo: "",
              },
              // Integer (3)
              {
                label: "Number (3)",
                itemOne: "+'10'",
                itemTwo: "",
                note:
                  "For this to work in Javascript, there must be no spaces between the plus symbol (Unary Operator) and the value/variable.",
              },
              // Integer (4)
              {
                label: "Number (4)",
                itemOne: "parseFloat('10')",
                itemTwo: "",
              },
              // Integer (5)
              {
                label: "Number (5)",
                itemOne: "'10' * 1",
                itemTwo: "",
                note:
                  "Javascript will attempt convert a String to a Number when it interacts with any mathematical operator other than the plus symbol (+).",
              },
              // Integer (6)
              {
                label: "Number (6)",
                itemOne: "~~'10'",
                itemTwo: "",
              },
              // Float
              {
                label: "Float",
                itemOne: "parseFloat('1.5')",
                itemTwo: "float('1.5')",
                note:
                  "Javascript doesn't have floats or ints, it's all just Number.",
              },
              // Range
              {
                label: "Range",
                itemOne: "",
                itemTwo: "range(8)",
                note: "Javascript doesn't have Range data types.",
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
              // Weak equality
              {
                label: "Weak equality",
                itemOne: "'1' == 1",
                itemTwo: "",
                note: "Python doesn't have weak equality checks.",
              },
              // Strict equality
              {
                label: "Strict equality",
                itemOne: "10 === 10",
                itemTwo: "10 == 0",
              },
              // Weak inequality
              {
                label: "Weak inequality",
                itemOne: "true != false",
                itemTwo: "",
                note: "Python doesn't have weak inequality checks.",
              },
              // Strict inequality
              {
                label: "Strict inequality",
                itemOne: "true !== false",
                itemTwo: "True != False",
              },
              // Less than
              {
                label: "Less than",
                itemOne: "10 < 20",
                itemTwo: "10 < 20",
              },
              // Less than or equal to
              {
                label: "Less than or equal to",
                itemOne: "15 <= 20",
                itemTwo: "15 <= 20",
              },
              // Greater than
              {
                label: "Greater than",
                itemOne: "30 > 15",
                itemTwo: "30 > 15",
              },
              // Greater than or equal to
              {
                label: "Greater than or equal to",
                itemOne: "50 >= 25",
                itemTwo: "50 >= 25",
              },
              // Expression AND
              {
                label: "Both sides of expression must be true",
                itemOne: "10 > 5 && isTrue === true",
                itemTwo: "10 > 5 and isTrue == True",
              },
              // Expression OR
              {
                label: "Either side of expression must be true",
                itemOne: "20 > 30 || isFalse === false",
                itemTwo: "20 > 30 or isFalse == False",
              },
              // Includes (array)
              {
                label: "Item present in Array/List",
                itemOne: "[1, 2, 3].includes(1)",
                itemTwo: "1 in [1, 2, 3]",
              },
              // Includes (string)
              {
                label: "Text present in String",
                itemOne: '"Hello world!".includes("Hello")',
                itemTwo: '"Hello" in "Hello World!"',
              },
              // Doesn't include (array)
              {
                label: "Item missing from Array/List",
                itemOne: "![1, 2, 3].includes(1)",
                itemTwo: "1 not in [1, 2, 3]",
                note: "Same for strings in both languages.",
              },
              // Unassigned
              {
                label: "Checking for unassigned variable",
                itemOne: "typeof a === 'undefined'",
                itemTwo: "",
                note:
                  "Python throws an error if you try to access a variable that wasn't previously created. If a Python variable is assigned to the result of a function that didn't return anything, it will be 'NoneType'd.",
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
                label: "Add",
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
                label: "Subtract",
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
              // Matrix multiplication
              {
                label: "Matrix multiplication",
                itemOne: "",
                itemTwo: "num @ 2",
                note: "No Javascript equivalent",
              },
              // Matrix multiplication shorthand
              {
                label: "Matrix shorthand",
                itemOne: "",
                itemTwo: "num @= 2",
                note: "No Javascript equivalent",
              },
              // Divide
              {
                label: "Divide",
                itemOne: "3 / 5",
                itemTwo: "3 / 5",
                note:
                  "After a division, all numbers in Python are converted to floats, even if the result is an integer.",
              },
              // Shorthand division
              {
                label: "Shorthand division",
                itemOne: "num /= 5",
                itemTwo: "num /= 5",
              },
              // Floored divide
              {
                label: "Floored divide",
                itemOne: "",
                itemTwo: "3 // 5",
                note:
                  "Floored division will return the closest integer rounded down. No 1:1 Javascript equivalent, but you can wrap the expression within a 'Math.floor()' function to achieve essentially the same.",
              },
              // Shorthand floored division
              {
                label: "Shorthand division",
                itemOne: "",
                itemTwo: "num //= 5",
                note: "No Javascript equivalent.",
              },
              // Modulo
              {
                label: "Modulo",
                itemOne: "num % 2",
                itemTwo: "num % 2",
              },
              // Shorthand modulo
              {
                label: "Shorthand modulo",
                itemOne: "num %= 2",
                itemTwo: "num %= 2",
              },
              // Divmod
              {
                label: "Divmod",
                itemOne: "",
                itemTwo: "a, b = divmod(23, 5)",
                note: "No Javascript equivalent.",
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

          {/* Functions */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Functions"
            tableId="functions"
            differenceList={[
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
              // Default arguments
              {
                label: "Default arguments",
                itemOne: `function logX(x = 'hi') {
    console.log(x)
}`,
                itemTwo: `def printX(x='hi'):
    print(x)`,
              },
              // Inline functions
              {
                label: "Fat Arrow Functions/Lambdas",
                itemOne: "const add = (a, b) => a + b",
                itemTwo: "add = lambda a, b: a + b",
              },
              // Generators
              {
                label: "Generators",
                itemOne: `function* timer(counter) {
    while (counter > 0) {
        yield counter;
        counter--;
    }
}`,
                itemTwo: `def timer(counter):
    while counter > 0:
        yield counter
        counter -= 1`,
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
              // Switch/Match
              {
                label: "Switch/Match",
                itemOne: `switch (arg){
    case 'word':
        doThing();
        break;
    default:
        doOtherThing();
}`,
                itemTwo: `match arg:
    case 'word':
        doThing()
    case _:
        doOtherThing()`,
                note: "Python doesn't have break statements.",
              },
              // Ternary operator
              {
                label: "Ternary operator",
                itemOne: 'happy === true ? "smile" : "frown"',
                itemTwo: '"smile" if happy == True else "frown"',
              },
              // Try + Catch/Except + Finally
              {
                label: "Try + Catch/Except + Finally",
                itemOne: `try {
    badFunction();
} catch (error) {
    if (error instanceof ThrownException) {
    console.log('Sorry! ' + error.message);
    }
} finally {
    console.log('Finishing');
}`,
                itemTwo: `try:
    badFunction()
except ThrownException as error:
    print('Sorry! {}'.format(error))
finally:
    print('Finishing')`,
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
              // Destructuring/Unpacking
              {
                label: "Destructuring/Unpacking",
                itemOne: "const [a, b, ...rest] = [1, 2, 3, 4]",
                itemTwo: "a, b, *rest = [1, 2, 3, 4]",
                note:
                  "In Javascript, the '...rest' argument must be the last one. Python doesn't have this restriction.",
              },
              // Spread
              {
                label: "Spread",
                itemOne: "oneFunction(...args)",
                itemTwo: "oneFunction(**args)",
              },
              // Type checking (1)
              {
                label: "Type checking (1)",
                itemOne: "typeof 10 === 'number'",
                itemTwo: "type(10) is int",
              },
              // Type checking (2)
              {
                label: "Type checking (2)",
                itemOne: "",
                itemTwo: "isinstance(10, int)",
              },
              // Parse JSON
              {
                label: "Parse JSON",
                itemOne: "JSON.parse(jasonToParse)",
                itemTwo: `import json
json.loads(jason_to_parse)`,
                note:
                  "Built in for Javascript, requires a library import for Python.",
              },
              // Convert to JSON
              {
                label: "Convert to JSON",
                itemOne: "JSON.stringify(objToJason)",
                itemTwo: `import json
json.dumps(dict_to_jason)`,
                note:
                  "Built in for Javascript, requires a library import for Python.",
              },
              // Replace match with Regex
              {
                label: "Replace match with Regex",
                itemOne:
                  `const phonePattern = /(\\(?\\d{3}\\)?[- ]?\\d{3}-?\\d{4})/;
"Please call me at (555) 444-9876".replace(phonePattern, "REDACTED PHONE NUMBER");`,
                itemTwo: `import re
phonePattern = re.compile(r'(\\(?\\d{3}\\)?[- ]?\\d{3}-?\\d{4})')
phonePattern.sub(phonePattern, "REDACTED PHONE NUMBER", "Please call me at (555) 444-9876")`,
                note:
                  "Built in for Javascript, requires a library import for Python.",
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
                label: "Length",
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
              // Slicing with set range
              {
                label: "Slicing (set range)",
                itemOne: "word.substring(1, 4)",
                itemTwo: "word[1:4]",
              },
              // Slicing with set end
              {
                label: "Slicing (start until set end)",
                itemOne: "word.substring(0, 3)",
                itemTwo: "word[:3]",
              },
              // Slicing with set start
              {
                label: "Slicing (set start until end)",
                itemOne: "word.slice(-3)",
                itemTwo: "word[-3:]",
              },
              // String interpolation (1)
              {
                label: "String interpolation (1)",
                itemOne: "",
                itemTwo: "'My name is %s.' % (name)",
              },
              // String interpolation (2)
              {
                label: "String interpolation (2)",
                itemOne: "`My name is ${name}.`",
                itemTwo: "f'My name is {name}.'",
                note: "Python's f-strings require Python 3.6 or higher.",
              },
              // Includes (string)
              {
                label: "Text present in String",
                itemOne: '"Hello world!".includes("Hello")',
                itemTwo: '"Hello" in "Hello World!"',
                note: "Same for Arrays/Lists in both languages.",
              },
              // Join an Array/List into a string
              {
                label: "Join Array/List elements as single string",
                itemOne: "['Hello', 'world!'].join(' ')",
                itemTwo: `hello = ['Hello', 'world!']
' '.join(hello)`,
              },
              // Split a string into an Array/List
              {
                label: "Split a string into an Array/List",
                itemOne: "'Hello world!'.split(' ')",
                itemTwo: `'Hello world!'.split()`,
                note:
                  "Python will split on whitespace by default, if a separator is not provided. With Javascript, not providing a separator will cause every single character to become an Array element.",
              },
              // Trim all
              {
                label: "Trim",
                itemOne: "' word '.trim()",
                itemTwo: "' word '.strip()",
                note:
                  "Python also allows you to pass parameters to strip in order to remove something else other than spaces. Javascript doesn't have that flexibility.",
              },
              // Trim left (leading)
              {
                label: "Trim leading spaces only",
                itemOne: "'   word'.trimStart()",
                itemTwo: "'   word '.lstrip()",
              },
              // Trim right (trailing)
              {
                label: "Trim trailing spaces only",
                itemOne: "'word  '.trimEnd()",
                itemTwo: "'word  '.rstrip()",
              },
              // Uppercase
              {
                label: "Uppercase entire string",
                itemOne: "'word'.toUpperCase()",
                itemTwo: "'word'.upper()",
              },
              // Lowercase
              {
                label: "Lowercase entire string",
                itemOne: "'SCREAMING'.toLowerCase()",
                itemTwo: "'SCREAMING'.lower()",
              },
              // Sentence
              {
                label:
                  "Uppercase first letter of first word, lowercase everything else",
                itemOne: "",
                itemTwo: "'two WORDS'.capitalize()",
                note: "No Javascript equivalent.",
              },
              // Title
              {
                label: "Uppercase first letter of every word",
                itemOne: "",
                itemTwo: "'breaking news'.title()",
                note: "No Javascript equivalent.",
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
              // New Array/List (1)
              {
                label: "New array/list (1)",
                itemOne: "const a = new Array()",
                itemTwo: "a = list()",
                note:
                  "In Javascript, it's bad practice to initialize arrays like this.",
              },
              // New Array/List (2)
              {
                label: "New array/list (2)",
                itemOne: "const a = [1, 2]",
                itemTwo: "a = [1, 2]",
              },
              // Accessing an item
              {
                label: "Accessing element by index",
                itemOne: "a[0]",
                itemTwo: "a[0]",
              },
              // Updating an item
              {
                label: "Modifying element at index",
                itemOne: "a[0] = 4",
                itemTwo: "a[0] = 4",
              },
              // Adding at last position
              {
                label: "Adding element at final position",
                itemOne: "a.push(8)",
                itemTwo: "a.append(8)",
                note:
                  "Python can use 'append' to place an item anywhere in the List, but Javascript's 'push' will only add the element after the final element.",
              },
              // Inserting at index
              {
                label: "Inserting at index",
                itemOne: "a.splice(1, 0, 'item added')",
                itemTwo: "a.insert(1, 'item added')",
                note:
                  "The second argument for Javascript's '.splice()' is for how many elements you want to remove starting on the position of the first argument.",
              },
              // Removing at last position
              {
                label: "Removing last element",
                itemOne: "a.pop()",
                itemTwo: "a.pop()",
              },
              // Removing element with specific value
              {
                label: "Removing first element with value",
                itemOne: "",
                itemTwo: "a.remove(4)",
                note:
                  "Javascript doesn't offer an easy way to do remove the first match and stop. You can do a 'for loop' to remove one and break after the first match or use '.findIndex()' and then '.splice()' on that element.",
              },
              // Join an Array/List into a string
              {
                label: "Join Array/List elements as single string",
                itemOne: "['Hello', 'world!'].join(' ')",
                itemTwo: `hello = ['Hello', 'world!']
' '.join(hello)`,
              },
              // Slicing with set range
              {
                label: "Slicing (set range)",
                itemOne: "a.slice(1, 4)",
                itemTwo: "a[1:4]",
              },
              // Slicing with set end
              {
                label: "Slicing (start until set end)",
                itemOne: "a.slice(3)",
                itemTwo: "a.[:3]",
                note:
                  "In Javascript, providing only one POSITIVE argument implies that is the end point.",
              },
              // Slicing with set start
              {
                label: "Slicing (set start until end)",
                itemOne: "a.slice(-3)",
                itemTwo: "a[-3:]",
                note:
                  "In Javascript, providing only one NEGATIVE argument implies that is the start point.",
              },
              // Sorting descending
              {
                label: "Sorting",
                itemOne: "a.sort()",
                itemTwo: "a.sort()",
              },
              // Sorting descending
              {
                label: "Sorting descending",
                itemOne: "a.sort((a, b) => b - a)",
                itemTwo: "a.sort(reverse=True)",
              },
              // Counting occurrences of element
              {
                label: "Counting occurrences of element",
                itemOne: "",
                itemTwo: "a.count(4)",
                note: "No Javascript equivalent.",
              },
              // Length
              {
                label: "Array/List length",
                itemOne: "[1, 2, 3].length",
                itemTwo: "len([1, 2, 3])",
              },
              // Creating Sets (1)
              {
                label: "New Set (1)",
                itemOne: "const uniqueSet = new Set([1, 2, 3])",
                itemTwo: "uniqueSet = set((1, 2, 3))",
              },
              // Creating Sets (2)
              {
                label: "New Set (2)",
                itemOne: "",
                itemTwo: "uniqueSet = {1, 2, 3}",
              },
              // [MAP] Modifying every element in an Array/List
              {
                label: "Modifying (map) every element in an Array/List",
                itemOne: "[1, 2, 3].map(n => n * 2)",
                itemTwo: "list(map(lambda n: n * 2, [1, 2, 3]))",
              },
              // Reduce an Array/List to single result
              {
                label: "Reduce an Array/List to single result",
                itemOne: "[1, 2, 3].reduce((total, curr) => total + curr)",
                itemTwo: "reduce(lambda total, curr: total + curr, [1, 2, 3])",
              },
              // Set length
              {
                label: "Count Set items",
                itemOne: "uniqueSet.size",
                itemTwo: "len(uniqueSet)",
              },
              // Tuple
              {
                label: "Tuples",
                itemOne: "",
                itemTwo: "x = (1, 2, 3)",
                note:
                  "Javascript doesn't support Tuples yet, but there is a TC39 proposal to add them. Python's Tuples are also not modifiable. Once set, forever defined.",
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
                itemTwo: "setattr(dict, key_name, value)",
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
                itemTwo: "getattr(dict, key_name)",
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
                  "Python makes a deep equality check by default, Javascript instead compares if the reference in memory are the same.",
              },
              // Deleting
              {
                label: "Deleting a key",
                itemOne: "delete obj['key']",
                itemTwo: "del obj['key']",
              },
              // Merging
              {
                label: "Merging objects/dictionaries",
                itemOne: "{...objA, ...objB}",
                itemTwo: "{**dictA,  **dictB}",
              },
            ]}
          />

          {/* Classes */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Classes"
            tableId="classes"
            differenceList={[
              // New class
              {
                label: "New Class",
                itemOne: `class Person {
  constructor(name) {
    this.name = name;
  }
}
`,
                itemTwo: `class Person:
  def __init__(self, name):
    self.name = name`,
              },
              // Inheritance
              {
                label: "Inheritance",
                itemOne: `class Student extends Person {
    constructor(name, age) {
        super(name);
        this.age = age
    }
}`,
                itemTwo: `class Student(Person):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age`,
                note:
                  "Python has 'pass' for whenever you want to create/inherit a class, but not initialize properties.",
              },
              // Printing a class to console
              {
                label: "Printing a class to console",
                itemOne: "",
                itemTwo: `class Person:
  def __str__(self):
    return f"Person {self.name} printed."`,
                note:
                  "Javascript logs the object version of a class to the console, while Python outputs human-unreadable code if '__str__()' is not provided.",
              },
            ]}
          />

          {/* Loops */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Loops"
            tableId="loops"
            differenceList={[
              // Looping (keys)
              {
                label: "Looping through obj/dict keys",
                itemOne: `for (const key of Object.keys(obj)) {
    console.log(key)
}`,
                itemTwo: `for key in dict.keys():
    print(key)`,
              },
              // Looping (values)
              {
                label: "Looping through obj/dict values",
                itemOne: `for (const value of Object.values(obj)) {
    console.log(value)
}`,
                itemTwo: `for value in dict.values():
    print(value)`,
              },
              // Looping (values)
              {
                label: "Looping through obj/dict values",
                itemOne: `for (const val in obj) {
    console.log(val)
}`,
                itemTwo: `for val in dict:
    print(val)`,
              },
              // Looping (keys and values)
              {
                label: "Looping through obj/dict keys + values",
                itemOne: `for (const [k, v] of Object.entries(obj)) {
    console.log(k, ':', v)
}`,
                itemTwo: `for k, v in dict.items():
    print(k, ':', v)`,
              },
              // For loop
              {
                label: "Looping a set number of times",
                itemOne: `for (let i = 0; i < 10; i++) {
    console.log(i)
}`,
                itemTwo: `for i in range(10):
    print(i)`,
              },
              // Looping Array/List (1)
              {
                label: "Looping Array/List (1)",
                itemOne: `for (let item of loopingArray) {
    console.log(item)
}`,
                itemTwo: `for item in loopingList:
    print(item)`,
              },
              // Looping Array/List (2)
              {
                label: "Looping Array/List (2)",
                itemOne: `for (let i = 0; i < loopingArray.length; i++) {
    console.log(loopingArray[i]);
}`,
                itemTwo: "",
              },
              // Looping Array/List (3)
              {
                label: "Looping Array/List (3)",
                itemOne: `loopingArray.forEach(function (item) {
        console.log(item);
    })
}`,
                itemTwo: "",
              },
              // While
              {
                label: "While loop",
                itemOne: `while (condition) {
    console.log('condition is true')
}`,
                itemTwo: `while condition:
    print('condition is true')`,
              },
              // Do While
              {
                label: "Do While loop",
                itemOne: `do {
    i++;
    console.log(i);
} while (i < 5);`,
                itemTwo: "",
                note: "No Python equivalent.",
              },
            ]}
          />

          {/* Post author */}
          <footer class="mt-auto w-full text-right text-sm">
            Written with 💞 by TheYuriG, with contributions by{" "}
            <GradientLink
              content="@lino-levan"
              link="https://github.com/lino-levan"
              customRel="nofollow noreferrer"
              title="Thank you for the error checking!"
            />{" "}
            and{" "}
            <GradientLink
              content="u/nekokattt"
              link="https://www.reddit.com/r/learnpython/comments/14yf19y/comment/jrshjh0/?utm_source=reddit&utm_medium=web2x&context=3"
              customRel="nofollow noreferrer"
              title="Thank you for the suggestions!"
            />. You can check this{" "}
            <GradientLink
              content="issue"
              link="https://github.com/TheYuriG/deno-portfolio/issues/104#issuecomment-1636989897"
              customRel="nofollow noreferrer"
              title="Make the life of other developers a little bit easier."
            />{" "}
            if you wish to contribute and get added to this list.
          </footer>
        </article>

        {/* Scroll up button */}
        <ScrollToTop />
      </Base>
    </>
  );
}
