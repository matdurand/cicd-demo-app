export const HelloService = {
  sayHello(name) {
    return name ? `Hello ${name}` : "Hello nobody";
  }
}