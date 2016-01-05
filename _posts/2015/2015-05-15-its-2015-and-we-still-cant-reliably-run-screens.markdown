---
layout: post
title: It's 2015 and we still can't reliably run screens
date: '2015-05-15T15:03:06+10:00'
tags:
- gdsteam
- government
- iot
- screens
tumblr_url: http://probablyisjordan.tumblr.com/post/119026781786/its-2015-and-we-still-cant-reliably-run-screens
---
<p><img src="https://farm9.staticflickr.com/8734/17681050671_fa4cdaaaac_z.jpg" alt=""/></p>

<p>Barely a day goes by when I don&rsquo;t spot a broken screen somewhere in London. I find it incredible that this still happens so much. We can deploy and operate infrastructure better than ever before, but we still struggle to keep a screen displaying a slideshow or a dashboard up and running.</p>

<p>A short while ago, <a href="https://twitter.com/genmon">Matt Webb</a> and I spent some time looking at this problem within the context of government. The GDS office has tons of screens, and central government must have thousands, displaying performance data, meeting room bookings, or promotional material. Across wider government, there must be tens of thousands: in job centres, driving test centres, at the border, and elsewhere.</p>

<p>Usually, each screen is run by a standalone computer at best - or expensive specialist hardware at worst - and we only know if it goes down if someone spots the screen is off (and knows how to fix it). Even if the screen&rsquo;s on, we can&rsquo;t be sure that there isn&rsquo;t a software update dialog blocking the screen, if the screen saver&rsquo;s kicked in, or whether the device is still connected to the internet at all.</p>

<p>Displaying screens feels like something that <em>should</em> be provided by commodity technology already. Given your dashboard or display is hosted somewhere on the internet, it should be really damn easy to get a device which boots up out-of-the-box into a web browser, discovers what it should show, and pings a monitoring service to let it know its online.</p>

<p>In lieu of such a thing appearing to exist, we decided to prototype one. <a href="https://gds.blog.gov.uk/2015/01/19/exploring-the-internet-of-things/">Matt&rsquo;s been doing a broader piece of work into how IoT concepts could be used in government</a>, and it appeared a good fit. We used some Raspberry Pis and a clever online service called <a href="https://resin.io">Resin</a>, which allows you to easily deploy containerised applications across a fleet of small devices. I built an online service for the devices to talk to, and a web-based control panel where you can configure each screen and see which ones are online.</p>

<p><img src="https://farm9.staticflickr.com/8889/17493281448_72697aabd3_z.jpg" alt=""/></p>

<p>Given an SD card with the Resin base image, a new Raspberry Pi will start up, install our custom client application, run <a href="http://www.chromium.org">Chromium</a> and then appear in the control panel ready to be configured (pictured above). A user can then choose where they want to point the screen to, and it will update automatically.</p>

<p>We had a bunch of problems with wifi, and some performance issues when we tried some of our more-animated performance dashboards, but it feels like there&rsquo;s definitely potential here to be explored.</p>

<p>I&rsquo;ve posted the source code for <a href="https://github.com/jordanhatch/screenorama-client">our client app</a> and <a href="https://github.com/jordanhatch/screenorama-web">web service</a> prototypes on GitHub. I&rsquo;m not sure what&rsquo;s happening next with the idea, but there&rsquo;s a few people at GDS interested in taking it forward. I&rsquo;d also love to find out where others have tried to solve this problem.</p>
