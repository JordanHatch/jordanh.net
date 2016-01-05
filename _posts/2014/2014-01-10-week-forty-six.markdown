---
layout: post
title: Week 46
date: '2014-01-10T20:20:07+11:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/72894735697/week-forty-six
---
<p>This week has been my first week back at work. I&rsquo;ve spent almost all my time working on the new GOV.UK Search &amp; Navigation project. I&rsquo;m finding it refreshing to work on just one thing at once again.</p>

<p>I&rsquo;ve been building a new type of browse page for GOV.UK this week. It&rsquo;s a prototype of new navigation aimed specifically at users in the Oil and Gas industry, making it easier to get straight to the <a href="https://insidegovuk.blog.gov.uk/2013/10/03/shipping-new-detailed-guides/">detailed guides</a> they need in order to do their job. The idea is that we&rsquo;re going to launch the pages in beta soon, but to make it happen I&rsquo;ve also been doing work behind the scenes which will form the groundwork for other &ldquo;specialist&rdquo; taxonomies in the future.</p>

<p><a href="https://twitter.com/bradwright">Brad</a> did some work over Christmas so that detailed guides, which currently live inside the <a href="https://github.com/alphagov/whitehall">Departments and Policy app</a>, will also get registered in <a href="https://github.com/alphagov/panopticon">Panopticon</a>. This means that they will be returned from the <a href="https://github.com/alphagov/govuk_content_api">Content API</a> and can be tagged alongside other items of GOV.UK content like <a href="https://www.gov.uk/vat-rates">answers</a> and <a href="https://www.gov.uk/vat">guides</a>.</p>

<p>GOV.UK&rsquo;s tagging functionality evolved from what we called &lsquo;sections&rsquo; in the beta and, aside from a few internal tags (such as the original source of the content), we never created any other kinds of tags that were public-facing. A consequence of this is that the code (and the <a href="https://github.com/alphagov/gds-api-adapters">API adapter</a>) is full of assumptions that all tags are section tags. I&rsquo;ve spent a while breaking some of these assumptions apart so that we can begin to add other kinds of tags to content. It hasn&rsquo;t been an easy piece of work - every time I thought I&rsquo;d tidied up a component I stumbled across more endpoints, adapters or test helpers.</p>

<p>A nice outcome of this is that I&rsquo;ve got a list of bigger issues with tags that I&rsquo;d like to fix once the Oil &amp; Gas prototype is released. They are things like: including the kind of tag in the tag ID so that IDs are unique across all tags; making sure we always reference the singular form of the tag type in requests (to reduce ambiguity); and, simplifying the number of endpoints in the API at which tags can be requested. There&rsquo;s also broader questions around whether we should continue to nest tags in a hierarchy, or whether grouping them in other ways makes more sense, and how nesting could work between different types of tags. Stay tuned for some answers on these :)</p>

<p>Outside the world of navigation and tags, I&rsquo;ve helped with the programming exercise for two interviews this week, and I&rsquo;ve also been trying to learn a bit of German using Duolingo.</p>
