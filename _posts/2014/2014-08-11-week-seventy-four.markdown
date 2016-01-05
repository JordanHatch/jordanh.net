---
layout: post
title: Week 74
date: '2014-08-11T10:01:18+10:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/94420990266/week-seventy-four
---
<p>This week, we released two big features: the <a href="https://www.gov.uk/browse/driving">new browse design</a> and the Services and Information Page (for the <a href="https://www.gov.uk/government/organisations/maritime-and-coastguard-agency">Maritime and Coastguard Agency</a>). We had a retrospective on Friday to talk about their development and where we could do better.</p>

<p>I&rsquo;ve been working on a story to add pagination to search. I started looking at refactoring the search controller in <a href="https://github.com/alphagov/frontend">Frontend</a>, modelling the search query as a model and making the presenter/model split cleaner. Unfortunately, it&rsquo;s a much bigger job than could have fit into this sprint, and I really don&rsquo;t want to rush changes like that as the existing tests aren&rsquo;t great either.</p>

<p>In response to a request from <a href="https://twitter.com/dsingleton">David</a>, on Tuesday I added support for a new argument in <a href="https://github.com/JordanHatch/bowler">Bowler</a>, so that users can now exclude an particular process from being started.</p>

<p>I switched the <a href="https://github.com/JordanHatch/anthology">GDS Library app</a> over to using Google authentication this week. I also used it as a chance to reset the list of loans and audit the books we&rsquo;ve got, as the shelves have been looking a bit barren lately.</p>

<p>I&rsquo;ve also started reading Sandi Metz&rsquo;s <a href="http://www.poodr.com/"><em>Practical Object-Oriented Design in Ruby</em></a>, which is brilliant.</p>
