---
layout: post
title: Week 18
date: '2013-05-27T16:06:00+10:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/51476672998/week-eighteen
---
<p>This week has felt particularly busier than usual.</p>

<p>At the start of the week, I built <a href="https://card-o-matic.herokuapp.com/">Card-o-matic</a> - an app to print cards for each story in a Pivotal Tracker project. It takes the card design from <a href="https://github.com/psd/pivotal-cards">Paul Downey&rsquo;s bookmarklet</a> (which unfortunately broke with Pivotal&rsquo;s most recent changes), but fetches all the project data using the Pivotal Tracker API. The source is on <a href="https://github.com/JordanHatch/card-o-matic">GitHub</a> but there&rsquo;s a <a href="https://card-o-matic.herokuapp.com/">hosted version on Heroku</a> which you can use.</p>

<p>I also built a dashboard for GovUK Towers to display the upcoming releases we have scheduled in our Google Calendar. It looks just like an airport&rsquo;s departure board (just add Frutiger!). It should be able to adapt to any Google Calendar feed given the correct calendar URL and API credentials. I&rsquo;ve dubbed it <a href="https://github.com/JordanHatch/departure-lounge">departure-lounge</a>.</p>

<p>I visited the Ministry of Justice on Wednesday afternoon, to meet their new Digital Services team. There&rsquo;s a lot of work going on over at Petty France for the MoJ&rsquo;s <a href="http://open.justice.gov.uk/digital-strategy/#theme-01-transforming-our-services">exemplar projects</a>, and <a href="https://twitter.com/abscond">James</a> told me about the work they&rsquo;re doing to establish a culture not too dissimilar to that at GDS. There&rsquo;s also some <a href="http://www.flickr.com/photos/jordanh14/8855055468/">impressive views</a> over St James&rsquo; Park.</p>

<p>Later this week, I worked on fixing a bug with Smart Answers where dates  rendered as the iCalendar format were being memoized, leaking between requests. To solve this, there&rsquo;s now a clearer division between the definition of the calendar, and the actual state of the calendar for a particular request.</p>

<p>I&rsquo;ve also <a href="https://speakerdeck.com/jordanh/how-we-didnt-break-the-web">uploaded my slides</a> from my talk at OpenTech last weekend. I talked about how we redirected 83,000 URLs from Directgov and Business Link to GOV.UK. It was the first time I&rsquo;ve spoken at a large event, but I think it went well and I really enjoyed doing it.</p>
