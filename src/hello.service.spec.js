import {HelloService} from './hello.service';
import tmp from 'tmp';
import fs from 'fs';

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

  describe('when a secret file is defined', () => {
    let secretFile;

    beforeEach(() => {
      secretFile = tmp.fileSync();
      fs.writeFileSync(secretFile.name, "This is a secret");
      process.env.SECRET_FILE = secretFile.name;
    })

    afterEach(() => {
      delete process.env.SECRET_FILE;
      secretFile.removeCallback();
    });

    it('should read the secret file and return it with the greeting', () => {
      expect(service.sayHello("Bob")).toEqual("Hello Bob. This is a secret");
    });
  });

})