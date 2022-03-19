const simpleData = {
  keys: [
    [
      {
        key: "(",
        className: "key-ops",
        action: "openBracket",
        value: "()",
        type: "ops",
      },
      {
        key: ")",
        className: "key-ops",
        action: "closeBracket",
        value: "",
        type: "ops",
      },
      {
        key: "%",
        className: "key-ops",
        action: "percent",
        value: "%",
        type: "ops",
      },
      {
        key: "AC",
        className: "key-ops",
        action: "clear",
        type: "ops",
        value: "",
      },
    ],
    [
      {
        key: "7",
        className: "key-num",
        action: "num",
        value: "7",
        type: "num",
      },
      {
        key: "8",
        className: "key-num",
        action: "num",
        value: "8",
        type: "num",
      },
      {
        key: "9",
        className: "key-num",
        action: "num",
        value: "9",
        type: "num",
      },
      {
        key: "÷",
        className: "key-ops",
        subClassName: "bold",
        action: "divide",
        value: "÷",
        type: "ops",
      },
    ],
    [
      {
        key: "4",
        className: "key-num",
        action: "num",
        value: "4",
        type: "num",
      },
      {
        key: "5",
        className: "key-num",
        action: "num",
        value: "5",
        type: "num",
      },
      {
        key: "6",
        className: "key-num",
        action: "num",
        value: "6",
        type: "num",
      },
      {
        key: "×",
        className: "key-ops",
        subClassName: "bold",
        action: "multiply",
        value: "×",
        type: "ops",
      },
    ],
    [
      {
        key: "1",
        className: "key-num",
        action: "num",
        value: "1",
        type: "num",
      },
      {
        key: "2",
        className: "key-num",
        action: "num",
        value: "2",
        type: "num",
      },
      {
        key: "3",
        className: "key-num",
        action: "num",
        value: "3",
        type: "num",
      },
      {
        key: "-",
        className: "key-ops",
        subClassName: "bold",
        action: "minus",
        value: "-",
        type: "ops",
      },
    ],
    [
      {
        key: "0",
        className: "key-num",
        action: "num",
        value: "0",
        type: "num",
      },
      {
        key: ".",
        className: "key-num",
        action: "num",
        value: ".",
        type: "num",
      },
      {
        key: "=",
        className: "key-equal",
        subClassName: "bold",
        action: "equal",
        value: "=",
        type: "ops",
      },
      {
        key: "+",
        className: "key-ops",
        subClassName: "bold",
        action: "plus",
        value: "+",
        type: "ops",
      },
    ],
  ],
};

// for (let i = 9; i >= 0; i--) {
//   data.calculate.keys.push({
//     key: i,
//     label: i,
//     type: "number",
//     className: "keyboardKey",
//     value: i,
//   });
// }

export { simpleData };
