---
layout: post
title: Week 50
date: '2014-02-10T08:04:51+11:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/76206184205/week-fifty
---
<p>When I explained to Khadejah that I was taking part in an &ldquo;inception&rdquo; this week, she told me it sounded very cool and futuristic. After a week-long inception, those might not be the words I&rsquo;d use, but I do think the Specialist project is in a better place now. We set up camp for the week on the 7th Floor and had some good discussions about the project. We also had our team&rsquo;s first sprint planning session, in preparation for Sprint 1 next week.</p>

<p>I finished up my work on <a href="http://www.flickr.com/photos/jordanh14/12428969783/">a new layout for Panopticon</a> this week. I&rsquo;ve been working on it for a couple of weeks now, whenever I&rsquo;ve had chance, and I finally submitted a pull request. I&rsquo;ve tried to focus the form on the things our content team use the most, like tags and related items. <a href="http://www.flickr.com/photos/jordanh14/12428992015/in/photostream/">Here&rsquo;s the existing form</a> for comparison.</p>

<p>I changed how tags are stored for an &ldquo;artefact&rdquo; (an item of GOV.UK content) this week so that, for each tag, we save the Tag Type in addition to its ID. This is important because Tag IDs aren&rsquo;t globally unique (they&rsquo;re only unique within their own type) so, if this isn&rsquo;t done, we&rsquo;re going to hit naming collisions soon as we create more tags.</p>

<p>We had a meeting with the analytics team on Friday about the specialist browse pages. I wanted to get a better idea of what we&rsquo;d like to measure, and not just which tags we should be adding to our pages. I learned quite a bit about how we use Google Analytics custom variables, and which tools we have available for mapping a user&rsquo;s journey through specialist content.</p>

<p>And finally, I hacked a bit on <a href="https://github.com/JordanHatch/situation-room">Situation Room</a> (our office meeting room dashboard) to make it handle private events better. Previously, private events would look to be completely blank on the dashboard. Now, the room will be marked as &ldquo;Not available&rdquo;.</p>
