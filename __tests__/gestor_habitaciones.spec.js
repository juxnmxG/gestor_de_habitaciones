const algoritmo = require ('../src/algoritmo-habitacione')
const clientes = [
    23,
    45,
    155,
    374,
    22,
    99,
    100,
    101,
    115,
    209
  ]
  /* Habitaciones gratuitas Premium: 3 Habitaciones gratuitas Economy: 3
  Uso Premium: 3 (738 euros) Uso Economy: 3 (167 euros) */

describe("primer grupo de test", () => {
    test("prueba 1", () => {
        const premium = 7;
        const economy = 1;

        expect(true).toBe(true)
        //expect(algoritmo(clientes, premium, economy)).toEqual([738, 167])
        //expect(algoritmo(clientes, premium, economy)).toEqual([1054, 189])
        //expect(algoritmo(clientes, premium, economy)).toEqual([583, 189])
        expect(algoritmo(clientes, premium, economy)).toEqual([1153, 45])
    })
})

