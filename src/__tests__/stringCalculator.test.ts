import { StringCalculator } from "../stringCalculator";

describe("String calculator", () => {
  //let stringCalc: StringCalculator;
  let sc: StringCalculator;
  
  beforeEach(() => {
    //stringCalc = new StringCalculator();
    sc = Reflect.construct(StringCalculator, []);
  });

  it("devrait retourner la valeur de la propriete 'nom' de StringCalculator", () => {
    const result = Reflect.get(sc, "nom");
    expect(result).toBe("TP?");
  });

  it("devrait modifier la propriete 'nom' de StringCalculator", () => {
    Reflect.set(sc, "nom", "TP11");
    const result = Reflect.get(sc, "nom");
    expect(result).toBe("TP11");
  });

  it("should take an empty string", () => {
    const result = sc.add("");
    expect(result).toBe(0);
  });

  it("should return the value when passed only one", () => {
    const result = sc.add("1");
    expect(result).toBe(1);
  });

  it("should add a string with 2 values", () => {
    const result = sc.add("1,2");
    expect(result).toBe(3);
  });

  it('should add a string with a baggilion #s', () => {
    const result = sc.add("1,2,3,4");
    expect(result).toBe(10);
  })

  it('should handle new lines and commas', () => {
    const result = sc.add("1,2\n3,4");
    expect(result).toBe(10);
    
  })

  it('should support custom delimiters outline by //', () => {
    const result = sc.add("//;\n1;2");
    expect(result).toBe(3);
    
  })  
});
