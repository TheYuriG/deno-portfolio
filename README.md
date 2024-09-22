# TheYuriG.com's repository

Here you will find the code that powers the website
[TheYuriG.com](https://theyurig.com).

![Tech Stack used](https://github.com/TheYuriG/deno-portfolio/blob/master/stack-logo.png "Logos, left to right: Deno, Fresh, Preact")

📝 All of the code is written in Typescript and CSS, powered by Deno, Fresh,
Preact and Twind and served as static HTML files using the Islands architecture
(you can see a more broad overview [here](https://www.theyurig.com/what-is-this)).

☀️🌒 The website hosts all of my projects and some of my history. Feel free to
visit the site and poke around. All related code is well commented, so if you
find anything interesting, it should be pretty easy to transverse the files to
understand how it works.

## How does it work?

🤔 For all pages, a base layout is used (`./components/base/Base.tsx`), which
then gets populated with content on a route-by-route basis. Every page receives
the base colors based on the user OS-preferred (or user-chosen) theme, some
basic CSS for animations and the two fonts:
[Alfa Slab One](https://fonts.google.com/specimen/Alfa+Slab+One) (for headings
and high hierarchy items) and
[Fragment Mono](https://fonts.google.com/specimen/Fragment+Mono) (for overall
text).

⚙️ While I do consider myself a Full Stack developer (and I'm capable of getting
near 100 Lighthouse score, keep the website accessible and stick to best
practices), I'm much stronger working on the backend. I enjoy a lot more
managing data, user authentication, and databases and I try to show that on my
[/work](https://www.theyurig.com/work) page.

## Contributing

🤝🏽 If you feel like you can contribute in some way to this repository, don't
hesitate in creating an issue to explain what you would like to add or fix, I'm
very open to suggestions and bug reports!
