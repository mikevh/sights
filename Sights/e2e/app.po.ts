import { browser, by, element } from 'protractor';

export class SightsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mv-root h1')).getText();
  }
}
