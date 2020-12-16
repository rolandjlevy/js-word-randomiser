https://simple.m.wikipedia.org/wiki/Leet

1 = I or L or 7
2 = Z
3 = E or e or m or w or ω or ∈ or ε or ∩∩
4 = h or A
5 = S
6 = b or G
7 = T or j or L
8 = B or X
9 = g or J
10 = I and O or L and O or 7 and O

```js
const lettersToNumbers = ['O', 'I', 'Z', 'E', 'A', 'S', 'G', 'T', 'B', 'J'];
```

```js
const setDesination = (inputText) => {
  const lettersToNumbers = ['O', 'I', 'Z', 'E', 'A', 'S', 'G', 'T', 'B', 'J'];
  return Array.from(inputText).map(item => {
    const index = Number(item);
    return isNaN(index) ? item : lettersToNumbers[index];
  });
}
```

```js
const isNumber = (str) => /^[0-9]$/i.test(str);
```

https://javascriptio.com/view/505022/javascript-how-do-i-check-if-the-key-pressed-on-a-form-field-is-a-digit-0-9