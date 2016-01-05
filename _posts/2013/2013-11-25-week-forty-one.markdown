---
layout: post
title: Week 41
date: '2013-11-25T07:54:17+11:00'
tags:
- week notes
tumblr_url: http://probablyisjordan.tumblr.com/post/68047290256/week-forty-one
---
<p>I don&rsquo;t feel like I&rsquo;ve stopped at all this week.</p>

<p>It&rsquo;s been busy in the User Needs fort this week. <a href="https://github.com/alphagov/maslow">Maslow&rsquo;s</a> got some pagination. Having paginated the Need API last week, I added some UI to Maslow to browse pages - I decided to use <a href="https://github.com/amatsuda/kaminari">Kaminari&rsquo;s</a> <a href="https://github.com/amatsuda/kaminari/blob/master/lib/kaminari/helpers/paginator.rb">view helpers</a> to save a bit of time. I also did a bit more work in <a href="https://github.com/alphagov/panopticon">Panopticon</a> to display some basic information about a need, so that when we&rsquo;re assigning needs to artefacts in the future we can actually see what the need is, rather than just a need ID. At the same time, there&rsquo;s been an IT Health Check (ITHC) on Maslow this week, which is part of our assurance process. The initial report suggests there&rsquo;s no major vulnerabilities to fix, which is good news.</p>

<p>Away from User Needs, there&rsquo;s been quite a bit of activity around GDS too. As it&rsquo;s <a href="http://www.parliamentweek.org/">Parliament Week</a>, on Tuesday morning I went down to 1 Horse Guards Road for <a href="https://www.gov.uk/government/news/parliament-week-cabinet-office-opens-its-doors">a handful of talks on how the Cabinet Office supports legislation through Parliament</a>. There were some interesting speakers: <a href="https://www.gov.uk/government/people/lord-taylor-of-holbeach">Lord Taylor of Holbeach</a> spoke about his role in the House of Lords in supporting the <a href="http://www.legislation.gov.uk/ukpga/2011/24/contents">Public Bodies Act</a>, an &lsquo;enabling bill&rsquo; which allows for secondary legislation to be passed to change and merge existing public bodies that were created with primary legislation. David Willis from the Constitution Unit talked about the <a href="http://www.legislation.gov.uk/ukpga/2013/20/contents">Succession to the Crown Bill</a>, which most notably changed the line of succession to the throne to treat sons and daughters equally.</p>

<p>On Wednesday, we had our monthly GDS all-staff meeting over at the Royal College of Surgeons. Afterwards, the technology clan had a field trip over to the Home Office to visit the <a href="https://www.gov.uk/transformation/apply-registered-traveller">Registered traveller exemplar project</a>. The team at the Home Office have been working on an alpha of a service so that foreign travellers who  frequently fly into the UK can register to use e-Gates at the border. As the average frequent flyer makes ten journeys a year into the UK, and some as many as once a week, this has the potential to save people a lot of time by avoiding the main border queues.</p>

<p>And finally, I spent a bit of time tweaking the design of <a href="https://github.com/jordanhatch/departure-lounge">Departure Lounge</a>, the dashboard we use in the office to display upcoming GOV.UK releases. Releases are now bigger and the current deploy now has a bit more <a href="https://twitter.com/BadgerOfDeploy">badger</a>.</p>
