import { rankItem } from "@tanstack/match-sorter-utils";

// Não me pergunte o que isso faz
export const fuzzyFilter = (row, collumnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(collumnId), value);

  addMeta({ itemRank });

  return itemRank.passed;
};
