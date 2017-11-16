---
layout: post
title: "Git - Get Started"
date: 2017-11-15
lang: en-us
---

### {{ page.title }}

#### `Your Identity`
After install Git, set your user name and user email as Git uses this info to commit. You'll need to do it once if you pass in `--global` flag. 

```git
git config --global user.name "John Smith"
git config --global user.email "johnsmith@email.com"
```

#### `Checking your setting...`
List all the settings. E.g. user name and user email.

```git
git config --list
```

#### `Cloning`

Clone a repository. 

```git
// clone a remote repo
git clone <url>

// if you want to name the repo something else, specify the name in the next option
git clone <url> my_awesome_stuff
```

#### `Checking the status of your files`
untracked = newly added file
staged/tracked = file pushed to stage/tracked using `git add <filename>` or `git add .`

```git
// status of the file
git status

// add untracked file to tracked
git add <filename>
```

#### `Viewing yoru staged and unstaged changes`
To see what you've changed but not yet staged

```git
git diff

// See what you've changed that will go to your commit
git diff --staged
```

#### `Commiting your changes`

```git
// To see your files to be commited
git commit

// push it to master
git commit -m "comments"
```