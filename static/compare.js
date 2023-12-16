function compareLockers(lockerFromFlask) {
        // Make sure the HTML load first and the JS take the element
        document.addEventListener('DOMContentLoaded', function() {
            // Locker from file
            const flask_data = lockerFromFlask;
            const temp_array = flask_data.slice(6,-6);
            const availableLockers = temp_array.split('&#39;, &#39;');

            // Building C Floor 3
            let container1 = document.getElementsByClassName('accordion-body-1')[0];
            let container2 = document.getElementsByClassName('accordion-body-2')[0];
            let container3 = document.getElementsByClassName('accordion-body-3')[0];
            // Building C Floor 1
            let container4 = document.getElementsByClassName('accordion-body-4')[0];
            let container5 = document.getElementsByClassName('accordion-body-5')[0];
            let container6 = document.getElementsByClassName('accordion-body-6')[0];
            let container7 = document.getElementsByClassName('accordion-body-7')[0];
            let container8 = document.getElementsByClassName('accordion-body-8')[0];
                        
            for (let i=0; i < availableLockers.length; i++)
            {
                let building = availableLockers[i].substring(0,2);
                if(building == "C3")
                {
                    let location = availableLockers[i][2];
                    if (location == "0")
                    {
                        // Append the content of the locker to the container
                        container1.innerHTML += `<span style="font-size: 18px; font-weight: bold;">${availableLockers[i]}</span>, `;
                    }
                    if (location == "3")
                    {
                        // Append the content of the locker to the container
                        container2.innerHTML += `<span style="font-size: 18px; font-weight: bold;">${availableLockers[i]}</span>, `;
                    }
                    if (location != "1")
                    {
                        // Append the content of the locker to the container
                        container3.innerHTML += `<span style="font-size: 18px; font-weight: bold;">${availableLockers[i]}</span>, `;
                    }
                }
                if(building == "C1")
                {
                    let location = availableLockers[i][2];
                    if (location == "0" || location == "1" || location == "2" || location == "3" || location == "4" )
                    {
                        // Append the content of the locker to the container
                        container4.innerHTML += `<span style="font-size: 18px; font-weight: bold;">${availableLockers[i]}</span>, `;
                    }
                    if (location == "5")
                    {
                        // Append the content of the locker to the container
                        container5.innerHTML += `<span style="font-size: 18px; font-weight: bold;">${availableLockers[i]}</span>, `;
                    }
                    if (location == "6")
                    {
                        // Append the content of the locker to the container
                        container6.innerHTML += `<span style="font-size: 18px; font-weight: bold;">${availableLockers[i]}</span>, `;
                    }
                    if (location == "7" || location == "8")
                    {
                        // Append the content of the locker to the container
                        container7.innerHTML += `<span style="font-size: 18px; font-weight: bold;">${availableLockers[i]}</span>, `;
                    }
                    if (location == "9")
                    {
                        // Append the content of the locker to the container
                        container8.innerHTML += `<span style="font-size: 18px; font-weight: bold;">${availableLockers[i]}</span>, `;
                    }
                }
            }
            const containers = [
                container1, container2, container3, container4,
                container5, container6, container7, container8
            ];
            
            for (let container of containers) {
                // Because all of the HTML will call this function, so to make sure the container in other pages will be remove
                if (container && !container.innerText.trim()) {
                    container.innerText = "Rent Out!";
                }
            }
            
            
        });
}