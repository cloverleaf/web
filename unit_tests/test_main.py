import pytest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.firefox.options import Options
from selenium.common.exceptions import WebDriverException
from meta import pass_vis
from meta import get_var
getVar = get_var.getVar

address = "http://localhost:8080/"

options = Options()
options.headless = True


@pytest.fixture()
def driver():
    driverInternal = webdriver.Firefox(options=options)
    try:
        driverInternal.get(address)
    except WebDriverException:
        print("You need to host the localhost before you can run a unit test on it")
    yield driverInternal
    # Close procedures
    driverInternal.close()


def test_caps_equals_nocaps(driver):

    pass_vis.show(driver)

    appElem = driver.find_element_by_id("app")
    appElem.clear()
    appElem.send_keys("Test site")

    passElem = driver.find_element_by_id("pass")
    passElem.clear()
    passElem.send_keys("Test password")

    caps = driver.find_element_by_id("result").get_attribute("value")

    appElem.clear()
    appElem.send_keys("test site")

    nocaps = driver.find_element_by_id("result").get_attribute("value")

    assert caps == nocaps, "Output with caps and without is different"


# Tests to make sure that hitting enter properly applies
def test_enter_preset(driver):

    appElem = driver.find_element_by_id("app")
    logo = driver.find_element_by_id("logo")
    label = driver.find_element_by_xpath("/html/body/div[2]/div/div[1]/label")

    label.click()
    appElem.clear()
    appElem.send_keys("Appl")
    appElem.send_keys(Keys.ENTER)

    assert appElem.get_attribute("value") == "Apple", "Enter not setting preset name"
    assert getVar(driver, "minLength") == 8, "Enter not setting preset minLength"
    assert getVar(driver, "maxLength") == 32, "Enter not setting preset maxLength"
    # Logo
    assert logo.get_attribute("src") == address+"logos/Apple.svg", "Enter not setting preset logo src"
    assert logo.get_attribute("title") == "Apple", "Enter not setting preset logo title"
    assert logo.get_attribute("alt") == "Apple", "Enter not setting preset logo alt"


# Tests to make sure that query strings presets are loaded properly
def test_qs_preset(driver):

    driver.get(address + "?app=Apple")

    appElem = driver.find_element_by_id("app")
    logo = driver.find_element_by_id("logo")

    assert appElem.get_attribute("value") == "Apple", "Query strings not setting preset name"
    assert getVar(driver, "minLength") == 8, "Query strings not setting preset minLength"
    assert getVar(driver, "maxLength") == 32, "Query strings not setting preset maxLength"

    # Logo
    assert logo.get_attribute("src") == address+"logos/Apple.svg", "Query strings not setting preset logo src"
    assert logo.get_attribute("title") == "Apple", "Query strings not setting preset logo title"
    assert logo.get_attribute("alt") == "Apple", "Query strings not setting preset logo alt"


# Tests to make sure that query strings without presets are loaded properly
def test_qs_no_preset(driver):

    driver.get(address + "?app=apple")

    appElem = driver.find_element_by_id("app")
    logo = driver.find_element_by_id("logo")

    assert appElem.get_attribute("value") == "apple", "Query string incorrectly setting non-preset name"
    assert getVar(driver, "minLength") == getVar(driver, "defaultMinLength"), "Query string incorrectly setting non-preset minLength"
    assert getVar(driver, "maxLength") == getVar(driver, "defaultMaxLength"), "Query string incorrectly setting non-preset maxLength"

    # Logo
    assert logo.get_attribute("src") is None, "Query string incorrectly setting non-preset logo src"
    assert logo.get_attribute("title") == "", "Query string incorrectly setting non-preset logo title"
    assert logo.get_attribute("alt") == "", "Query string incorrectly setting non-preset logo alt"


# def test_all_themes(driver):
