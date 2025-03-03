import { SafeHtmlSvgPipe } from './safe-html-svg.pipe';

describe('SafeHtmlSvgPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeHtmlSvgPipe();
    expect(pipe).toBeTruthy();
  });
});
