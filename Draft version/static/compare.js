function compareLockers(lockerFromFlask) {
        // Make sure the HTML load first and the JS take the element
        document.addEventListener('DOMContentLoaded', function() {
            // Take all the locker in HTML
            const allLockers = [];
            const lockers = document.querySelectorAll(".locker");
            for (let i = 0; i < lockers.length; i++)
            {
                allLockers.push(lockers[i].id);
            }
            console.log(allLockers)
        
            // Locker from file
            const flask_data = lockerFromFlask;
            const temp_array = flask_data.slice(6,-6);
            const availableLockers = temp_array.split('&#39;, &#39;');

        
            // Show the locker is available to rent, green color, the rest default as red color
            for (let i=0; i < availableLockers.length; i++)
            {
                document.getElementById(availableLockers[i]).style.backgroundColor = '#A1DE93';
            }
        });
}