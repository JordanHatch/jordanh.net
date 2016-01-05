---
layout: post
title: Weeks 38 and 39
date: '2013-11-12T08:06:00+11:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/66764175752/week-thirty-eight-and-thirty-nine
---
<p>This bumper instalment of week notes is covering two weeks, as I&rsquo;ve been away.</p>

<p>Last week, I continued the work to keep a history of changes to a need in the <a href="https://github.com/alphagov/govuk_need_api">Need API</a>. I also took some time to increase the test coverage and better isolate the unit tests. In the latter half of the week, I travelled to <a href="http://www.europapark.de/lang-en/Home/c1174.html">Europa-Park</a> in Rust, Germany for Halloween and the Horror Nights event. Whilst I was away, Lisa and Stuart performed some guerrilla user testing of <a href="https://github.com/alphagov/maslow">Maslow</a> with some of the Transition Team and GOV.UK content designers.</p>

<p>This week&rsquo;s been a bit busier.</p>

<p>I finished up the work on an event history in the Need API and then worked on displaying the most recent five changes to a need in Maslow. That&rsquo;s been a huge item of work, so I&rsquo;m pleased it&rsquo;s finally wrapped up.</p>

<p>David deployed Maslow and the Need API to our production environment, and we&rsquo;re starting to enter needs into Maslow from spreadsheets. We decided to do this by hand for now, as every department has changed each spreadsheet to work better for them - meaning building an automatic importer would take a lot more time than it&rsquo;s probably worth for a couple of hundred needs.</p>

<p>We&rsquo;ve got our assurance work pretty much complete this week, and we can put Maslow live to our users as soon as some pen-testing has been done. It&rsquo;s likely not to be until the end of the month, as it falls in the scope of wider GOV.UK work.</p>

<p>I completed a spike into associating Mainstream content with Maslow user needs this week. Thanks to some work that <a href="https://twitter.com/jystewart">James</a> has already done to the <a href="https://github.com/alphagov/govuk_content_api/pull/131">Content API</a> to provide a way to return all artefacts with a given Need ID. I followed this up with some <a href="https://github.com/alphagov/panopticon/pull/94">changes to Panopticon</a> so that we&rsquo;ll link to Maslow for any artefacts with a Need ID above 100000.</p>

<p>And finally, I started work on adding a view mode for a user need. Soon, we&rsquo;ll want to restrict editing of a need to certain users, so a read-only mode is essential. It&rsquo;s also a chance to do a bit of thinking about the best way to present a user need to our users. I&rsquo;m going to continue this next week.</p>
