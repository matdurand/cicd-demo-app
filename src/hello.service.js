export const HelloService = {
  sayHello(name) {
    const prefix = name ? `Hello ${name}` : "Hello nobody";
    if (process.env.SECRET_CARAMILK) {
      return prefix + ". The caramilk secret is " + process.env.SECRET_CARAMILK;
    }
    return prefix;
  }
}