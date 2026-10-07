---
title: <i>New York</i> Magazine Perks Program
description: NYC-based perks program for subscribers
---

I recently worked on the [_New York_ magazine perks experience](https://nymag.com/perks) which offers NYC-based perks for subscribers. I designed the end-to-end experience and also conducted user research post-launch. 

<div class="mobile-img">
    <img alt="perks UX" src="/img/nym_perks/perks_final_ux.gif">
    <span class="caption">perks redemption user experience in the <i>New York</i> Magazine app</span>
</div>

## Goals

1. Additional benefit for subscribers, meant to reduce subscriber churn
2. Smooth user experience for subscribers and vendors
3. Shared components between landing page & account center
4. Prioritize quick build, can tweak experience post-launch

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


<img-flex cols="4">
	<img-card src="/img/nym_perks/pass_ux1.png" alt="step 1 of pass UX">step 1 - "add to wallet" button</img-card>
	<img-card src="/img/nym_perks/pass_ux2.png" alt="step 2 of pass UX">step 2 - 3rd party pass popup</img-card>
	<img-card src="/img/nym_perks/pass_ux3.png" alt="step 3 of pass UX">step 3 - native Apple "add to wallet"</img-card>
	<img-card src="/img/nym_perks/pass_alt1.png" alt="alt pass design">alt pass design</img-card>
</img-flex>

## MVP Launch

For the MVP, we decided to change directions and design a native experience that doesn't have a barcode and the subscriber doesn't have to leave the landing page. There were concerns about wallet pass navigation and also the 3rd party vendor that marketing was using to manage the passes was very difficult to use. 

For the native flow, I added a screen that asked if the subscriber is at the vendor before redeeming the perk and then we instructed vendors to look at the timestamp to check that the perk was redeemed recently.

<img-flex cols="4">
	<img-card src="/img/nym_perks/mvp_flow1.png" alt="step 1 - redeem button">step 1 - "redeem" button</img-card>
	<img-card src="/img/nym_perks/mvp_flow2.png" alt="step 2 - are you there? screen">step 2 - "are you there?" screen</img-card>
	<img-card src="/img/nym_perks/mvp_flow3.png" alt="step 3 - redeemed screen">step 3 - redeemed screen</img-card>
	<img-card src="/img/nym_perks/mvp_flow4.png" alt="perk post-redemption">perk post-redemption</img-card>
</img-flex>

This flow worked but we noticed that with the first perk (free coffee and cardamom bun at [La Cabra](https://lacabra.com/)), subscribers were flying thru the flow and redeeming the perk before they were physically at one of the La Cabra locations. I needed to slow users down and make sure they understood the perk experience before they redeemed their perk. 

## User Testing

I decided to conduct user testing by showing users 3 different flows, watching them go through the steps and asking questions about how they understood the experience. 

<img-flex cols="3">
	<img-card src="/img/nym_perks/opt1_1.jpg" alt="option 1 - step 1">option 1 - step 1</img-card>
	<img-card src="/img/nym_perks/opt1_2.jpg" alt="option 1 - step 2">option 1 - step 2</img-card>
	<img-card src="/img/nym_perks/opt1_3.jpg" alt="option 1 - step 3">option 1 - step 3</img-card>
</img-flex>
<img-flex cols="3">
	<img-card src="/img/nym_perks/opt2_1.jpg" alt="option 2 - step 1">option 2 - step 1</img-card>
	<img-card src="/img/nym_perks/opt2_2.jpg" alt="option 2 - step 2">option 2 - step 2</img-card>
	<img-card src="/img/nym_perks/opt1_3.jpg" alt="option 2 - step 3">option 2 - step 3</img-card>
</img-flex>
<img-flex cols="3">
	<img-card src="/img/nym_perks/opt2_1.jpg" alt="option 3 - step 1">option 3 - step 1</img-card>
	<img-card src="/img/nym_perks/opt3_2.jpg" alt="option 3 - step 2">option 3 - step 2</img-card>
	<img-card src="/img/nym_perks/opt1_3.jpg" alt="option 3 - step 3">option 3 - step 3</img-card>
</img-flex>

Option 3 tested the best because it asks if the user is at the vendor location and has 2 options for the user to pick from: "Yes, I am there" or "No, I am not there." This slowed users down and made them read the copy so they understood the overall experience. 

## Post-MVP Refinements

Before the [Balthazar](https://balthazarny.com/) perk launched, we updated the experience to include options 2 and 3. I wanted to include the yes/no buttons from option 3 because that tested the best but was worried people would still fly thru the flow so brought in the extra "redeem perk" button from option 2. 

These updates resulted in a 98% conversion rate for perk redemption. 

<!--To make the perks page feel more _New York_ Magazine-branded and less marketing-y, the design team suggested using custom illustrations for each perk. They decided to go with [Leon Edler](https://www.leillo.com/) who did some very cute illustrations for the first round of perks. -->

<img-flex cols="4">
	<img-card src="/img/nym_perks/final_flow1.png" alt="step 1 - redeem in-store button">step 1 - "redeem in-store" button</img-card>
	<img-card src="/img/nym_perks/final_flow2.png" alt="step 2 - yes/no buttons">step 2 - yes/no buttons</img-card>
	<img-card src="/img/nym_perks/final_flow3.png" alt="step 3 - activate perk">step 3 - activate perk</img-card>
	<img-card src="/img/nym_perks/final_flow4.png" alt="step 4 - show to team member">step 4 - show to team member</img-card>
</img-flex>

## Account Center

The perks experience also works from the account center in case subscribers go there looking for their perks. 

<img-flex cols="4">
	<img-card src="/img/nym_perks/acct_center1.jpg" alt="perks experience from NYMag Account Center">perks experience from NYMag Account Center</img-card>
	<img-card src="/img/nym_perks/acct_center2.jpg" alt="perks experience from NYMag Account Center">perks experience from NYMag Account Center</img-card>
	<img-card src="/img/nym_perks/acct_center3.jpg" alt="perks experience from NYMag Account Center">perks experience from NYMag Account Center</img-card>
	<img-card src="/img/nym_perks/acct_center4.jpg" alt="perks experience from NYMag Account Center">perks experience from NYMag Account Center</img-card>
</img-flex>