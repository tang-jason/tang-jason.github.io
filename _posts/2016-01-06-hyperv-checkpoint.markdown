---
layout: post
title: "Hyper-V CheckPoint"
date: 2016-01-06
lang: en-us
---

Hyper-V CheckPoint in PowerShell

{% highlight powershell %}
# Create checkpoint
Checkpoint-VM -VMName {vm name} -SnapshotName {whatever}

# Remove checkpoint
Remove-VMSnapshot -VMName *

# command
Get-Command -Module Hyper-V -Name *checkpoint*, *snapshot*
{% endhighlight %}