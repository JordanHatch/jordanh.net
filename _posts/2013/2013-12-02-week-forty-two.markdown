---
layout: post
title: Week 42
date: '2013-12-02T08:13:00+11:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/68765206280/week-forty-two
---
<p>On User Needs this week, I made a bunch of fixes to <a href="https://github.com/alphagov/maslow">Maslow</a> for the minor issues raised from our IT Health Check (ITHC) last week. They were things like adding a logout link, enforcing Rails&rsquo; CSRF protection, and setting a couple of extra headers. I also added logging to the <a href="https://github.com/alphagov/govuk_need_api">Need API&rsquo;s</a> organisation importer, and wired it up to our Kibana instances, so we should be able to more easily keep an eye on whether it&rsquo;s running correctly each day.</p>

<p>I removed a field from Maslow which asked if a need was currently met by GOV.UK because it&rsquo;s confused most of our users in testing, and the users who do need to know this are capturing it in a different way. I imagine it could return in the future as some sort of state, rather than a question.</p>

<p>With some help from <a href="https://twitter.com/gemmaleigh">Gemma</a>, I&rsquo;ve added a list all the &lsquo;mainstream&rsquo; content for a user need on its page in Maslow. This is most definitely a first iteration, as we don&rsquo;t currently return any information about the state of the content or whether it&rsquo;s live or not, but it should be enough to indicate when there is content present for a need.</p>

<p>I&rsquo;ve started a spike into how we handle duplicate needs. It&rsquo;s a tricky thing to get right and opens up a ton of questions, like where the line is between a duplicate and two very similar needs from different organisations, and then how we actually go about 'closing&rsquo; a need.</p>

<p>Around GDS this week, I&rsquo;ve also been helping run the pair programming exercise in a few interviews, which has been quite a bit of fun. When we interview new developers, we spend about 45 minutes with a code challenge and we pair to solve it. I&rsquo;ve enjoyed seeing a variety of approaches to the problem.</p>

<p>And finally, I went to <a href="http://www.meetup.com/HacksHackersLondon/events/151505172/">Hacks/Hackers London</a> this week - an evening event at Wayra where journalists and devs turned up to talk about technology and data. There was an interesting talk by <a href="https://twitter.com/rJBeecham">Roger Beecham</a> about his work analyzing data from TfL&rsquo;s cycle hire scheme.</p>
