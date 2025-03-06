let userName = ''; // Variable to store the user's name

    function showWelcome() {
        userName = document.getElementById('userName').value; // Get the user's name
        if (userName) {
            document.getElementById('welcomeMessage').innerText = `Welcome to the Age Calculator, ${userName}!`;
            document.getElementById('welcomeMessage').style.display = 'block';
            document.getElementById('ageCalculator').style.display = 'block';
            setTimeout(function() {
                document.getElementById('welcomeMessage').style.display = 'none';
            }, 3000);
        } else {
            alert("Please enter your name.");
        }
    }

    function calculateAge() {
        const birthDate = new Date(document.getElementById('birthDate').value);
        const today = new Date();
        
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        // Adjust for negative days
        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Get last day of previous month
        }

        // Adjust for negative months
        if (months < 0) {
            years--;
            months += 12;
        }

        document.getElementById('result').innerText = `🎉 Hey Hi! ${userName}! Your age is ${years} years, ${months} months, and ${days} days! 🎉`;
        document.getElementById('result').style.display = 'block'; // Show the result
    }