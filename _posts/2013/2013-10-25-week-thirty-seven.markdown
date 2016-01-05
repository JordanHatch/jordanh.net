---
layout: post
title: Week 37
date: '2013-10-25T21:22:39+11:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/65069483066/week-thirty-seven
---
<p>I visited the Carers&rsquo; Allowance team at the Department for Work and Pensions on Tuesday. The team, based up in sunny Preston, launched <a href="https://www.gov.uk/apply-carers-allowance">a beta of the Carers&rsquo; Allowance service</a> last week, and I found it fascinating to see how another team of digital folk have been building things inside government. I particularly like how they&rsquo;re making the most out of the existing systems to build momentum in the shortest amount of time.</p>

<p>I finished the story to assign numeric Need IDs in the <a href="https://github.com/alphagov/govuk_need_api">Need API</a> at the start of the week. I found some nasty behaviour in <a href="http://mongoid.org/en/mongoid/index.html">Mongoid 3</a> and the way it inserts data using MongoDB&rsquo;s bulk insert mode, which caused it to fail silently when the IDs were not unique. Eventually I resorted to downgrading Mongoid to 2.8, but it&rsquo;s not an ideal solution.</p>

<p>The second story on User Needs I&rsquo;ve been working on this week was to keep a history of a need, its changes, and a record of who made the changes. This involved changing the way we create needs in the Need API so that author details are always required, and changing <a href="https://github.com/alphagov/maslow">Maslow</a> so that details about the current user are included in its requests back to the API. I completed the first part of the work today - the next step is to return the history and changes in the API and display it in Maslow.</p>

<p>Today, Dave and I have been starting some of the assurance work required in order for us to be able to deploy Maslow and the Need API into our production environment. We&rsquo;ve been writing up the necessary documentation about the components in each app and where they will live on the GOV.UK infrastructure. There&rsquo;ll be more to do in the coming weeks.</p>

<p>At the end of next week, I&rsquo;m heading off to <a href="http://www.europapark.de/lang-en/Home/c1174.html">Europa-Park</a> for the Horror Nights halloween event. I&rsquo;ll try and drop in some week notes before I go.</p>
