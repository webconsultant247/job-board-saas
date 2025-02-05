import arcject, {
  detectBot,
  fixedWindow,
  shield,
  tokenBucket,
} from "@arcjet/next";

export { detectBot, fixedWindow, shield, tokenBucket, arcject };

export const arcj = arcject({
  key: process.env.ARCJET_KEY!,
  rules: [],
});

export const aj = arcj
  .withRule(
    shield({
      mode: "LIVE",
    })
  )
  .withRule(
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    })
  );
