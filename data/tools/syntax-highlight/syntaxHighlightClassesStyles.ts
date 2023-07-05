export const syntaxHighlightClassesStyles = `.shl-block {
    white-space: pre-wrap;
    background: rgb(255, 246, 239);
    color: #112;
    line-height: 1.3em;
    margin: 1em 0;
    padding: 1em;
    border-radius: 1em;
    box-shadow: 0 0 1em 0.3em grey;
}

/* Comments */
.shl-cmnt {
    font-style: italic
}

/* Keywords syntax highlighting */
.shl-err,
/* error, keyword */
.shl-kwd {
    color: #e16
}

.shl-num,
/* syntax number, class */
.shl-class {
    color: #f60
}

.shj-numbers,
/* number, comment */
.shl-cmnt {
    color: #999
}

.shl-insert,
/* strings */
.shl-str {
    color: #7d8
}

.shl-bool {
    /* boolean */
    color: #3bf
}

.shl-type,
/* types, mathematical operators */
.shl-oper {
    color: #5af
}

.shl-section,
/* functions */
.shl-func {
    color: #84f
}

.shl-deleted,
/* variables */
.shl-var {
    color: #f44
}`;
