---
title: <i>New York</i> Magazine Perks Program
description: NYC-based perks program for subscribers
---

I recently worked on the [_New York_ magazine perks program](https://nymag.com/perks) which offers NYC-based perks for subscribers. The perks program is supposed to be an additional benefit for current subscribers and ideally attact new subscribers. 

<div class="mobile-img">
    <img alt="perks UX" src="/img/nym_perks/perks_final_ux.gif">
    <span class="caption">perks redemption user experience in the <i>New York</i> Magazine app</span>
</div>

## Initial Ideas

The original idea for perks was that there would be two types of perks: promo code and wallet pass and the marketing team would decide which type was best for each vendor. 

<div class="img-flex-wrapper">
	<div class="img-flex-33">
		<img alt="design exploration for perks" src="/img/nym_perks/initial_mock1.png">
	</div>
	<div class="img-flex-33">
		<img alt="design exploration for perks" src="/img/nym_perks/initial_mock2.png">
	</div>
    <div class="img-flex-33">
		<img alt="design exploration for perks" src="/img/nym_perks/initial_mock3.png">
	</div>
</div>

The marketing team started looking into vendors and most of the initial vendors who agreed to participate were better fits for the wallet pass perk type. So, I decided to focus only on that experience for the MVP. 

<div class="img-flex-wrapper">
	<div class="img-flex-33">
		<img alt="step 1 of pass UX" src="/img/nym_perks/pass_ux1.png">
		<span class="caption">step 1 - "add to wallet" button</span>
	</div>
	<div class="img-flex-33">
		<img alt="step 2 of pass UX" src="/img/nym_perks/pass_ux2.png">
		<span class="caption">step 2 - 3rd party pass popup</span>
	</div>
    <div class="img-flex-33">
		<img alt="step 3 of pass UX" src="/img/nym_perks/pass_ux3.png">
		<span class="caption">step 3 - native Apple "add to wallet"</span>
	</div>
</div>
<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="alt pass design" src="/img/nym_perks/pass_alt1.png">
		<span class="caption">alt pass design</span>
	</div>
    <div class="img-flex-50">
		<img alt="alt pass design" src="/img/nym_perks/pass_alt2.png">
		<span class="caption">alt pass design</span>
	</div>
</div>

Then, the wallet pass vendor we were originally looking into was a bit difficult for both product and marketing to use. It also was too expensive so we decided to design a native redemption experience. This gave me more control over the design but also was a bit difficult because we no longer had a bar code for the vendor to scan. How can we make sure users don't redeem the perk more than once? 

## MVP Launch

For the MVP, we decided to have a screen that asked if the subscriber is at the vendor before redeeming the perk. Then, someone who works for the vendor (cashier, server, barista, etc) could look at the timestamp to see check that the perk was redeemed recently.

<div class="img-flex-wrapper">
	<div class="img-flex-33">
		<img alt="step 1 - redeem button" src="/img/nym_perks/mvp_flow1.png">
		<span class="caption">step 1 - "redeem" button</span>
	</div>
	<div class="img-flex-33">
		<img alt="step 2 - are you there? screen" src="/img/nym_perks/mvp_flow2.png">
		<span class="caption">step 2 - "are you there?" screen</span>
	</div>
    <div class="img-flex-33">
		<img alt="step 3 - redeemed screen" src="/img/nym_perks/mvp_flow3.png">
		<span class="caption">step 3 - redeemed screen</span>
	</div>
</div>
<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="redeemed stamp on perk" src="/img/nym_perks/mvp_flow4.png">
		<span class="caption">redeemed stamp on perk</span>
	</div>
    <div class="img-flex-50">
		<img alt="receipt screen" src="/img/nym_perks/mvp_flow5.png">
		<span class="caption">receipt screen</span>
	</div>
</div>

This flow worked but we noticed that with the first perk (free coffee and cardamom bun at [La Cabra](https://lacabra.com/)), subscribers were flying thru the flow and redeeming the perk before they were at one of the La Cabra locations. I needed to add some steps that slowed them down and made sure they were physically at the vendor's establishment. 

## Post-MVP Updates

Before the [Balthazar](https://balthazarny.com/) perk launched, we updated the flow to ask the user if they were there and specifically have a "no, i'm not there yet" button. When I showed this to a few users, this worked well to slow everyone down so they didn't click the buttons without reading the copy.

To make the perks page feel more _New York_ Magazine-branded and less marketing-y, the design team suggested using custom illustrations for each perk. They decided to go with [Leon Edler](https://www.leillo.com/) who did some amazing and very cute illustrations for the first round of perks. 

<div class="img-flex-wrapper">
	<div class="img-flex-25">
		<img alt="step 1 - redeem in-store button" src="/img/nym_perks/final_flow1.png">
		<span class="caption">step 1 - "redeem in-store" button</span>
	</div>
	<div class="img-flex-25">
		<img alt="step 2 - yes/no buttons" src="/img/nym_perks/final_flow2.png">
		<span class="caption">step 2 - yes/no buttons</span>
	</div>
    <div class="img-flex-25">
		<img alt="step 3 - activate perk" src="/img/nym_perks/final_flow3.png">
		<span class="caption">step 3 - activate perk</span>
	</div>
    <div class="img-flex-25">
		<img alt="step 4 - show to team member" src="/img/nym_perks/final_flow4.png">
		<span class="caption">step 4 - show to team member</span>
	</div>
</div>