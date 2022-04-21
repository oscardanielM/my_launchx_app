const MissionCommander = require("./../app/missionCommander")

describe("Probando clase MissionCommander", () => {
    test('Caso de prueba 1', () => {
      const comander = new MissionCommander("oscar");
      expect(comander.name).toBe("oscar");
    });
  })
  