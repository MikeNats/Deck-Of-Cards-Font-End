'use strict';

describe('Sort button', () => {
	it('should append a message on the screen', () => {
		let message;
		browser.get(browser.baseUrl);
		element(by.id('sort')).click();
		message = element(by.id('message')).getText();

		expect(message).toContain('Cards are sorted');
	});
});