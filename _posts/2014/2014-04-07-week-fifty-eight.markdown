---
layout: post
title: Week 58
date: '2014-04-07T07:23:33+10:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/81970605139/week-fifty-eight
---
<p>This week has been busy. It’s also been a week of counting down the remaining days of being a teenager, as I turned 20 on Saturday.</p>

<p>On Monday this week, I helped <a href="https://twitter.com/evilstreak">Dom</a> deploy all the Environment Agency category changes. We had a last-minute go/no-go decision so we had to be prepared to abort the deploy and roll back the changes.</p>

<p>I went along to the user research sessions on Tuesday, over in Shoreditch. Unfortunately, I didn’t find them as useful this time around, mainly because the users I observed didn’t get far enough into the tasks to use the specialist navigation or scoped search prototypes. I’m told that other users did, though, so I look forward to seeing the overall conclusions from this round of testing next week.</p>

<p>On Wednesday, I finished up a story I’ve been working on to create an interface to manage tags in <a href="https://github.com/alphagov/panopticon">Panopticon</a>. I’m quite pleased with it - it will reduce the amount of work we need to do to add each new specialist sector in the future.</p>

<p>Later this week, I started a story to split the specialist browse functionality out of the <a href="https://github.com/alphagov/frontend">Frontend</a> app into a new app, which we’re calling <a href="https://github.com/alphagov/collections">Collections</a>. The main reason for doing this is to simplify routing specialist browse pages - as we currently have to maintain a hardcoded list of slugs in Frontend. In the long-run, regular browse and search will move across to the Collections app too.</p>
