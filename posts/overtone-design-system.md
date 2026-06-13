---
title: Overtone Design System
description: A new design system for migrating from Chorus to Wordpress
---

I managed the migration of [Vox](https://www.vox.com/), [The Verge](https://www.theverge.com/), [Eater](https://www.eater.com/) and [SB Nation](https://www.sbnation.com/) from the Chorus CMS to Wordpress which included migrating from the Chorus front-end to the new design system, Overtone. Design management wanted the front-end to run on the same system but also allow for bespoke brand expression and for a designer to be able to manage the small details, especially type styling.

<div class="img-flex-wrapper">
	<div class="img-flex-25">
		<img alt="standard article template, vox" src="/img/overtone_design_system/standard_vox.png">
		<span class="caption">standard article template, Vox</span>
	</div>
    <div class="img-flex-25">
		<img alt="standard article template, the verge" src="/img/overtone_design_system/standard_verge.png">
		<span class="caption">standard article template, The Verge</span>
	</div>
    <div class="img-flex-25">
		<img alt="standard article template, eater" src="/img/overtone_design_system/standard_eater.png">
		<span class="caption">standard article template, Eater</span>
	</div>
    <div class="img-flex-25">
		<img alt="standard article template, SBNation" src="/img/overtone_design_system/standard_sbn.png">
		<span class="caption">standard article template, SBNation</span>
	</div>
</div>

## Project Goals

This was a pretty involved project that took years with input from design, product, engineering and editorial stakeholders. 

* Same front-end system 
* Designer-managed tokens
* Well-designed default layouts
* Bespoke brand expression
* System that allows for custom design + engineering work when necessary

## Setup & Tokens

The goal was for each site to look good out of the box when it migrated to Wordpress but also allow varying levels of customization, depending on the brand's visual and editorial needs. 

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

To set up a new site, a brand could set 1-2 fonts and 1-2 colors and use default layouts for everything. But if a brand wanted to spend a lot more time customizing both their branding and tooling, that would also work within the system. 

<div class="img-flex-wrapper">
    <img alt="Feature article template on Vox" src="/img/overtone_design_system/overtone_standard_article.jpg">
    <span class="caption">Default standard article template</span>
</div>
<div class="img-flex-wrapper">
    <img alt="Feature article template on Vox" src="/img/overtone_design_system/overtone_category.jpg">
    <span class="caption">Default category page template</span>
</div>
<div class="img-flex-wrapper">
	<div class="img-flex-33">
		<img alt="content card, default theme" src="/img/overtone_design_system/content_card_1.png">
		<span class="caption">content card, default theme</span>
	</div>
	<div class="img-flex-33">
		<img alt="content card, eater theme w/ fonts" src="/img/overtone_design_system/content_card_2.png">
		<span class="caption">content card, eater theme w/ fonts</span>
	</div>
    <div class="img-flex-33">
		<img alt="content card, eater theme w/ fonts, colors & finetuning" src="/img/overtone_design_system/content_card_3.png">
		<span class="caption">content card, eater theme w/ fonts, colors & finetuning</span>
	</div>
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
<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="paragraph components on Vox" src="/img/overtone_design_system/paragraph_vox.png">
		<span class="caption">paragraph components on Vox</span>
	</div>
	<div class="img-flex-50">
		<img alt="paragraph components on The Verge" src="/img/overtone_design_system/paragraph_verge.png">
		<span class="caption">paragraph components on The Verge</span>
	</div>
</div>
<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="paragraph components on Eater" src="/img/overtone_design_system/paragraph_eater.png">
		<span class="caption">paragraph components on Eater</span>
	</div>
	<div class="img-flex-50">
		<img alt="paragraph components on SBNation" src="/img/overtone_design_system/paragraph_sbn.png">
		<span class="caption">paragraph components on SBNation</span>
	</div>
</div>
<div class="img-flex-wrapper">
	<div class="img-flex-33">
		<img alt="sidebar component on Vox" src="/img/overtone_design_system/sidebar_vox.png">
		<span class="caption">sidebar component on Vox</span>
	</div>
	<div class="img-flex-33">
		<img alt="sidebar component on The Verge" src="/img/overtone_design_system/sidebar_verge.png">
		<span class="caption">sidebar component on The Verge</span>
	</div>
    <div class="img-flex-33">
		<img alt="sidebar component on Eater" src="/img/overtone_design_system/sidebar_eater.png">
		<span class="caption">sidebar component on Eater</span>
	</div>
</div>
<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="product card on The Verge" src="/img/overtone_design_system/product_verge.png">
		<span class="caption">product card on The Verge</span>
	</div>
	<div class="img-flex-50">
		<img alt="product card on Eater" src="/img/overtone_design_system/product_eater.png">
		<span class="caption">product card on Eater</span>
	</div>
</div>

_more about Overtone coming soon..._

<!--## Homepages

For homepages, there are a set of shared components that can be arranged differently. This allows for different programming based on the brand’s needs. Each brand can also add new components based on what they want to feature on their homepage.

[screenshot of same pattern on diff homepages, 3grid on Vox, Eater & SBN] 
[screenshot of top of each homepage?]
[screenshot of bespoke HP components]-->
