import { IdeasToPixelsPage } from './app.po';

describe('ideas-to-pixels App', () => {
  let page: IdeasToPixelsPage;

  beforeEach(() => {
    page = new IdeasToPixelsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
