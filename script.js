
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: "smooth" });
    }
  });
});

const cards = document.querySelectorAll('.solution-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(40px)';
  observer.observe(card);
});

function toggleFlip(card) {
  document.querySelectorAll('.flip-card').forEach(c => {
    if (c !== card) c.classList.remove('flipped');
  });
  card.classList.toggle('flipped');
}
function toggleFlip(card) {
  document.querySelectorAll('.flip-card').forEach(c => {
    if (c !== card) c.classList.remove('flipped');
  });
  card.classList.toggle('flipped');
}

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress-bar");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const value = bar.dataset.progress;
        bar.style.width = value + "%";
        bar.textContent = value + "%";
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(bar => observer.observe(bar));
});
const navbarCollapse = document.getElementById('navbarMain');

  navbarCollapse.addEventListener('show.bs.collapse', function () {
    document.body.classList.add('nav-open');
  });

  navbarCollapse.addEventListener('hidden.bs.collapse', function () {
    document.body.classList.remove('nav-open');
  });

   const cardes = document.querySelectorAll('.solution-cards');

  const observers = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  cardes.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(40px)';
    observers.observe(card);
  });