import requests
from bs4 import BeautifulSoup
import os

#=========Use for local===============
URL = "demo.html"
# Open the HTML file in read mode
with open(URL, 'r') as file:
    # Read the content of the file
    html_content = file.read()


# Parse the HTML content with BeautifulSoup
soup = BeautifulSoup(html_content, 'html.parser')

array_of_files = ["buildings/C1.txt", "buildings/C2.txt", "buildings/C3.txt", "buildings/C4.txt", "buildings/C5.txt", "buildings/D3.txt"]

# Find the select element and iterate through its options
select_element = soup.find('select', {'name': 'p_locker_number'})
if select_element:
    options = select_element.find_all('option')
    for one_file in array_of_files:
        # Create the folder if it doesn't exist
        folder_path = os.path.dirname(one_file)
        os.makedirs(folder_path, exist_ok=True)

        # Clear the content of the file
        with open(one_file, 'w'):
            pass
    
    # Append the data base on first and second value
    for option in options:
        building = option['value'][0]
        floor = option['value'][1]

        # Construct the file path dynamically
        file_path = f"buildings/{building}{floor}.txt"

        # Append the new data
        with open(file_path, 'a') as file:
            file.write((option['value'] + '\n'))





