import { College360Page } from './app.po';

describe('college360 App', () => {
  let page: College360Page;

  beforeEach(() => {
    page = new College360Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
