'use strict';

describe('Shuffle button', () => {
	it('should append a message on the screen', () => {
		let message;
		browser.get(browser.baseUrl);
		element(by.id('shuffle')).click();
		message = element(by.id('message')).getText();

		expect(message).toContain('Cards are shuffled');
	});
});