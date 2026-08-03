const principles = [
  {
    title: "Find the precedent first",
    body: "I grep for how the problem was already solved before writing anything new, and cite it in review.",
  },
  {
    title: "Separate what-to-show from how-to-show-it",
    body: "Conditional logic goes in pure functions, not inside build().",
  },
  {
    title: "Model the failure modes",
    body: "I name every distinguishable way an operation can end, rather than collapsing them into one flag.",
  },
  {
    title: "Suspect the tooling before the architecture",
    body: "A “dead” bloc handler once turned out to be hot reload not re-running constructors. Cold restart is now step one.",
  },
];

export const aiNote = {
  title: "I write my own code",
  body: "I use Claude Code daily, but in explain-only mode — it explains what to change and why, and I type every line. Accepting generated code produces working software and no understanding, and right now I'd rather build the judgment.",
};

export default principles;
