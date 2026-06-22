const fortunes = [
  'Mňau, dnes si odpočiň a dovol si drbání za uchem.',
  'Tvoje myšlenky jsou jako myš — rychlé a tajemné. Sleduj je pečlivě.',
  'Klidně si lež, svět se dnes postará o všechny těžkosti.',
  'Přines si polštář a sněz něco lahodného – kočičí život je nejlepší.',
  'Pozor! Vzadu za rohem je nová příležitost, stačí ji dobře očichat.',
  'Dotek měkké kočky ti přinese štěstí, tak hledejte laskavost v malých věcech.',
  'Někdo tě dnes potřebuje. Dej mu svou pozornost jako kočka dává svou přítomnost.',
  'Buď hrdý jako kocour a nezapomeň si protáhnout tlapky.',
  'Ostrožky v duši se rozplynou, když si dopřeješ trochu tlustého sluníčka.',
  'Tvoje dnešní věštba: budeš se usmívat bez důvodu – přesně tak, jak to kočka umí.'
];

const button = document.getElementById('prophet-btn');
const fortuneOutput = document.getElementById('fortune');

button.addEventListener('click', () => {
  const index = Math.floor(Math.random() * fortunes.length);
  const text = fortunes[index];
  fortuneOutput.textContent = `Kočka říká: “${text}”`;
});
