---
title: <i>New York</i> Magazine Perks Program
description: NYC-based perks program for subscribers
---

I recently worked on the [_New York_ magazine perks program](https://nymag.com/perks) which offers NYC-based perks for subscribers. The perks program is primarily an additional benefit for current subscribers but ideally could attact new subscribers. 

<div class="mobile-img">
    <img alt="perks UX" src="/img/nym_perks/perks_final_ux.gif">
    <span class="caption">perks redemption user experience in the <i>New York</i> Magazine app</span>
</div>

## Initial Idea

The original idea was each perk would have an Apple wallet pass that each subscriber would add and they would show it at the vendor to redeem the perk. The pass gave the vendor a way to scan the subscriber's perk and make sure that each subscriber only redeemed each perk once. 

But, there were concerns that subscribers would add the pass before they were at the business and then have trouble finding them in their Apple wallet. 

<!--<div class="img-flex-wrapper">
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

The marketing team started looking into vendors and most of the initial vendors who agreed to participate were better fits for the wallet pass perk type. So, I decided to focus only on that experience for the MVP. -->


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
<!--<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="alt pass design" src="/img/nym_perks/pass_alt1.png">
		<span class="caption">alt pass design</span>
	</div>
    <div class="img-flex-50">
		<img alt="alt pass design" src="/img/nym_perks/pass_alt2.png">
		<span class="caption">alt pass design</span>
	</div>
</div>-->

## MVP Launch

Because of the wallet pass concerns, we decided to design a custom experience that doesn't have a barcode and the subscriber doesn't have to leave the landing page. I added a screen that asked if the subscriber is at the vendor before redeeming the perk and then, the vendor could look at the timestamp to check that the perk was redeemed recently.

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
<!--<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="redeemed stamp on perk" src="/img/nym_perks/mvp_flow4.png">
		<span class="caption">redeemed stamp on perk</span>
	</div>
    <div class="img-flex-50">
		<img alt="receipt screen" src="/img/nym_perks/mvp_flow5.png">
		<span class="caption">receipt screen</span>
	</div>
</div>-->

This flow worked but we noticed that with the first perk (free coffee and cardamom bun at [La Cabra](https://lacabra.com/)), subscribers were flying thru the flow and redeeming the perk before they were at one of the La Cabra locations. I needed to add some steps that slowed them down and made sure they were physically at the vendor's establishment. 

## Post-MVP Refinements

Before the [Balthazar](https://balthazarny.com/) perk launched, we updated the flow to ask the user if they were at the vendor and added a "no, i'm not there yet" button. When I showed this to a few users, this worked well to slow everyone down so they didn't click the buttons without reading the copy.

This update resulted in a 98% conversion rate for perk redemption. 

<!--To make the perks page feel more _New York_ Magazine-branded and less marketing-y, the design team suggested using custom illustrations for each perk. They decided to go with [Leon Edler](https://www.leillo.com/) who did some very cute illustrations for the first round of perks. -->

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

## Account Center

The perks experience also works from the account center in case subscribers went there looking for their perks. 

<div class="img-flex-wrapper">
	<div class="img-flex-25">
		<img alt="perks experience from NYMag Account Center" src="/img/nym_perks/acct_center1.jpg">
		<span class="caption">perks experience from NYMag Account Center</span>
	</div>
	<div class="img-flex-25">
		<img alt="perks experience from NYMag Account Center" src="/img/nym_perks/acct_center2.jpg">
		<span class="caption">perks experience from NYMag Account Center</span>
	</div>
	<div class="img-flex-25">
		<img alt="perks experience from NYMag Account Center" src="/img/nym_perks/acct_center3.jpg">
		<span class="caption">perks experience from NYMag Account Center</span>
	</div>
	<div class="img-flex-25">
		<img alt="perks experience from NYMag Account Center" src="/img/nym_perks/acct_center4.jpg">
		<span class="caption">perks experience from NYMag Account Center</span>
	</div>
</div>