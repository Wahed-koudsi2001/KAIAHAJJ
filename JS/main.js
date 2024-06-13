let wahedClick = document.querySelector('.wahed-click')
let menu = document.querySelector('.drop-menu');

wahedClick.addEventListener('click', () => {
    menu.classList.toggle("active")
})

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.wahed-box').forEach(box => {
        box.addEventListener('click', () => {
            const target = box.getAttribute('data-target');
            const popup = document.getElementById(target);
            if (popup) {
                popup.style.display = 'block';
                document.querySelector('.overlay').style.display = 'block';
            }
        });
    });

    document.querySelectorAll('.popup .close').forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.parentElement;
            if (popup) {
                popup.style.display = 'none';
                document.querySelector('.overlay').style.display = 'none';
            }
        });
    });

    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.addEventListener('click', () => {
            document.querySelectorAll('.popup').forEach(popup => {
                popup.style.display = 'none';
            });
            overlay.style.display = 'none';
        });
    }

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.popup') && !event.target.closest('.wahed-box')) {
            document.querySelectorAll('.popup').forEach(popup => {
                popup.style.display = 'none';
            });
            document.querySelector('.overlay').style.display = 'none';
        }
    });
});
