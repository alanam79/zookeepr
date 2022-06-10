const fs = require("fs");

const {
filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper
} = require("../lib/zookeepers");
const { zookeepers } = require ("../data/zookeepers.json");
const { start } = require("repl");

jest.mock('fs');
test( "creates a zookeeper object", () => {
    const zookeeper = createNewZookeeper(
        { name: "Alana", id: "sdfasdffsd"},
        zookeepers
    );

    expect(zookeeper.name).toBe("Alana");
    expect(zookeeper.id).toBe("sdfasdffsd");
})

test("filters by query", () => {
    const startingZookeepers = [
        {
            id: "2",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin",
          },
          {
            id: "3",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear",
          },
        ];

        const updatedZookeeers = filterByQuery({ age: 31}, startingZookeepers)
        expect(updatedZookeeers.length).toEqual(1);
    });

    test("find by id", () => {
        const startingZookeepers = [
            {
                id: "2",
                name: "Raksha",
                age: 31,
                favoriteAnimal: "penguin",
              },
              {
                id: "3",
                name: "Isabella",
                age: 67,
                favoriteAnimal: "bear",
              },
        ];

        const result = findById("2", startingZookeepers);
        expect(result.name).toBe("Raksha");
    })

    test("validdate age", () => {
        const zookeeper = {
            id: "2",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin"
          };

          const invalidZookeeper = {
            id: "3",
            name: "Isabella",
            age: "67",
            favoriteAnimal: "bear",
          };

          const result = validateZookeeper(zookeeper);
          const result2 = validateZookeeper(invalidZookeeper)

          expect(result).toBe(true);
          expect(result2).toBe(false);
        
    });