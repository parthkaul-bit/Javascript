let items = 2 + 2;
let cost = (2 * 799 + 2 * 2095) / 100;
let shipping = (499 + 499) / 100;
let tax = (Math.round((0.1 * ((2 * 799 + 2 * 2095 + 2 * 499)))/100 *100))/100;  
`Items (${items}): $${cost}
Shipping and Handling: $${shipping}
Total cost before tax : $${cost + shipping}
Esitmated tax (10%): $${tax}
Order Total: $${cost + shipping + tax}`; 
