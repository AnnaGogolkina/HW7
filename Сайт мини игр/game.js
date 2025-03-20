
      document.addEventListener('DOMContentLoaded', function() {
        const playButtons = document.querySelectorAll('.playButton');
        playButtons.forEach(function(button) {
          button.addEventListener('click', function() {
            let inputText = prompt('Введите текст');
            const reversedText = inputText.split('').reverse().join('');
            alert(reversedText);
          });
        });
      });

      