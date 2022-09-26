import { createGlobalStyle } from "styled-components";

export const GlobalStyleHome = createGlobalStyle`
 body {
  background-color: var(--branco);
  font-family: "Nunito", sans-serif;
  color: var(--tom-de-cinza);
}

:root {
  --cor-primaria: #fd377e;
  --cor-primaria-2: #e34981;
  --cor-secundaria: #03b898;

  --tom-de-cinza: #212529;
  --tom-de-cinza-2: #868e96;
  --tom-de-cinza-3: #e9ecef;
  --tom-de-cinza-4: #f8f9fa;
  --tom-de-cinza-5: #343A40;

  --branco: #ffffff;
  --icone-background: #f8f9fa;
  --icone-color: #868e96;
  --icone-hover: #f83b3b;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
textarea,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  box-sizing: border-box;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  text-decoration: none;
}

textarea {
  resize: none;
}

button{
  cursor: pointer;
}

`;
