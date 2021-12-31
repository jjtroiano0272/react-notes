## Additions (+)

- [x] Tooltips
- [O] <Link> with img enclosed will NOT render the image. What's the deal with this?
- [ ] User login & mangement
- [ ] A way of utilizing API data
- [ ] Some sort of loading animation
- [ ] Include a (?) with Markdown cheatsheet
- [ ] localStorage -> DB post. Save users and their data with a DB
- [ ] The editing tools (bold, italic, etc) should only slide out and display when it's on mouseover
- [ ] Light/dark styling throughout the components
- [ ] Note title in the sidebar should be limited to whole words (whitespace separated) like 10 words, then append '...' to the end
- [ ] Notepad displays under 'sidebar' if on mobile screen

## Things to look out for/Notes

- [ ] In collapsing the navbar on outside click, jquery's `click()` is deprecated however, `on()` and `trigger()` don't work the same way as `click()`.
- [ ] In the navbar, everything looks like it properly handles the outside click, but be wary because this might leads to bugs down the road!

## Sources/Thanks to

- [ ] Collapsing navbar on outside click with jquery: user @wisnia https://stackoverflow.com/questions/41494858/closing-an-open-collapsed-navbar-when-clicking-outside-in-booststrap-4
