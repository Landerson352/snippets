# recommendations

## for front-enders starting a new project
- Consider things you can do before any design comps or backend programming is even started.
  - Talk to the designer about front-end frameworks and icon sets.
  - Quick-deploy up a page template and pre-processor build system.
- Decide on a CSS methodology. Think about if you need to guard against name collision with other systems. Consider BEM or a lighter variant of it.
- Decide on an icon set. Think about the breadth of icons you'll want to be available right away. Will you want custom icons? Consider FontAwesome at the start and swapping with a custom build like Fontello later on.
- Decide on front-end framework. Do you need one? Consider the breadth of components you'll want to be available right away. Think about community support and integrations. Plan on disabling components you won't use. Consider Bootstrap using the preprocessor source.
- Make a list of things to do before you wrap up the project. Do a sweep of unused CSS classes and other resources. Leave documentation for the next developer. Copy any useful code snippets for future projects.

## for designers

- The best form validation offers feedback on each individual field, as well as a feedback summary on the entire form.

- The most legible font-size is between 14px and 16px, with line heights from 1.1em to 1.5em depending on line length and font-size.

- Create a favicon at 260x260, which can be sized down to the various formats. Also supply a flat shape vector version (black SVG on transparent background).

- Create structural layouts at a wide array of sizes (ie. 320, 480, 768, 1024, 1280, 1920). Doing this will set rules about when the layout changes (ie. from 2 columns to 1, to fluid). Then create any specific comps at the most popular extremes (320, 1280).

- Design patterns
  - Toast notifications are useful for brief, ethereal messages. Use them if it's ok that user doesn't always notice them.
  - Inline Alert boxes are useful static messages you want to user to always see (ie. form validation summary).
  - Modals should be used sparingly. Confirmation boxes are fine. For anything more robust consider [mobile-friendly alternatives](http://uxmovement.com/mobile/why-you-should-avoid-using-modal-windows-on-mobile/).
  - When to use radio/checkbox/select? For a binary option, use a checkbox and make the label describe the checked state. For 3-5 options, use a radio button group with one option pre-selected. List the options vertically unless there is plenty of horizontal padding between them. For more than 5 options, use a select box with a "Select one..." label (if required, and you don't want to skew towards a default value). [more](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)