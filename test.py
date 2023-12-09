import requests
from bs4 import BeautifulSoup

#=========Use for local===============
URL = "demo.html"
# Open the HTML file in read mode
with open(URL, 'r') as file:
    # Read the content of the file
    html_content = file.read()


# Parse the HTML content with BeautifulSoup
soup = BeautifulSoup(html_content, 'html.parser')

# Find the select element and iterate through its options
select_element = soup.find('select', {'name': 'p_locker_number'})
if select_element:
    options = select_element.find_all('option')
    # Extract and print the values
    with open("test.txt", 'a') as file:
        for option in options:
            file.write((option['value'] + '\n'))






