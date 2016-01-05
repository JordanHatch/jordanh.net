---
layout: post
title: Week 13
date: '2013-04-20T09:38:22+10:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/48425140123/week-thirteen
---
<p>At the start of the week, I went along to <a href="http://www.elasticsearch.org/">ElasticSearch</a> training with some of my colleagues at GDS. We use ElasticSearch for our search engine on GOV.UK, and the sessions helped us get a better understanding of how it works internally, and avoiding the numerous gotchas you can fall into along the way. On Thursday, we kicked off a new project for search - and over the next seven weeks we&rsquo;ll be rolling out a stream of improvements to make search easier to use, and to make it return better results. Stay tuned on that one.</p>

<p>I built a prototype this week of a smart answer represented entirely in JSON. Right now, our smart answers are a collection of YAML strings and a Ruby DSL, and it ties us completely to defining the flow inside the codebase. By representing a smart answer in JSON, not only can we then serve it from a Publisher-backed API, but we can also do things like, where supported, implementing it completely in the user&rsquo;s browser to make smart answers faster.</p>

<p>I&rsquo;ve been investigating some strange browser bugs which have been reported around the <a href="https://www.gov.uk/pay-legalisation-post">Legalisation payment process</a>. I suspect it&rsquo;s an IE6 issue, but work will continue on this next week.</p>

<p>And finally, on Thursday evening I <a href="http://govuk-dev.tumblr.com/post/48424540179/for-this-weeks-meeting-location-of-the-week">went along to the Foreign &amp; Commonwealth Office with my team</a> for a guided tour around the building.</p>
