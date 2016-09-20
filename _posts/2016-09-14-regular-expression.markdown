---
layout: post
title: "Regular Expression"
date: 2016-09-19
lang: en-us
---

# {{page.title}}

### Creating a regular expression

Constructe in two ways. Using regular expression literal, which consists of a pattern enclosed between slashes. Or calling a constructor function of the 'RegExp' object.

Regular experession literal: Use this for the performance.

	var regex = /ab+c/;

Constructor function of the 'RegExp' object:

	RegExp regex = new RegExp("ab+c");

In C# the regular expression constructor would looks like this:

	Regex regex = new Regex("ab+c");

### Special characters: " \\ "

a backslash that precedes a 'non-special' character indicates that the next character is 'special'

example: 'b' without a preceding '\' generally matches lowercase 'b's wherever they occur. But '\b' by itself doesn't match any character

	/\b/

a backslash that precedes a 'special' character indiciates that the next character is 'not special'

example: match string with 'a*'

	/a\*/

*note: Do not forget to escape \ itself while using the RegExp("pattern") notation because \ is also an escape character in strings.

### Special character: " ^ "

Matches beginning of input.

example: /^A/ does not match the 'A' in "an A", but does match the 'A' in "An E"

	/^A/

### Special character: " $ "

Matches end of input.

example: /t$/ does not match the 't' in "eater", but does match it in "eat"

	/t$/

### Special character: " * "

Matches the preceding expression 0 or more times. Equivalent to {0,}

example: /bo*/ matches 'boooo' in "A ghost booooed" and 'b' in "A bird warbled", but nothing in "A goat grunted"

	/bo*/

### Special character: " + "

Matches the preceding expression 1 or more times. Equivalent to {1,}

example: /a+/ matches the 'a' in "candy" and all the a's in "caaaaaaandy", but nothing in "cndy"

	/a+/