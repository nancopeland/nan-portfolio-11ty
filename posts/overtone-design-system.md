---
title: Overtone Design System
description: A new design system for migrating from Chorus to Wordpress
---

I managed the migration of [Vox](https://www.vox.com/), [The Verge](https://www.theverge.com/), [Eater](https://www.eater.com/) and [SB Nation](https://www.sbnation.com/) to the design system, Overtone, that I built 0-1. The migration was part of a larger project where we migrated these sites from Chorus to Wordpress. This project involved balancing design, product, editorial and engineering needs with good user experience and bespoke brand expression for each site. Design management specifically wanted designers to be able to manage the type, spacing and color details for each site.

<img-flex cols="4">
	<img-card src="/img/overtone_design_system/standard_vox.png" alt="standard article template, vox">standard article template, Vox</img-card>
	<img-card src="/img/overtone_design_system/standard_verge.png" alt="standard article template, the verge">standard article template, The Verge</img-card>
	<img-card src="/img/overtone_design_system/standard_eater.png" alt="standard article template, eater">standard article template, Eater</img-card>
	<img-card src="/img/overtone_design_system/standard_sbn.png" alt="standard article template, SBNation">standard article template, SBNation</img-card>
</img-flex>

## Project Goals

I spoke with design, product, engineering and editorial stakeholders and we decided on these goals: 

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

To set up a new site, a brand could set 1-2 fonts and 1-2 colors and use default layouts for everything. But, if a brand wanted to spend a lot more time customizing both their branding and tooling, that would also work within the system. 

<img-flex cols="3">
	<img-card src="/img/overtone_design_system/content_card_1.png" alt="content card, default theme">content card, default theme</img-card>
	<img-card src="/img/overtone_design_system/content_card_2.png" alt="content card, eater theme w/ fonts">content card, eater theme w/ fonts</img-card>
	<img-card src="/img/overtone_design_system/content_card_3.png" alt="content card, eater theme w/ fonts, colors & finetuning">content card, eater theme w/ fonts, colors & finetuning</img-card>
</img-flex>

To achieve this, the system uses shared [design tokens](https://m3.material.io/foundations/design-tokens/overview) that are assigned to shared elements between the sites. The tokens have different styles (aka values) so each site can have different fonts, colors, etc. but be on the same system. 

| token name | Vox | The Verge | Eater | SBNation |
| :-------- | :-------- | :-------- | :-------- | :-------- |
| `sys.color.primary`  | `#FFF200`  | `#5200FF`  | `#E60000`  | `#0033FF`  |
| `sys.font.primary`  | Balto  | Poly Sans  | Degular  | Druk  |

## Articles

There are 2 main article templates and a shared set of article body components. The system used for articles is the most comprehensive and powerful part of the design system because any tooling designed for one brand is available for the other brands, if they choose to incorporate it.

<div class="img-flex-wrapper">
    <img alt="Standard article template + some tokens labelled on Vox" src="/img/overtone_design_system/standard_article_tkns_vox.jpg">
    <span class="caption">Standard article template + some tokens labelled on Vox</span>
</div>
<div class="img-flex-wrapper">
    <img alt="Standard article template + some tokens labelled on The Verge" src="/img/overtone_design_system/standard_article_tkns_verge.jpg">
    <span class="caption">Standard article template + some tokens labelled on The Verge</span>
</div>
<div class="img-flex-wrapper">
    <img alt="Standard article template + some tokens labelled on Eater" src="/img/overtone_design_system/standard_article_tkns_eater.jpg">
    <span class="caption">Standard article template + some tokens labelled on Eater</span>
</div>
<div class="img-flex-wrapper">
    <img alt="Standard article template + some tokens labelled on SBNation" src="/img/overtone_design_system/standard_article_tkns_sbn.jpg">
    <span class="caption">Standard article template + some tokens labelled on SBNation</span>
</div>

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

The article body components are more standardized compared to the ledes but still allow for customization, if the brand chooses to do that. 

<img-flex cols="2">
	<img-card src="/img/overtone_design_system/paragraph_vox.png" alt="paragraph components on Vox">paragraph components on Vox</img-card>
	<img-card src="/img/overtone_design_system/paragraph_verge.png" alt="paragraph components on The Verge">paragraph components on The Verge</img-card>
</img-flex>
<img-flex cols="2">
	<img-card src="/img/overtone_design_system/paragraph_eater.png" alt="paragraph components on Eater">paragraph components on Eater</img-card>
	<img-card src="/img/overtone_design_system/paragraph_sbn.png" alt="paragraph components on SBNation">paragraph components on SBNation</img-card>
</img-flex>
<img-flex cols="2">
	<img-card src="/img/overtone_design_system/sidebar_vox.png" alt="sidebar component on Vox">sidebar component on Vox</img-card>
	<img-card src="/img/overtone_design_system/sidebar_eater.png" alt="sidebar component on Eater">sidebar component on Eater</img-card>
</img-flex>
<img-flex cols="2">
	<img-card src="/img/overtone_design_system/product_verge.png" alt="product card on The Verge">product card on The Verge</img-card>
	<img-card src="/img/overtone_design_system/product_eater.png" alt="product card on Eater">product card on Eater</img-card>
</img-flex>

## Navigation

Navigation has some standardized parts and some highly customizable parts. The nav that is at the top of the page is customizable in terms of layout but is made up of the same components (logo, category links, hamburger menu button) while the menu that pulls out from the hamburger menu icon has a standardized layout but allows for color and type styling. 

<div class="img-flex-wrapper">
    <img alt="default nav" src="/img/overtone_design_system/nav_usd.jpg">
    <span class="caption">default nav</span>
</div>
<div class="img-flex-wrapper">
    <img alt="nav on Vox" src="/img/overtone_design_system/nav_vox.jpg">
    <span class="caption">nav on Vox</span>
</div>
<div class="img-flex-wrapper">
    <img alt="nav on Eater" src="/img/overtone_design_system/nav_eater.jpg">
    <span class="caption">nav on Eater</span>
</div>

For The Verge, the navigation background color is transparent and the logo and text color change depending on page layout. For SBNation, there are 2 layouts based on if its the main SBNation site or a team site. 

<div class="img-flex-wrapper">
    <img alt="nav on The Verge" src="/img/overtone_design_system/nav_verge.jpg">
    <span class="caption">nav on The Verge</span>
</div>
<div class="img-flex-wrapper">
    <img alt="nav on SBNation" src="/img/overtone_design_system/nav_sbn.jpg">
    <span class="caption">nav on SBNation</span>
</div>

## Homepage

The homepage is the most customizable layout in the system. It has no default layout but instead is customized for each site with reusable components such as newsletter, most popular and content card pattern components (ex. 3 grid, 5 grid, 6up, etc). 

<div class="img-flex-wrapper">
    <img alt="homepage on Vox" src="/img/overtone_design_system/homepage_vox.jpg">
    <span class="caption">homepage on Vox</span>
</div>
<div class="img-flex-wrapper">
    <img alt="homepage on Eater" src="/img/overtone_design_system/homepage_eater.jpg">
    <span class="caption">homepage on Eater</span>
</div>