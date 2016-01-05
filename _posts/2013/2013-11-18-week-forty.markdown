---
layout: post
title: Week 40
date: '2013-11-18T07:12:04+11:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/67349385745/week-forty
---
<p>This week, I&rsquo;ve been working with <a href="https://twitter.com/fofr">Paul</a> to build the view pages for a need in <a href="https://github.com/alphagov/maslow">Maslow</a>. Paul has created a great layout for the view which focuses on clear text and big numbers, which strongly resembles content on GOV.UK.</p>

<p>I&rsquo;ve also been tidying up the <a href="https://github.com/alphagov/govuk_need_api">Need API</a>, removing the asset pipeline and adding an index page which shows some basic information about the API and a list of the endpoints which it responds to. This should be a good starting point for anybody who is running the API in the development environment.</p>

<p>At the end of this week, I picked up another story: to add pagination to the Need API and Maslow. Pagination is becoming a greater priority as we have now created quite a lot of user needs. So far, I&rsquo;ve changed the Need API so that it returns results in paginated sets, and next week I&rsquo;ll do the other half of the work in Maslow so that it displays pagination and makes the correct requests to the API.</p>
