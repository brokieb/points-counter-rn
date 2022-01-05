import { useState, createContext, useMemo } from "react";
export const PlayersContext = createContext({
  Players: [],
  setPlayers: () => {},
});

export const ActiveGameContext = createContext({
  activeGame: [],
  setActiveGame: () => {},
});

export const EditModeContext = createContext({
  editMode: [],
  setEditMode: () => {},
});
