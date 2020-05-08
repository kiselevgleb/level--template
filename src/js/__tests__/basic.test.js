import Bowerman from '../Bowerman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

// import Character from '../Character';



const resultBower = new Bowerman();
test('should grow', () => {
  resultBower.levelUp();
  expect(resultBower.attack).toBe(30);
  expect(resultBower.defence).toBe(30);
  expect(resultBower.health).toBe(100);
  expect(resultBower.level).toBe(6);
});
