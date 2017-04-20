import { PROJECT1Page } from './app.po';

describe('project1 App', () => {
  let page: PROJECT1Page;

  beforeEach(() => {
    page = new PROJECT1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
