import {HelloService} from './hello.service';

describe('hello service', () => {
  const service = HelloService;
  
  it('should say hello to a nobody', () => {
    expect(service.sayHello()).toEqual("Hello nobody");
  });

  it('should say hello to a name', () => {
    expect(service.sayHello("Bob")).toEqual("Hello Bob");
  })
})