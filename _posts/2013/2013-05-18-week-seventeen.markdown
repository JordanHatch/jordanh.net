---
layout: post
title: Week 17
date: '2013-05-18T17:29:43+10:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/50737629669/week-seventeen
---
<p>At the beginning of this week, I continued my sprint on the 2nd Line Support team - amongst keeping an eye on our alerts, I built a very basic prototype of what our operations manual could look like if it were built inside GitHub Pages instead of Google Sites.</p>

<p>I&rsquo;ve spent the remainder of the week working on the Search project - and I&rsquo;ve been building a few scripts to wrap around the <a href="https://rubygems.org/gems/es_dump_restore">es_dump_restore</a> gem to make it easier to import a full search index into our development machines from production. Previously, building a search index on a dev box required a complete set of data for <a href="https://github.com/alphagov/govuk_content_models">content_models</a> and <a href="https://github.com/alphagov/whitehall">whitehall</a>, and the actual indexing task took in excess of half an hour. These new scripts have no dependencies on existing data and take the time down to just a few minutes.</p>

<p>On Saturday, I&rsquo;m giving a talk at <a href="http://opentech.org.uk/2013/">OpenTech</a>. It&rsquo;s titled How We Didn&rsquo;t Break The Web, and I&rsquo;m going to go into a bit more detail about how we redirected 83,000 URLs from Directgov and Business Link to their corresponding new content on GOV.UK, and the tools which we built to help us along the way.</p>

<p>And finally, on Thursday I passed my practical driving test, which means I can now legally drive in the UK. I&rsquo;m now looking into getting a car to drive when I&rsquo;m around back at home.</p>
