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

But, there were concerns that subscribers would add the pass before they were at the venue and then have trouble finding the pass in their Apple wallet. 

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


<img-flex cols="3">
	<img-card src="/img/nym_perks/pass_ux1.png" alt="step 1 of pass UX">step 1 - "add to wallet" button</img-card>
	<img-card src="/img/nym_perks/pass_ux2.png" alt="step 2 of pass UX">step 2 - 3rd party pass popup</img-card>
	<img-card src="/img/nym_perks/pass_ux3.png" alt="step 3 of pass UX">step 3 - native Apple "add to wallet"</img-card>
</img-flex>
<!--<img-flex cols="2">
	<img-card src="/img/nym_perks/pass_alt1.png" alt="alt pass design">alt pass design</img-card>
	<img-card src="/img/nym_perks/pass_alt2.png" alt="alt pass design">alt pass design</img-card>
</img-flex>-->

## MVP Launch

Because of the wallet pass concerns, we decided to design a custom experience that doesn't have a barcode and the subscriber doesn't have to leave the landing page. I added a screen that asked if the subscriber is at the vendor before redeeming the perk and then, the vendor could look at the timestamp to check that the perk was redeemed recently.

<img-flex cols="3">
	<img-card src="/img/nym_perks/mvp_flow1.png" alt="step 1 - redeem button">step 1 - "redeem" button</img-card>
	<img-card src="/img/nym_perks/mvp_flow2.png" alt="step 2 - are you there? screen">step 2 - "are you there?" screen</img-card>
	<img-card src="/img/nym_perks/mvp_flow3.png" alt="step 3 - redeemed screen">step 3 - redeemed screen</img-card>
</img-flex>

This flow worked but we noticed that with the first perk (free coffee and cardamom bun at [La Cabra](https://lacabra.com/)), subscribers were flying thru the flow and redeeming the perk before they were at one of the La Cabra locations. I needed to add some steps that slowed them down and made sure they were physically at the vendor's establishment. 

## Post-MVP Refinements

Before the [Balthazar](https://balthazarny.com/) perk launched, we updated the flow to ask the user if they were at the vendor and added a "no, i'm not there yet" button. I also updated the initial button text to "redeem in-store". When I showed the new experience to a few users, I noticed users were actually reading the copy instead of just clicking the buttons.

This update resulted in a 98% conversion rate for perk redemption. 

<!--To make the perks page feel more _New York_ Magazine-branded and less marketing-y, the design team suggested using custom illustrations for each perk. They decided to go with [Leon Edler](https://www.leillo.com/) who did some very cute illustrations for the first round of perks. -->

<img-flex cols="4">
	<img-card src="/img/nym_perks/final_flow1.png" alt="step 1 - redeem in-store button">step 1 - "redeem in-store" button</img-card>
	<img-card src="/img/nym_perks/final_flow2.png" alt="step 2 - yes/no buttons">step 2 - yes/no buttons</img-card>
	<img-card src="/img/nym_perks/final_flow3.png" alt="step 3 - activate perk">step 3 - activate perk</img-card>
	<img-card src="/img/nym_perks/final_flow4.png" alt="step 4 - show to team member">step 4 - show to team member</img-card>
</img-flex>

## Account Center

The perks experience also works from the account center in case subscribers went there looking for their perks. 

<img-flex cols="4">
	<img-card src="/img/nym_perks/acct_center1.jpg" alt="perks experience from NYMag Account Center">perks experience from NYMag Account Center</img-card>
	<img-card src="/img/nym_perks/acct_center2.jpg" alt="perks experience from NYMag Account Center">perks experience from NYMag Account Center</img-card>
	<img-card src="/img/nym_perks/acct_center3.jpg" alt="perks experience from NYMag Account Center">perks experience from NYMag Account Center</img-card>
	<img-card src="/img/nym_perks/acct_center4.jpg" alt="perks experience from NYMag Account Center">perks experience from NYMag Account Center</img-card>
</img-flex>