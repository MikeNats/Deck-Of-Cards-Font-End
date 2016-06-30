'use strict';

describe('Sort button', () => {

	it('should sort the order of the cards', () => {
		let slider,
			initialFirstCard,
			suffledCard;

		browser.get(browser.baseUrl);
		slider = element(by.id('slider'));
		slider.click();
		slider.sendKeys(protractor.Key.ARROW_Right);
		element(by.id('draw')).click();
		initialFirstCard = element(By.css('#panel li:nth-child(2)')).getText();
		element(by.id('sort')).click();
		suffledCard = element(By.css('#panel li:nth-child(2)')).getText();

		expect(initialFirstCard).not.toEqual(suffledCard);
	});
	it('should append a message on the screen', () => {
		let message;
		browser.get(browser.baseUrl);
		element(by.id('sort')).click();
		message = element(by.id('message')).getText();

		expect(message).toContain('Cards are sorted');
	});
});