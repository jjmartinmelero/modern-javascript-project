let score = 0;

// score = score || 100;
score = score ?? 100;

// ?? -> null and undefined
// || -> falsy: false, 0, -0, "", null, undefined, NaN
console.log({ score });
