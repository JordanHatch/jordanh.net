---
layout: post
title: Week 49
date: '2014-02-03T08:04:17+11:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/75464899664/week-forty-nine
---
<p>This week is the last week of the Search &amp; Navigation team in its current form. Next week, we&rsquo;re changing a bit so that we&rsquo;re under the &ldquo;Preparing GOV.UK for Transition&rdquo; umbrella, alongside the team formerly known as Inside Gov. They&rsquo;ve been working on building Finders lately, so our work lines up together pretty well.</p>

<p>I changed how detailed guides are registered with Panopticon in the <a href="https://github.com/alphagov/whitehall">Whitehall app</a> this week, so that they now get registered whenever they are published. This is a bit of groundwork for when we start to register more types of Whitehall content with Panopticon in future. I also went to talk to departmental users of our publishing tools at their monthly Operations Meeting, explaining what we intend to do with Industry Sector tags, and showing the prototype that we&rsquo;ve already built.</p>

<p>I went along to <em>SPRINT 14</em> and <em>SPRINT GO</em> this week, which are events run for government by GDS to show the progress with exemplars and to talk about the transition to GOV.UK. I thought it was helpful to hear thoughts about the transition process from people in the agencies and arms-length bodies that will be transitioning in the coming months. It was also a good chance <a href="https://twitter.com/yahoo_pete/status/428569684846575616">to explore around County Hall</a> and what&rsquo;s left of the <a href="http://londonfilmmuseum.com/">London Film Museum</a> after it closed in December.</p>

<p>A while ago, I wrote <a href="https://github.com/alphagov/smart-answers-stack">a very hacky script</a> to run the <a href="https://github.com/alphagov/smart-answers">Smart Answers app</a> without having to set up a virtual machine. It was aimed at people outside GDS who wanted to run our code, but who ran into our (largely undocumented) web of dependencies between our apps. It wasn&rsquo;t ideal - it relied on OS X&rsquo;s built-in Apache to do some temperamental reverse-proxying. I&rsquo;ve rewritten the script this week to make use of <a href="https://github.com/alphagov/plek/pull/15">my changes to Plek</a> last year. It&rsquo;s now a lot easier to use and there&rsquo;s fewer dependencies.</p>
