import { Ng2C3SamplePage } from './app.po';

describe('ng2-c3-sample App', function() {
  let page: Ng2C3SamplePage;

  beforeEach(() => {
    page = new Ng2C3SamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
