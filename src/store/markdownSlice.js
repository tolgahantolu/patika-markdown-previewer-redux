import { createSlice } from "@reduxjs/toolkit";

const help = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Tolgahan Tolu](https://app.patika.dev/tolgahantolu)*`;

const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    textUser: "this is user input",
    textHelp: help,
    isShowingHelp: false,
  },
  reducers: {
    getRawText: (state, { payload, type }) => {
      state.textUser = payload;
    },
    toggleHelp: (state, { payload, type }) => {
      state.isShowingHelp = payload;
    },
  },
});

export const { getRawText, toggleHelp } = markdownSlice.actions;
export default markdownSlice.reducer;
