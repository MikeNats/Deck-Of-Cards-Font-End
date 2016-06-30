'use strict';

let cards,
	drawButton;

describe('Draw cards', () => {
	it('should not populate panel with cards if selected number is 0', () => {
		browser.get(browser.baseUrl);
		drawButton = element(by.id('draw'));
		drawButton.click();
		cards = element(by.css('.card'))

		expect(cards.isPresent()).not.toBe(true);
	});
	it('should append a message on the screen', () => {
		let message;
		element(by.id('draw')).click();
		message = element(by.id('message')).getText();

		expect(message).toContain('You have picked in total');
	});
	it('should populate panel with cards if given cards are more than 0', () => {
		let slider = element(by.id('slider'));

		slider.click();
		slider.sendKeys(protractor.Key.ARROW_Right);
		drawButton.click();
		cards = element(By.css('#panel li:nth-child(2)'));

		expect(cards.isPresent()).toBe(true);
	});
});