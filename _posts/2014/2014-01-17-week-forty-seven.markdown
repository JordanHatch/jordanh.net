---
layout: post
title: Week 47
date: '2014-01-17T19:23:04+11:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/73635214197/week-forty-seven
---
<p>I continued with the specialist browse prototype this week. I think it&rsquo;s in a good place. It&rsquo;s now possible to assign a detailed guide a special category in the <a href="https://github.com/alphagov/whitehall">Departments and Policy publishing system</a>, which corresponds to a particular industry sector tag in the <a href="https://github.com/alphagov/govuk_content_api">Content API</a>. When the detailed guide gets registered with <a href="https://github.com/alphagov/panopticon">Panopticon</a>, the correct tag gets pushed along with it.  I gave the design of the new browse pages some attention - they look very similar to the <a href="https://www.gov.uk/business">business browse page</a>. I&rsquo;ve released the new browse pages to our preview environment. Once some more work has been done next week to automate the category assignment for the existing detailed guides, this should be ready to be released to the live GOV.UK site, albeit with a &lsquo;beta&rsquo; label whilst we iron out the taxonomy.</p>

<p>I&rsquo;ve also been giving <a href="https://github.com/alphagov/panopticon">Panopticon</a> some design love. I&rsquo;m wary that adding lots of Departments and Policy content into Panopticon could make it a lot harder for the content team to find the things they&rsquo;re looking for, so I&rsquo;ve tidied up the existing filters and added a bunch more. This means that users can now filter artefacts by the section, format, industry sector or state (whether it&rsquo;s live on GOV.UK or not). Multiple filters can be combined together to narrow down the search. This work will make it easier to add filters for new types of tags in the future, like organisations or policy areas.</p>

<p>Thanks to some pull requests by <a href="https://github.com/jabley">James Abley</a> and <a href="https://github.com/matharden">Mat Harden</a>, <a href="https://github.com/jordanhatch/anthology">Anthology</a> and <a href="https://github.com/jordanhatch/card-o-matic">Card-o-matic</a> got some fixes and improvements this week. Whilst taking a look at their changes, I took the chance to update Anthology to use Ruby 2.0.0.</p>

<p>And finally, this week I&rsquo;ve been picking up where I left off with The West Wing. I&rsquo;m halfway through the sixth season, so there&rsquo;s not much further to go before the end.</p>
