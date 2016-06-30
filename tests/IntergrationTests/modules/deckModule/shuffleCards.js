'use strict';

describe('Shuffle button', () => {
	it('should change the order of the cards', () => {
		let slider,
			initialFirstCardFromApi = '2 C',
			firstCard;

		browser.get(browser.baseUrl);
		slider = element(by.id('slider'));
		slider.click();
		slider.sendKeys(protractor.Key.ARROW_Right);
		element(by.id('shuffle')).click();
		element(by.id('draw')).click();
		firstCard = element(By.css('#panel li:nth-child(2)')).getText();

		expect(firstCard).not.toEqual(initialFirstCardFromApi);
	});
	it('should append a message on the screen', () => {
		let message;
		browser.get(browser.baseUrl);
		element(by.id('shuffle')).click();
		message = element(by.id('message')).getText();

		expect(message).toContain('Cards are shuffled');
	});
});