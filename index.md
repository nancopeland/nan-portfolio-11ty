---
layout: layout.njk
title: nan copeland dot com
---

<p class="intro"><strong>Hi, I'm Nan and I'm a product designer at <a href="https://corp.voxmedia.com/">Vox Media</a> in NYC. I enjoy talking to users, working with developers and designing in the browser.</strong></p>

<!-- slate -->
<section class="job-block">
<div class="block">
<p>I’ve worked at <a href="https://slate.com/">Slate Magazine</a> from May 2018 to May 2021. I work with developers and product managers to add new features to Slate.com and improve the experience for our readers.</p>

<ul>
{%- for post in collections.slate -%}
	<li><a class="project-link" href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>
</div>

<div class="block">
	<!--<video controls loop>
		<source type="video/mp4" src="img/slate_scroll.mp4"></source>
		<p>Your browser does not support the video element.</p>
	</video>-->
	<img alt="scrolling down slate's homepage" src="img/slate_scroll.gif"/>
</div>
</section>

<!-- ID -->
<section class="job-block">
<div class="block">
<p>Before Slate, I was a front-end designer at <a href="https://www.industrydive.com/">Industry Dive</a>, a media startup in Washington, D.C. I started as a graphic designer but slowly started contributing HTML and CSS to the site which turned into a title change to "front-end designer."</p>

<ul>
{%- for post in collections.id -%}
	<li><a class="project-link" href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>
</div>


<div class="block order-1">
	<img alt="industry dive websites stacked on top of each other" src="img/ID_sites.gif"/>
</div>
</section>

<!-- GA -->
<section class="job-block">
<div class="block">
<p>While working at Industry Dive, I took a user experience design class at <a href="https://generalassemb.ly/">General Assembly</a>. I had learned about how design was implemented with code but wanted to learn more about what I should do before starting the design process.</p>

<ul>
{%- for post in collections.ga -%}
	<li><a class="project-link" href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>
</div>

<div class="block">
	<img alt="prototype of the app I created in my General Assembly class" src="img/gig_flow.gif"/>
</div>
</section>


<p>My email is <a href="mailto:nmcopeland1@gmail.com">nmcopeland1@gmail.com</a>. You can also follow me on <a href="https://twitter.com/nancopeland">Twitter</a> and <a href="https://www.instagram.com/nancopeland/">Instagram</a>.</p>
