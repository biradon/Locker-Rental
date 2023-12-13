import requests
from selenium import webdriver
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os

URL = "https://stuview.georgebrown.ca/"

# Set up the Chrome browser in headless mode
options = webdriver.ChromeOptions()
options.headless = True
driver = webdriver.Chrome(options=options)

# Load the page with Selenium
driver.get(URL)

# Use WebDriverWait to wait for an element to be clickable
try:
    # Click applicant
    applicant_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '/html/body/main/section[1]/div/div/div[1]/div/div/form[2]/input[3]'))
    )
    applicant_button.click()


    # Fill the ID
    ID_field = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, 'usernameUserInput'))
    )
    ID_field.send_keys("101411424")

     # Fill the PW
    PW_field = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, 'password'))
    )
    PW_field.send_keys("Georgebrown135%")

    #Click continue
    sign_in_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="loginForm"]/div[5]/div[5]/div[2]/button'))
    )
    sign_in_button.click()

    #Click Additional service
    additional_service_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="bmenu--P_StuSuppMenu___UID7"]'))
    )
    additional_service_button.click()

    #Click rent a locker
    rent_locker_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="wwsklock--P_LockerMain___UID1"]'))
    )
    rent_locker_button.click()

    #Click continue
    continue_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="contentHolder"]/div[3]/table[2]/tbody/tr/td[5]/input'))
    )
    continue_button.click()

    #================== Script to scrap data ==================
    current_url = driver.current_url
    html_content = driver.page_source   #Get the page source after JavaScript has been executed
    soup = BeautifulSoup(html_content, "html.parser")

    select_element = soup.find('select', {'name': 'p_locker_number'})
    array_of_files = ["buildings/C1.txt", "buildings/C2.txt", "buildings/C3.txt", "buildings/C4.txt", "buildings/C5.txt", "buildings/D3.txt"]
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
    #Click Sign out
    sign_out_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="globalNav"]/div/ul/li[1]/a'))
    )
    sign_out_button.click()


    

finally:
    # Close the browser window
    driver.quit()
