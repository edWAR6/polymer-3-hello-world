export const html = (strings, ...values) => strings[0]
  + values.map((v, i) => v + strings[i + 1]).join('');
