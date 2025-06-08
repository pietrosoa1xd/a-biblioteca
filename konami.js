document.addEventListener('DOMContentLoaded', function() {
    const konamiCode = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];
    let konamiCodePosition = 0;

    const avatarImage = document.getElementById('avatarPrincipal');
    const originalAvatarSrc = avatarImage ? avatarImage.src : 'imagem';
    const kassanePeraImageSrc = 'imagem/OIP.jpg'; // Caminho correto da imagem

    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiCodePosition]) {
            konamiCodePosition++;

            if (konamiCodePosition === konamiCode.length) {
                document.body.classList.add('konami-active');

                if (avatarImage) {
                    avatarImage.src = kassanePeraImageSrc;
                    avatarImage.style.transition = 'all 0.5s ease-in-out';
                }

                console.log("Easter Egg Konami Code ativado!");
                alert("Parabéns! Easter Egg ativado! (Confira o avatar e o botão 'Ler Online'!)");

                setTimeout(() => {
                    if (avatarImage && document.body.classList.contains('konami-active')) {
                        avatarImage.src = originalAvatarSrc;
                        document.body.classList.remove('konami-active');
                    }
                }, 10000);

                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    });
});
