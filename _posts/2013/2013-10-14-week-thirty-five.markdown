---
layout: post
title: Week 35
date: '2013-10-14T07:39:00+11:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/64000147183/week-thirty-five
---
<p>I began the week on 2nd Line, for the final half of my one sprint tenure. I deployed the changes I made to <a href="https://github.com/alphagov/signonotron2">Signon</a> last week to use bearer tokens when syncing user permissions and suspensions, which means we can start to phase out the HTTP basic auth support in <a href="https://github.com/alphagov/gds-sso">gds-sso</a> soon.</p>

<p>Another group of keen students from a high school in East London visited GDS this week. I had a similar chat with them as the previous time: talking about the role of a developer at GDS and how we write code, deploy frequently and test things with real users.</p>

<p>I continued work on the User Needs project too. Stuart has been building the user facing features to add a new need in <a href="https://github.com/alphagov/maslow">Maslow</a> and I&rsquo;ve been helping out, particularly around integrating our other libraries and services. I also tweaked the <a href="https://github.com/alphagov/govuk_need_api">Need API</a> to support the extra attributes we&rsquo;re adding to a need, including referencing the associated government departments or organisations.</p>

<p>I had a couple of interesting meetings on Friday. With the transition managers, we talked about new ideas for Signon, such as better permissions management, additional user details, all the way to more complex items of work such as two-factor authentication. Watch this space! I was also involved in a workshop about department contact details. We already store public-facing contacts in the <a href="https://github.com/alphagov/whitehall">Whitehall app</a>, the new <a href="https://github.com/alphagov/contacts">HMRC Contacts app</a>, and inside many items of Publishing Platform content. Storing these all in a single place, and exposing them through a single API, would be really useful. We now have a better idea of where work can begin in our existing apps to make this happen.</p>

<p>And I finished the initial build of a meeting room API this week, following on from <a href="https://secure.flickr.com/photos/jordanh14/10027948704/">the Ruby prototype of a dashboard</a> which I built last week. It takes care of loading and updating each calendar, and returning some information about availability for each room, such as when it&rsquo;s next available or how long it&rsquo;s free until. It&rsquo;s written in Go and I&rsquo;ve named it <em>Situation Room</em>. The <a href="https://github.com/JordanHatch/situation-room">code is on GitHub</a> if you&rsquo;d like to give it a try.</p>
