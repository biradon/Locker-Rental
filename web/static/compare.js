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
            // Building C Floor 2
            let container9 = document.getElementsByClassName('accordion-body-9')[0];
            let container10 = document.getElementsByClassName('accordion-body-10')[0];
            let container11 = document.getElementsByClassName('accordion-body-11')[0];
            let container12 = document.getElementsByClassName('accordion-body-12')[0];
            let container13 = document.getElementsByClassName('accordion-body-13')[0];
            // Building C Floor 4
            let container14 = document.getElementsByClassName('accordion-body-14')[0];
            let container15 = document.getElementsByClassName('accordion-body-15')[0];
            let container16 = document.getElementsByClassName('accordion-body-16')[0];
            let container17 = document.getElementsByClassName('accordion-body-17')[0];
            let container18 = document.getElementsByClassName('accordion-body-18')[0];
            let container19 = document.getElementsByClassName('accordion-body-19')[0];
            let container20 = document.getElementsByClassName('accordion-body-20')[0];
            let container20a = document.getElementsByClassName('accordion-body-20a')[0];
            let container20b = document.getElementsByClassName('accordion-body-20b')[0];
            // Building C Floor 5
            let container21 = document.getElementsByClassName('accordion-body-21')[0];
            let container22 = document.getElementsByClassName('accordion-body-22')[0];
            let container23 = document.getElementsByClassName('accordion-body-23')[0];
            let container24 = document.getElementsByClassName('accordion-body-24')[0];
            let container25 = document.getElementsByClassName('accordion-body-25')[0];
            // Building D Floor 3
            let container26 = document.getElementsByClassName('accordion-body-26')[0];
            let container27 = document.getElementsByClassName('accordion-body-27')[0];
            let container28 = document.getElementsByClassName('accordion-body-28')[0];
            let container29 = document.getElementsByClassName('accordion-body-29')[0];
                        
            for (let i=0; i < availableLockers.length; i++)
            {
                let building = availableLockers[i].substring(0,2);
                let lockersTopOrBottom = parseInt(availableLockers[i][availableLockers[i].length-1]); 
                if(building == "C3")
                {
                    let location = availableLockers[i][2];
                    if (location == "0")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container1.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container1.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "3")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container2.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container2.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location != "1")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container3.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container3.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                }
                if(building == "C1")
                {
                    let location = availableLockers[i][2];
                    if (location == "0" || location == "1" || location == "2" || location == "3" || location == "4" )
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container4.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container4.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "5")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container5.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container5.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "6")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container6.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container6.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "7" || location == "8")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container7.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container7.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "9")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container8.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container8.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                }
                if(building == "C2")
                {
                    let location = availableLockers[i][2];
                    if (location == "0")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container9.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container9.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "1")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container10.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container10.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "2")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container11.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container11.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "3" || location == "8")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container12.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container12.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "4")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container13.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container13.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                }
                if(building == "C4")
                {
                    let location = availableLockers[i][2];
                    if (location == "0")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container14.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container14.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }

                    }
                    if (location == "1")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container15.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container15.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "2")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container16.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container16.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "3")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container17.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container17.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "5")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container18.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container18.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "6")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container19.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container19.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "7")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container20.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container20.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "8")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container20a.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container20a.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "9")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container20b.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container20b.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                }
                if(building == "C5")
                {
                    let location = availableLockers[i][2];
                    if (location == "0")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container21.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container21.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "1")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container22.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container22.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "2" || location == "3")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container23.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container23.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "4")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container24.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container24.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "5")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container25.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container25.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                }
                if(building == "D3")
                {
                    let location = availableLockers[i][2];
                    if (location == "0")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container26.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container26.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "1")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container27.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container27.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "2" || location == "3")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container28.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container28.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                    if (location == "4")
                    {
                        // Append the content of the locker to the container
                        if (lockersTopOrBottom % 2 == 0)
                        {
                            container29.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #3FA796;">${availableLockers[i]}</span>, `;
                        }
                        else
                        {
                            container29.innerHTML += `<span style="font-size: 18px; font-weight: bold; color: #A10035">${availableLockers[i]}</span>, `;
                        }
                    }
                }
            }
            const containers = [
                container1, container2, container3, container4,
                container5, container6, container7, container8,
                container9, container10, container11, container12,
                container13, container14, container15, container16,
                container17, container18, container19, container20,
                container20a, container20b,container21, container22, 
                container23, container24, container25, container26, 
                container27, container28, container29
            ];
            
            for (let container of containers) {
                // Because all of the HTML will call this function, so to make sure the container in other pages will be remove
                if (container && !container.innerText.trim()) {
                    container.innerText = "Rent Out!";
                }
            }
            
            
        });
}