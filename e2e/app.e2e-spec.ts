import { Ang2HelloPage } from './app.po';

describe('ang2-hello App', function() {
  let page: Ang2HelloPage;

  beforeEach(() => {
    page = new Ang2HelloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
