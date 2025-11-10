document.querySelectorAll('.program-line__title').forEach(title => {
    title.addEventListener('click', function () {
        const currentDescr = this.nextElementSibling;

        if (!currentDescr.classList.contains('active')) {
            document.querySelectorAll('.program-line__descr.active').forEach(descr => {
                descr.classList.remove('active');
            });

            currentDescr.classList.add('active');
        }
    });
});



