
function trap(rm) {
  const x = d6();
  const y = d6();
  const ok = x + rm.trap > y + eff('a');
  if (ok) { FX('gh', rm.trap); G.hp -= rm.trap; if (G.hp <= 0) { G.hp = 0; G.over = 'lose' } }
  if (!ok) { L('Ловушка не сработала', 'miss', `Ловушка: ${x}+${rm.trap}=${x + rm.trap} против ${y}+${eff('a')}=${y + eff('a')}`) }
  else { L('Ловушка сработала', 'bad', `Ловушка: ${x}+${rm.trap}=${x + rm.trap} против ${y}+${eff('a')}=${y + eff('a')}`) }
}

function dbgHeal() {
  G.hp = G.mx;
  ui();
}

function dbgPoints() {
  G.gp += 5;
  G.ep += 5;
  ui();
}