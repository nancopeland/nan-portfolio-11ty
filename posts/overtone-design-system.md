---
title: Overtone Design System
description: A new design system for migrating from Chorus to Wordpress
---

I managed the migration of [Vox](https://www.vox.com/), [The Verge](https://www.theverge.com/), [Eater](https://www.eater.com/) and [SB Nation](https://www.sbnation.com/) from the Chorus CMS to Wordpress which included migrating from the Chorus front-end to the new design system, Overtone. Design management wanted the front-end to run on the same system but also allow for bespoke brand expression and for a designer to be able to manage the small details, especially type styling.

<img-flex cols="4">
	<img-card src="/img/overtone_design_system/standard_vox.png" alt="standard article template, vox">standard article template, Vox</img-card>
	<img-card src="/img/overtone_design_system/standard_verge.png" alt="standard article template, the verge">standard article template, The Verge</img-card>
	<img-card src="/img/overtone_design_system/standard_eater.png" alt="standard article template, eater">standard article template, Eater</img-card>
	<img-card src="/img/overtone_design_system/standard_sbn.png" alt="standard article template, SBNation">standard article template, SBNation</img-card>
</img-flex>

## Project Goals

This was a pretty involved project that required input from design, product, engineering and editorial stakeholders. 

* Same front-end system 
* Designer-managed tokens
* Well-designed default layouts
* Bespoke brand expression
* System that allows for custom design + engineering work when necessary

## Setup & Tokens

The goal was for each site to look good out of the box when it migrated to Wordpress but also allow varying levels of customization, depending on the brand's visual and editorial needs. 

<div class="img-flex-wrapper">
    <img alt="Feature article template on Vox" src="/img/overtone_design_system/overtone_standard_article.jpg">
    <span class="caption">Default standard article template</span>
</div>
<div class="img-flex-wrapper">
    <img alt="Feature article template on Vox" src="/img/overtone_design_system/overtone_category.jpg">
    <span class="caption">Default category page template</span>
</div>

To set up a new site, a brand could set 1-2 fonts and 1-2 colors and use default layouts for everything. But if a brand wanted to spend a lot more time customizing both their branding and tooling, that would also work within the system. 

<img-flex cols="3">
	<img-card src="/img/overtone_design_system/content_card_1.png" alt="content card, default theme">content card, default theme</img-card>
	<img-card src="/img/overtone_design_system/content_card_2.png" alt="content card, eater theme w/ fonts">content card, eater theme w/ fonts</img-card>
	<img-card src="/img/overtone_design_system/content_card_3.png" alt="content card, eater theme w/ fonts, colors & finetuning">content card, eater theme w/ fonts, colors & finetuning</img-card>
</img-flex>

To achieve this, the system uses shared [design tokens](https://m3.material.io/foundations/design-tokens/overview) that are assigned to shared elements between the sites. The tokens have different styles (aka values) so each site can have different fonts, colors, etc. but be on the same system. 

So, in the code, tokens look something like this: 

| token name | Vox | The Verge | Eater | SBNation |
| :-------- | :-------- | :-------- | :-------- | :-------- |
| `sys.color.primary`  | `#FFF200`  | `#5200FF`  | `#E60000`  | `#0033FF`  |
| `sys.font.primary`  | Balto  | Poly Sans  | Degular  | Druk  |

But visually, that looks like this: 

<div class="img-flex-wrapper">
    <img alt="Standard article template on desktop and mobile with a few tokens labelled" src="/img/overtone_design_system/overtone_standard_articles.gif">
    <span class="caption">Standard article template on desktop and mobile with a few tokens labelled</span>
</div>

## Articles

In addition to the standard lede (illustrated above), there are also feature, special feature and overlay ledes and a shared set of article body components. The system used for articles is the most comprehensive and powerful part of the design system because any tooling designed for one brand is available for the other brands, if they choose to incorporate it. 

<div class="img-flex-wrapper">
    <img alt="Feature article template on Vox" src="/img/overtone_design_system/overtone_feature_article_tkns_vox.jpg">
    <span class="caption">Feature article template on Vox</span>
</div>
<div class="img-flex-wrapper">
    <img alt="Feature article template on The Verge" src="/img/overtone_design_system/overtone_feature_article_tkns_verge.jpg">
    <span class="caption">Feature article template on The Verge</span>
</div>
<div class="img-flex-wrapper">
    <img alt="Feature article template on Eater" src="/img/overtone_design_system/overtone_feature_article_tkns_eater.jpg">
    <span class="caption">Feature article template on Eater</span>
</div>
<img-flex cols="2">
	<img-card src="/img/overtone_design_system/paragraph_vox.png" alt="paragraph components on Vox">paragraph components on Vox</img-card>
	<img-card src="/img/overtone_design_system/paragraph_verge.png" alt="paragraph components on The Verge">paragraph components on The Verge</img-card>
</img-flex>
<img-flex cols="2">
	<img-card src="/img/overtone_design_system/paragraph_eater.png" alt="paragraph components on Eater">paragraph components on Eater</img-card>
	<img-card src="/img/overtone_design_system/paragraph_sbn.png" alt="paragraph components on SBNation">paragraph components on SBNation</img-card>
</img-flex>
<img-flex cols="3">
	<img-card src="/img/overtone_design_system/sidebar_vox.png" alt="sidebar component on Vox">sidebar component on Vox</img-card>
	<img-card src="/img/overtone_design_system/sidebar_verge.png" alt="sidebar component on The Verge">sidebar component on The Verge</img-card>
	<img-card src="/img/overtone_design_system/sidebar_eater.png" alt="sidebar component on Eater">sidebar component on Eater</img-card>
</img-flex>
<img-flex cols="2">
	<img-card src="/img/overtone_design_system/product_verge.png" alt="product card on The Verge">product card on The Verge</img-card>
	<img-card src="/img/overtone_design_system/product_eater.png" alt="product card on Eater">product card on Eater</img-card>
</img-flex>

## Homepages & Navigation

Hompages and navigation are 2 of the areas of the system that allow for the most customization. The homepages obviously needed to be different based editorial needs. Vox is more newsy so could use more standard components while Eater focuses on service journalism and city-specific content. The navs are similar but also need to showcase the brand and what it covers because it is at the top of every page. 

<div class="img-flex-wrapper">
    <img alt="navs across brands" src="/img/overtone_design_system/all_navs.jpg">
    <span class="caption">Same list of links in different nav layouts</span>
</div>

For both areas, there are a set of shared components that can be arranged differently. This allows for different programming and design layout based on the brand’s needs and visual language.

<img-flex cols="2">
	<img-card src="/img/overtone_design_system/homepage_mobile_vox.jpg" alt="Shared components on Vox mobile homepage">Shared components on Vox mobile homepage</img-card>
	<img-card src="/img/overtone_design_system/homepage_mobile_eater.jpg" alt="Shared components on Eater mobile homepage">Shared components on Eater mobile homepage</img-card>
</img-flex>
<img-flex cols="2">
	<img-card src="/img/overtone_design_system/homepage_desktop_vox.jpg" alt="Shared components on Vox desktop homepage">Shared components on Vox desktop homepage</img-card>
	<img-card src="/img/overtone_design_system/homepage_desktop_eater.jpg" alt="Shared components on Eater desktop homepage">Shared components on Eater desktop homepage</img-card>
</img-flex>