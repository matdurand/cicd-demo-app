import {HelloService} from './hello.service';

describe('hello service', () => {
  const service = HelloService;
  
  it('should say hello to a nobody', () => {
    expect(service.sayHello()).toEqual("Hello nobody");
  });

  it('should say hello to a name', () => {
    expect(service.sayHello("Bob")).toEqual("Hello Bob");
  });

  describe('when the caramilk secret is defined as env variable', () => {
    beforeEach(() => {
      process.env.SECRET_CARAMILK = "abc";
    });

    afterEach(() => {
      delete process.env.SECRET_CARAMILK;
    });

    it('should expose the caramilk secret if defined', () => {
      expect(service.sayHello("Bob")).toEqual("Hello Bob. The caramilk secret is abc");
    });
  });

})