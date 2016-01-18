---
layout: post
title: "Markdown Usage Basic"
date: 2016-01-16
lang: en-us
---

# Markdown Basic

Basic usages of markdown. A good list can be found [here][markdown url]

#### H1 - H6 Headings

{% highlight javascript %}
// use pound sign for headings
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
{% endhighlight %}

#### Blockqoute

{% highlight javascript %}
// blockqoute and nested blockqoute
> first level blockqoute
>
>> second level nested blockqoute
>
>>> third level nested blockqoute
{% endhighlight %}

> first level blockqoute
>
>> second level nested blockqoute
>
>>> third level nested blockqoute

#### Ordered List Item

{% highlight javascript %}
// just start it in number
1. first list item
{% endhighlight %}

1.	first list item.
2.	second list item.
3.	thrid list item.

#### TAB to create code block

	function publicMethod() { privateMethod() };


[markdown url]: https://daringfireball.net/projects/markdown/syntax