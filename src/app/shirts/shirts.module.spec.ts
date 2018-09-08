import { ShirtsModule } from './shirts.module';

describe('ShirtsModule', () => {
  let shirtsModule: ShirtsModule;

  beforeEach(() => {
    shirtsModule = new ShirtsModule();
  });

  it('should create an instance', () => {
    expect(shirtsModule).toBeTruthy();
  });
});
