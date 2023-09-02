function createWaves() {
        const wavesContainer = document.createElement('div');
        wavesContainer.classList.add('waves-container');
        document.body.appendChild(wavesContainer);

        // Crea varias olas
        for (let i = 0; i < 5; i++) {
          const wave = document.createElement('div');
          wave.classList.add('wave');
          wave.style.animationDelay = `${i * 0.5}s`;
          wavesContainer.appendChild(wave);
        }
      }

      // Llama a la función para crear las olas cuando la página se carga completamente
      window.addEventListener('load', createWaves);