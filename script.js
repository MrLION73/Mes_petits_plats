function createForks(container, count, side) {
  for (let i = 0; i < count; i++) {
    const fork = document.createElement('div');
    fork.classList.add('fork', side === 'left' ? 'left-fork' : 'right-fork');

    if (i % 2 === 0) {
      const branch = document.createElement('div');
      branch.classList.add('branch');

      const leaf = document.createElement('div');
      leaf.classList.add('leaf');
      // on ajoute la classe spécifique
      leaf.classList.add(side === 'left' ? 'left-leaf' : 'right-leaf');

      branch.appendChild(leaf);
      fork.appendChild(branch);
    }

    container.appendChild(fork);
  }
}

function setupLines() {
  const leftLine = document.querySelector('.left-line');
  const rightLine = document.querySelector('.right-line');

  // hauteur totale visible
  const height = window.innerHeight;

  // taille d'une fork avec marge estimée à 50px (à ajuster selon CSS)
  const forkHeight = 50;

  const count = Math.floor(height / forkHeight);

  // vide les anciennes forks (utile si resize)
  leftLine.querySelectorAll('.fork').forEach(f => f.remove());
  rightLine.querySelectorAll('.fork').forEach(f => f.remove());

  createForks(leftLine, count, 'left');
  createForks(rightLine, count, 'right');
}

// appel initial
setupLines();

// on ajuste au resize
window.addEventListener('resize', setupLines);
