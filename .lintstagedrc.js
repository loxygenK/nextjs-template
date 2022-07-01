function nextFix(/** @type string[] */ files) {
  const fileFlags = files.map((f) => `--file ${f} `);
  return `next lint --fix ${fileFlags.join(" ")}`;
}

module.exports = {
  "./**/*.ts?(x)": [
    nextFix, "prettier -cw "
  ]
}
