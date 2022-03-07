export enum AppState {
  GAME_CONFIGURATION = 'game-configuration',
  GAME_PLAY = 'game-play',
  GAME_RESULT = 'game-result',
}

export type GameConfiguration = {
  language: string
  verbset: string
  tense: string
}

export type IncorrectAnswer = {
  infinitive: string
  person: string
  answer: string
  input: string
}
