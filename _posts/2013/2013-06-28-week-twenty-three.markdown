---
layout: post
title: Week 23
date: '2013-06-28T19:39:52+10:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/54115836609/week-twenty-three
---
<p>I&rsquo;ve spent most of this week continuing work on simple smart answers in <a href="https://github.com/alphagov/publisher">Publisher</a>. It&rsquo;s taken a little bit longer than anticipated because I encountered a heap of issues with both the nested_form gem and Mongoid - the latter being a <a href="https://github.com/mongoid/mongoid/issues/2989">bug which causes a MongoDB error</a> when you try to update documents which are embedded more than one level deep. As an interim fix, we&rsquo;re no longer embedding nodes inside the smart answers - instead using an old-school relation. If all goes well, the MVP should be ready to preview on Monday.</p>

<p>We had a follow-up retrospective to the search project at the start of the week. After the first retrospective, all our comments were added to a Trello list and sorted into a few common themes, and we met to discuss each in a bit more detail. The aim is to draw up a list of recommendations for projects of a similar nature in the future.</p>

<p><a href="https://twitter.com/jystewart">James</a> gave a great tech talk this afternoon on the architecture of GOV.UK, and a bit of a primer to those on the dev team who haven&rsquo;t yet become familiar with the ins and outs of the platform. It was also a good refresh for those of us who haven&rsquo;t worked with particular apps or libraries for quite a while.</p>

<p>And finally, this week it was great to be able to give fellow young advisor <a href="https://twitter.com/iAlja">Alja</a> a tour around GDS (and a sneak peek at show-and-tell) whilst she&rsquo;s visiting London.</p>

<p><em>PSA: There won&rsquo;t be week notes for the next fortnight as I&rsquo;m off on holiday. Normal service resumes soon.</em></p>
