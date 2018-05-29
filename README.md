# simplePayoutNEBULAS
Utility contract to pay out to 2 addresses by %

This Contract is for Marketplaces to provide easy preagreed payout to vendors with a cut i.e. 75/25

Try it out(MainNet): https://biko-the-bird.github.io/simplePayoutNEBULAS/

### Introduction
Many marketplaces exist to facilitate interaction between various vendors and comsumers. A simplified approach to allow these marketplaces to make purchases of marketplace products in NAS so consumers who want to pay with cc can buy from vendors who except NAS and marketplaces can receive a fee for facilitating the interaction.

### Usage
call function: simpleTwoParty</br>
Params:<code> ["ADR1", "ADR2", "PER1", "PER2"]</code>

PER1 And PER2 must parseFloat() and must add to 1.00.

## Todo
-Add support for more parties


## Created By:
Biko-the-bird
