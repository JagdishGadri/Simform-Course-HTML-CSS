# Simform-Course-HTML-CSS

This repo contains course notes and some practical code of HTML CSS code.
INLINE ELEMENTS:Occupies only the space necessary for its content
Causes no line-breaks after or before the element
✔Box model applies in a different way: heights and
widths do not apply
✔Paddings and margins are applied only
horizontally (left and right)

PSEUDO ELEMENTS:
Elements that don't exist in html but we can still select and style in css
h1::first-letter{
font-style:normal;
margin-right:10px;
}

adjacent sibling selector: '+'
Ex: h3 + p::first-line{
color:red
}
Here in this exap, we are selecting each adjacent element p to h3 and styling the "first line of p" with color red!
Output: [Alt text](image.png)

every pseudo element is display: inline by default
Hi
HI 2
Hi 3
