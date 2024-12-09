# Locker Rental 📦

## What is Locker Rental? ❓
Locker Rental is a website designed to help George Brown College students studying at the Casa Loma campus easily locate lockers available for rent.  

The idea for this project came from my experience working at the Welcome Desk. One of the most frequently asked questions was: *"Where is the locker I want to rent located?"* Unfortunately, there wasn’t a clear answer. This inspired me to create Locker Rental—not just for my convenience but also to support my student services department in making life easier for everyone.

---

## What I Did 🏃‍♂️

### Simplified School Map with Figma 🎨  
I designed a simplified map of the Casa Loma campus using **Figma**, highlighting locker locations with a user-friendly interface. The goal was to ensure accessibility for a diverse audience.

![Screenshot from Figma]('/web/static/C4-readme.png') 

### Data Collection with Selenium 🛠  
Since George Brown College doesn’t provide an API for locker information, I used **Selenium** to automate the scraping of data from my own account. The data is categorized by floor and stored as static `.txt` files to keep the website lightweight and efficient.

### Hosting with Docker and AWS 🚀  
I containerized my application with **Docker** and hosted it on an **AWS EC2** instance. While the free AWS plan is temporary, I am exploring alternative hosting options to keep the website accessible.

---

## Notice ❗  
Last summer, George Brown College’s StuView system underwent a significant update, which affected the automation scripts I had created. While the automation process needs updating, I’m proud of the solution I built and the impact it had during its time.

If you’d like to explore the project, feel free to clone the repository and run:

`docker-compose up --build -d`
