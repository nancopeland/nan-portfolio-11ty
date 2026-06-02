---
title: New "cover story" layout
description: A new split-top layout option for Slate's cover stories.
---

## History

This project started as an idea from PIE (Slate's product, interaction and engineering teams) Hack Day because the art director, [Lisa Larson-Walker](https://lisalarsonwalker.com/), wanted to have more visual options for Slate's cover stories. 

Currently, the cover story template has a full-width horizontal image followed by the headline, subhead and other article data. One of Lisa's ideas was to have a more square or vertical image at the top and have the headline and other info beside it.

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="full width template for story about 25 best characters" src="/img/CS_split_top/full-width_characters.png">
		<span class="caption"><a href="https://slate.com/culture/2019/08/most-important-characters-movies-tv-books-21st-century.html">Current full-width template</a></span>
	</div>
	<div class="img-flex-50">
		<img alt="full width template for story about climate change" src="/img/CS_split_top/full-width_climate-change.png">
		<span class="caption"><a href="https://slate.com/business/2019/09/climate-change-crisis-companies-rich-lucky-farming-firefighting.html">Current full-width template</a></span>
	</div>
</div>

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="first mock (1)" src="/img/CS_split_top/first_mock1.png">
	</div>
	<div class="img-flex-50">
		<img alt="first mock (2)" src="/img/CS_split_top/first_mock2.png">
	</div>
	<span class="caption">Two of Lisa's first mocks</span>
</div>

The initial idea for this was just as a Hack Day project but once both the dev team and the editorial team saw the mocks, they wanted to build it. 

## Mocks

After it was decided everyone wanted to work on this, I started mocking up past stories where I thought the art might have looked better in this layout. 

For these mocks, I used a setting that currently exists called "theme color." The "theme color" allows someone on the art team to set a color (that usually corresponds with the art) and the link underlines and other details on the page change to this color to make the template feel a bit more custom. I thought this would be a nice thing to use in this prospective new layout.

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="new layout for story about piper perabo" src="/img/CS_split_top/split-top_piper-perabo.png">
		<span class="caption">New layout for <a href="https://slate.com/news-and-politics/2019/08/piper-perabo-resistance-celebrity.html">this story</a></span>
	</div>
	<div class="img-flex-50">
		<img alt="new layout for story about japanese knotweed" src="/img/CS_split_top/split-top_knotweed.png">
		<span class="caption">New layout for <a href="https://slate.com/technology/2019/05/japanese-knotweed-invasive-plants.html">this story</a></span>
	</div>
</div>

Although the theme color usually looked good, some cover stories had a more serious tone and I thought maybe they'd look better with a black or white background instead of a color. 

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="new layout for story about a catholic priest" src="/img/CS_split_top/split-top_priest-red.png">
	</div>
	<div class="img-flex-50">
		<img alt="new layout for story about a catholic priest" src="/img/CS_split_top/split-top_priest-black.png">
	</div>
	<span class="caption">Background color options for <a href="https://slate.com/human-interest/2019/09/theodore-mccarrick-archbishop-interview-kansas-sexual-abuse.html">this story</a></span>
</div>

## Workflow

After I mocked up a bunch of different articles, I met with the dev team to decide how this would get built in [Clay](https://clay.nymag.com/) (the CMS): 

1. Is the photo an <code class="language-html">img</code> or <code class="language-scss">background-image</code>?
2. How is the text color decided? How is the background color decide? How do we make sure this relationship is has enough color contrast?
3. How does the new template work with the old template? Should the new template be an option in the main CS template or should the new template be its own template? 

For the first question, we decided to make the image a <code class="language-scss">background-image</code>.  The old template's image is a regular <code class="language-html">img</code> so I thought dev might be a preference for that because the new template's image is 50% of the page width and needs to grow and shrink to fill the space, <code class="language-scss">background-image</code> made more sense. 

For the second question, we decided to let the art team have full control over picking the background color and text color (as well as a third option for the bracket color). We also thought it would be nice to have some sort of test running to show the color contrast between the background and text colors but that wouldn't be a blocker to this going live and I could keep an eye on the contrast until it is completed.

### CMS options for new layout: 

1. Background color 
    - Black
    - White
    - Theme color
2. Text color
    - Black
    - White
3. Bracket color 
    - Black
    - White
    - Theme color

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="new layout for story about a catholic priest" src="/img/CS_split_top/clay_full-width.png">
	</div>
	<div class="img-flex-50">
		<img alt="new layout for story about a catholic priest" src="/img/CS_split_top/clay_split-top.png">
	</div>
	<span class="caption">Settings in Clay, Slate's CMS</span>
</div>

For the third option, dev said a new template was easier but they could make it an option if that was a better experience. I talked to the art team and they preferred the new layout be an option in the current template instead of being its own template so they could toggle between two layouts (full-width vs. split-top) to see what looked best. I also thought that this layout being incorporated into the current template would make sure it was used more often and not forgotten. 

## Implementation & working with dev

Based on the meeting, I ticketed this new feature and, after many sprints, dev started working on it. The biggest challenges we faced in development were image-related. 

Initially, the developer, [Jonathan Zuckerman](https://twitter.com/jon47) (JZ), separated "layout" and "image" into separate tabs in the CMS editing experience. I thought this was a good idea but we realized that the images needed to be different based on layout (horizontal vs. square/vertical image). It was confusing having the image tab be reliant on the layout tab but the image content was hidden until you clicked on the tab. 

I checked with the art team about this decision (because they are primary people making layout and image decisions) and they said it didn't really matter if layout and image were separated and it would be nice to see all the information at once. So, we put all the options in one tab. 

![layout switching for story about bong joon-ho](/img/CS_split_top/split-top_bong-joon-ho.gif)
<span class="caption">Switching the layout for <a href="https://slate.com/culture/2019/10/bong-joon-ho-profile-parasite-movie-spielberg-oscars.html">this story</a></span>

Another issue was the image cropping on desktop vs. mobile. Initially when I mocked it up, I thought the full-width and split-top layouts would have the same crop on mobile (horizontal image). But, in development, JZ said it was much easier to keep the same crop across all screen sizes. I thought this also looked good so we went with this. 

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="new layout for story about a catholic priest" src="/img/CS_split_top/mobile_mock.png">
		<span class="caption">Mobile mock</span>
	</div>
	<div class="img-flex-50">
		<img alt="new layout for story about a catholic priest" src="/img/CS_split_top/mobile_prod.png">
		<span class="caption">Mobile view in production</span>
	</div>
</div>

Development was lead by [Jonathan Zuckerman](https://twitter.com/jon47) and product management was lead by [Chris Schieffer](https://twitter.com/cschieffer). Big thanks to [Lisa Larson-Walker](https://twitter.com/lrsnwlkr) for the idea and reviewing the initial mocks and [Abby McIntyre](https://twitter.com/abbjmc), [Megan Wiegand](https://twitter.com/mwieg), [Holly Allen](https://twitter.com/hollyloo), [Natalie Matthews-Ramo](https://twitter.com/MatthewsRamo) and [Derreck Johnson](https://twitter.com/DeePhunk) for reviewing this many times during development. 

## Usage

Here are some examples of the split-top layout being used: 

- [COVID school reopening](https://slate.com/human-interest/2020/07/reopening-schools-teachers-coronavirus-risks.html) by Dan Kois, July 19, 2020
- [Slate's Favorite Podcast Episodes of 2020](https://slate.com/human-interest/2020/11/favorite-podcast-episodes-2020.html) by various Slate staff, December 01, 2020
- [The Most Influential 80-Plus-Year-Olds in America](https://slate.com/human-interest/2020/12/80-over-80-most-influential-top-20.html) by Molly Olmstead & various Slate staff, December, 22, 2020
