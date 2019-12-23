declare module 'romans' {
  function romanize(decimal: number): string;
  function deromanize(roman: string): number;
  function allChars(): string[];
  function allNumerals(): number[];
}
