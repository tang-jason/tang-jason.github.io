---
layout: post
title: "Regular Expression"
date: 2016-03-10
lang: en-us
---

# {{ page.title }}

A regular expression is a special text string for describing a search pattern.

#### Typical uses for regular expression ####

1. Input validation

2. Search (and replace)

3. String parsing

4. data scraping

5. Syntax highlighting

6. Data mapping

#### Delimiter ####

The two forward slash, they are the start and end for the regular expression

> / some regex here /

#### Basic syntax summary ####

	 // Quantifiers
	? * + {#} 

	// Characters ranges
	[...]

	// Shorthand charater codes
	\s 

	// Grouping and alternation
	(...|...)

	// anchors
	^...$

	// Modifers
	i

#### Literal characters ####

Tweleve characters have special meanings in regular expression. These characters are called "metacharacters".

1. \ (backslash)
2. ^ (caret)
3. $ (dollar sign)
4. . (period or dot)
5. | (vertical bar or pipe symbol)
6. ? (question mark)
7. * (asterisk or star)
8. + (plus sign)
9. ( (open parenthesis)
10. ) (close parenthesis)
11. [ (open square bracket)
12. { (open curly brace)