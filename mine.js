
function trap(rm) {
  const x = d6();
  const y = d6();
  const ok = x + rm.trap > y + eff('a');
  if (ok) { hurt(rm.trap) }
  if (!ok) { L('Ловушка не сработала', 'miss', `Ловушка: ${x}+${rm.trap}=${x + rm.trap} против ${y}+${eff('a')}=${y + eff('a')}`) }
  else { L('Ловушка сработала', 'bad', `Ловушка: ${x}+${rm.trap}=${x + rm.trap} против ${y}+${eff('a')}=${y + eff('a')}`) }
}

function dbgHeal() {
  G.hp = G.mx;
  ui();
}

function dbgKill() {
  hurt(G.hp); ui();
}

function dbgPoints() {
  G.gp += 5;
  G.ep += 5;
  ui();
}

function enrage(m) {
  if (m.hp <= m.mx / 2 && !m.rg) {
    m.p += 1;
    m.rg = true;
    L('Ярость босса', 'bad', `Босс в ярости! Его физическая сила увеличена на 1.`);
  }
}
