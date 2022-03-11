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

export type Score = {
  total: number
  correct: number
  incorrect: number
}

export type Verb = {
  infinitive: string
  translation: string
  present: string[]
  preterite: string[]
  imperfect: string[]
  conditional: string[]
  future: string[]
}

export interface Verbs {
  regular: Verb[]
  irregular: Verb[]
}
