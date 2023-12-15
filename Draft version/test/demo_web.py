import requests
from bs4 import BeautifulSoup

URL = "https://realpython.github.io/fake-jobs/"
page = requests.get(URL) #Request the page and return it

soup = BeautifulSoup(page.content, "html.parser") #Make the page encoded
results = soup.find(id="ResultsContainer") #Find the specific ID in the HTML and return it
job_elements = results.find_all("div", class_="card-content") #Find the class name and return all of it (return a list)
for job_element in job_elements: # Iterate into the list from find_all()
    title_element = job_element.find("h2", class_="title") # Find the specific tag and id name
    company_element = job_element.find("h3", class_="company")
    location_element = job_element.find("p", class_="location")
    print(title_element.text.strip()) #.text() to get the text from the variable, .strip() to cut the white space in the text
    print(company_element.text.strip())
    print(location_element.text.strip())
    print()

python_jobs = results.find_all(
    "h2", string=lambda text: "python" in text.lower()
)
print("=============")

print(python_jobs)

