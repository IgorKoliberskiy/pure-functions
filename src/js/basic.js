export default function getColor(player) {
  const statusMinHealth = { 
    healthy: 51,
    wounded: 15,
    critical: 0,
  };
  return Object.keys(statusMinHealth).find((name) => statusMinHealth[name] <= player.health);
}
