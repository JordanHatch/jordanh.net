---
layout: post
title: Week 48
date: '2014-01-27T07:49:05+11:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/74706637094/week-forty-eight
---
<p>I shipped something this week. The <a href="https://www.gov.uk/oil-and-gas">Oil and Gas browse page</a> is now live on GOV.UK. It&rsquo;s the result of two and a half weeks of work, and it&rsquo;s not perfect, but the people who&rsquo;ve I&rsquo;ve shown it to are quite excited to see that work on the &ldquo;specialist&rdquo; front is real and happening.</p>

<p>I also shipped the <a href="https://github.com/alphagov/panopticon">Panopticon</a> filters that I worked on last week. The content team liked those a lot too. On Friday, I decided to redesign the form for editing artefacts - what we call a piece of content on GOV.UK - and I&rsquo;m quite pleased with what I hacked together in a day.</p>

<p>I refactored a bit of the <a href="https://github.com/alphagov/govuk_content_api">Content API</a>, to iron out the inconsistencies in some of the tag URLs. We would call a tag type, such as &lsquo;section&rsquo;, in both its plural and singular forms depending on where it was being used, eg. <code>/tags/sections.json</code> but <code>/tags.json?type=section</code>. I&rsquo;ve changed this to make the singular the default everywhere, making sure the existing URLs do redirect so we don&rsquo;t break clients.</p>

<p>And I gave <a href="https://github.com/jordanhatch/anthology">Anthology</a> some love this week. I&rsquo;ve rebuilt the &ldquo;add a new copy&rdquo; view to make it clearer and easier to use, and I&rsquo;ve tweaked button styles across the whole app. I&rsquo;ve started work on making better filters for browsing books, so that larger libraries will be easier to browse through.</p>

<p>I&rsquo;m well into the seventh season of The West Wing now. It&rsquo;s getting good.</p>
