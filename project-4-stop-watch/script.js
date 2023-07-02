 // Get the elements
      const timeElement = document.querySelector('.time');
      const startButton = document.querySelector('#startButton');
      const stopButton = document.querySelector('#stopButton');
      const resetButton = document.querySelector('#resetButton');

      // Initialize the variables
      let startTime;
      let elapsedTime = 0;
      let timerInterval;

      // Format the time in HH:MM:SS format
      function formatTime(milliseconds) {
        const hours = Math.floor(milliseconds / 3600000);
        milliseconds %= 3600000;
        const minutes = Math.floor(milliseconds / 60000);
        milliseconds %= 60000;
        const seconds = Math.floor(milliseconds / 1000);

        return (
          padNumber(hours) +
          ':' +
          padNumber(minutes) +
          ':' +
          padNumber(seconds)
        );
      }

      // Add leading zero to numbers less than 10
      function padNumber(number) {
        return number.toString().padStart(2, '0');
      }

      // Update the time display
      function updateTime() {
        const currentTime = Date.now();
        const elapsedTimeSinceStart = currentTime - startTime;
        const totalTime = elapsedTime + elapsedTimeSinceStart;
        timeElement.textContent = formatTime(totalTime);
      }

      // Event listeners
      startButton.addEventListener('click', function () {
        if (!timerInterval) {
          startTime = Date.now();
          timerInterval = setInterval(updateTime, 100);
        }
      });

      stopButton.addEventListener('click', function () {
        if (timerInterval) {
          clearInterval(timerInterval);
          timerInterval = null;
          elapsedTime += Date.now() - startTime;
        }
      });

      resetButton.addEventListener('click', function () {
        clearInterval(timerInterval);
        timerInterval = null;
        startTime = null;
        elapsedTime = 0;
        timeElement.textContent = '00:00:00';
      });