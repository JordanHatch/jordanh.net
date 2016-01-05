---
layout: post
title: Week 59
date: '2014-04-14T07:43:46+10:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/82667774645/week-fifty-nine
---
<p>At the start of the week, I continued the build-out of <a href="https://github.com/alphagov/collections">Collections</a>, our new app for search and browse. I added specialist browse pages based on the code in <a href="https://github.com/alphagov/frontend">Frontend</a>, and I enjoyed being able to tidy a few things up, like the stylesheets and controller logic. Later on this week, we deployed the app to all environments, and soon we&rsquo;ll start transparently routing users looking for a specialist browse page to the new app, instead of Frontend.</p>

<p>One thing we&rsquo;ve noticed lately is that we each tend to pick up stories from our own streams of work. For example, I&rsquo;ve been mainly working on specialist browse stories, and <a href="https://twitter.com/rboulton">Richard</a> has been the same with search. Whilst it&rsquo;s helped us to ship things quicker, it stopped us sharing knowledge as a team and becomes a bit of a vicious circle. With that in mind, I picked up a story relating to search.</p>

<p>I&rsquo;ve been looking at including the new &lsquo;unified search&rsquo; endpoint in our <a href="https://github.com/alphagov/rummager/tree/release_774/lib/health_check">search health check scripts</a>. This will let us check the new unified search feature to see how well it performs compared to the existing search. So far, we&rsquo;ve hit a blocker, as the current script actually scrapes HTML from the results page, and we also don&rsquo;t currently provide a way to access <a href="https://github.com/alphagov/rummager">Rummager&rsquo;s</a> search APIs from outside. It looks like there&rsquo;s going to be a bit more work to do here than we planned.</p>

<p>We fixed our space this week. The wall splitting our team in half <a href="https://twitter.com/RicMakepeace/status/453585023351132160">came down on Tuesday evening</a>, and since then we&rsquo;ve been having fun moving things around and seeing what works best for us.</p>

<p>And on Friday, we received delivery of quite a few <a href="http://www.tesco.com/direct/hudl/">Hudl</a> tablets. We&rsquo;re going to mount them outside each meeting room, so <a href="https://twitter.com/1jh/status/454702320685940736">we can show what&rsquo;s going on inside</a> using <a href="https://github.com/JordanHatch/situation-room-dashboard">Situation Room</a>. At the weekend, I built a prototype Android app to display the dashboard as the tablet&rsquo;s home screen.</p>
