document.addEventListener("DOMContentLoaded", function() {
    function detectDevice() {
        if (window.innerWidth <= 768) {
            document.body.classList.add('mobile');
        } else {
            document.body.classList.remove('mobile');
        }
    }

    window.addEventListener('resize', detectDevice);
    detectDevice();
});



