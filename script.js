

const cards= document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
     const cardTitle = card.querySelector('h2').textContent;
     alert('you clicked on ${cardTitle}');
    });
});
