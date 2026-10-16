---
title: Eater Perks
description: Creating an Eater Perks experience using Cursor
---

Eater decided they wanted a [perks experience like _New York_ Magazine](/nym-perks/). They wanted their perks to be connected to Eater Awards and have different perks for each cities but the core perk redemption experience would be the same. Because I had already designed the core experience for New York Magazine, I figured we could move quicker using Cursor.

## Initial Prototype

To start the project, I worked with product on what specific features we wanted from the _New York_ Magazine experience vs. which features we needed to add: 

1. City Picker - Eater wants different sets of perks for each city instead of a centralized landing page for all perks so I need to give the user the option to select the city they're interested in. 
2. Sign In - For _New York_ Magazine, there was a "sign in" button at the top of the page if you weren't logged in. For Eater, we decided to have a small "sign in" link at the top but if you weren't logged in, the sign in form would appear in a modal when you click "redeem in-store." 
3. Eater Awards branding - This editorial project had specific branding and the perks experience is part of that project. This meant we could use global components but we might need to tweak their styling so the page felt more like a branded landing page, not part of the general site. 

Because the rest of the flow had already been tested and finalized for [_New York_ Magazine](/nym-perks/), I moved straight to prototyping for Eater. I built a prototype using global Eater components (buttons, sign in forms, headings, etc) with the new Eater-specific features. 

<div class="mobile-img">
    <video autoplay loop muted playsinline width="100%">
        <source src="/img/eater_perks/initial_eater_perks_signin.mp4" type="video/mp4">
    </video>
    <span class="caption">city picker and sign in modal</span>
</div>

<div class="mobile-img">
    <video autoplay loop muted playsinline width="100%">
        <source src="/img/eater_perks/initial_eater_perks_flow.mp4" type="video/mp4">
    </video>
    <span class="caption">full flow if you're logged in</span>
</div>

## Design Iterations

I sent this prototype for product, engineering and marketing so they would have a general idea of how the page would work. Then, I moved on to updating the visual design for the page to fit with the Eater Awards branding. 

The Eater creative director sent me some of the work she'd done for Eater Awards so I could base the perks visual design off of it. 

<div class="img-flex-wrapper">
    <img alt="design for 1 award category" src="/img/eater_perks/brittany_1.png">
    <span class="caption">design for 1 award category</span>
</div>
<div class="img-flex-wrapper">
    <img alt="design for all award categories" src="/img/eater_perks/brittany_2.png">
    <span class="caption">design for all award categories</span>
</div>

I jumped back into Figma to try a few quick ideas consistent with the Eater Awards branding. Cursor is great for prototyping but for quickly iterating and comparing design mocks, I still find Figma to be quicker. I liked having different colored backgrounds on each perk but I wanted to see which type and layout was best, especially when considering the redeemed state change. 

<img-flex cols="4">
	<img-card src="/img/eater_perks/perks_idea1.jpg" alt="perk design option">perk design option</img-card>
	<img-card src="/img/eater_perks/perks_idea2.jpg" alt="perk design option">perk design option</img-card>
	<img-card src="/img/eater_perks/perks_idea3.jpg" alt="perk design option">perk design option</img-card>
	<img-card src="/img/eater_perks/perks_idea4.jpg" alt="perk design option">perk design option</img-card>
</img-flex>

<img-flex cols="4">
	<img-card src="/img/eater_perks/redeemed1.jpg" alt="redeemed design option">redeemed design option</img-card>
	<img-card src="/img/eater_perks/redeemed2.jpg" alt="redeemed design option">redeemed design option</img-card>
	<img-card src="/img/eater_perks/redeemed3.jpg" alt="redeemed design option">redeemed design option</img-card>
	<img-card src="/img/eater_perks/redeemed4.jpg" alt="redeemed design option">redeemed design option</img-card>
</img-flex>

## Final Prototype & Handoff

The creative director liked perk design option #2 and redeemed design option #4 so I prompted Cursor to update the original prototype to reflect these designs. When I was playing around with this prototype, I decided it would be nice to be able to go back to the city picker step so I added a small unit between the header and the first perk that allowed the user to do that. 

[gif of updated prototype]

Once the prototype was cleaned up, I passed it over to an engineer (via a Github PR). I had reviewed the front-end code and felt good about it but the engineer needed to review the authentication and also hook up a redeemed perk to the user's data so that information was saved across the user's profile. The engineer also wanted to set up different URLs for each city's perks landing page. Otherwise, I was able to complete most of the code via Cursor. 
