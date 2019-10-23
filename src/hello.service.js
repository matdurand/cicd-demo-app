import fs from 'fs';

export const HelloService = {
  sayHello(name) {
    let greeting = name ? `Hello ${name}` : "Hello nobody";
    if (process.env.SECRET_CARAMILK) {
      greeting += ". The caramilk secret is " + process.env.SECRET_CARAMILK;
    }
    if (process.env.SECRET_FILE) {
      const secretFileContent = fs.readFileSync(process.env.SECRET_FILE, "utf8");
      if (secretFileContent) {
        greeting += ". " + secretFileContent;
      }
    }
    return greeting;
  }
}