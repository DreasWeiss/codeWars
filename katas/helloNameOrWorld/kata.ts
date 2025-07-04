// export function hello(name = ''): string {
//     if (!name.length) {
//         return 'Hello, World!';
//     } else {
//         return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
//     }
//   }


export function hello(name = ''): string {
    return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : 'World'}!`;
  }