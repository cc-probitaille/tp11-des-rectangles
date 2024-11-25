/**
 * StringCalculator est une classe qui permet d'additionner des nombres
 * fournis sous forme de chaîne de caractères avec différents délimiteurs.
 * 
 * @example
 * const calculator = new StringCalculator();
 * console.log(calculator.add("1,2,3")); // Affiche 6 (1 + 2 + 3)
 * console.log(calculator.add("4\n5,6")); // Affiche 15 (4 + 5 + 6)
 * console.log(calculator.add("//;\n7;8;9")); // Affiche 24 (7 + 8 + 9)
 */
export class StringCalculator {
  private sum = 0;
  private nom = "TP?";

  /**
   * Ajoute les nombres contenus dans la chaîne d'entrée et retourne la somme totale.
   * @param input La chaîne d'entrée contenant les nombres à additionner.
   * @returns La somme totale après l'addition.
   */
  add(input: string): number {
    if (input.length > 0) {
      const numbers = this.splitInput(input);
      numbers.forEach((value) => (this.sum += value));
    }
    return this.sum;
  }

  /**
   * Transforme la chaîne d'entrée en un tableau de nombres.
   * @param input La chaîne d'entrée à parser.
   * @returns Un tableau de nombres extraits de la chaîne d'entrée.
   */
  private splitInput(input: string): number[] {
    const defaultDelimiters = /[,\n]/;
    let customDelimiter: string | undefined;

    // Vérifie si un délimiteur personnalisé est spécifié
    if (input.startsWith('//')) {
      customDelimiter = this.extractCustomDelimiter(input);
      // Retire la ligne de définition du délimiteur personnalisé
      input = input.split('\n').slice(1).join('\n');
    }

    const inputArray = customDelimiter 
      ? input.split(customDelimiter) 
      : input.split(defaultDelimiters);

    return inputArray.map(Number);
  }

  /**
   * Extrait le délimiteur personnalisé de la chaîne d'entrée.
   * @param input La chaîne d'entrée contenant le délimiteur personnalisé.
   * @returns Le délimiteur personnalisé.
   */
  private extractCustomDelimiter(input: string): string {
    return input[2];
  }
}