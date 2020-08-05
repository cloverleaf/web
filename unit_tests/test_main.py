import pytest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.firefox.options import Options
from selenium.common.exceptions import WebDriverException
from meta import pass_vis
from meta import get_var
import json
from urllib.parse import quote
import deep_merge
getVar = get_var.getVar

address = "http://localhost:8080/"
defaultMinLength = 4
defaultMaxLength = 512

options = Options()
options.headless = True

sites = {}
logos = {}
configs = {}
results = {}

with open("../node_modules/cloverleaf/data/sites.json", 'r') as json_file:
    sites = json.load(json_file)

with open("../data/logos.json", 'r') as json_file:
    logos = json.load(json_file)

with open("../node_modules/cloverleaf/unit_tests/configs.json", 'r') as json_file:
    configs = json.load(json_file)

with open("../node_modules/cloverleaf/unit_tests/results.json", 'r') as json_file:
    results = json.load(json_file)

sites = deep_merge.merge(sites, logos)


def status_code(driver, url):
    js = '''
        let callback = arguments[0];
        let xhr = new XMLHttpRequest();
        xhr.open('GET', ''' + "'" + url.replace("'", "\\\'") + "'" + ''', true);
        xhr.onload = function () {
            if (this.readyState === 4) {
                callback(this.status);
            }
        };
        xhr.onerror = function () {
            callback('error');
        };
        xhr.send(null);
    '''

    return driver.execute_async_script(js)


def read_clipboard(driver):

    box = driver.find_element_by_id("paste-box")
    box.send_keys(Keys.CONTROL, "v")
    toreturn = box.get_attribute("value")
    box.clear()
    return toreturn


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
    passElem = driver.find_element_by_id("pass")

    # Add box for reading paste
    driver.execute_script(
        """body = document.querySelector('body');
        element = document.createElement('textarea');
        element.id = "paste-box"
        body.append(element);""")

    for site in sites:

        label.click()
        appElem.clear()
        passElem.clear()
        appElem.send_keys(site)
        appElem.send_keys(Keys.ENTER)

        assert appElem.get_attribute("value") == site, "Enter not setting preset name - Preset: " + site

        if "minLength" in sites[site]:
            assert getVar(driver, "minLength") == sites[site]["minLength"], "Enter not setting preset minLength - Preset: " + site

        if "maxLength" in sites[site]:
            assert getVar(driver, "maxLength") == sites[site]["maxLength"], "Enter not setting preset maxLength - Preset: " + site

        # Logo
        logoURL = ""
        if "logo" in sites[site]:
            logoURL = address + sites[site]["logo"]
        else:
            logoURL = address + "logos/" + site.replace(" ", "%20") + ".svg"
        if "mini" in sites[site]:
            if sites[site]["mini"]:
                logoURL = address + "logos/" + site.replace(" ", "%20") + "-MINI.svg"

        assert logo.get_attribute("src") == logoURL, "Enter not setting preset logo src - Preset: " + site
        assert status_code(driver, logoURL) == 200, "Enter not setting preset logo src (404) - Preset: " + site

        assert logo.get_attribute("title") == site, "Enter not setting preset logo title - Preset: " + site
        assert logo.get_attribute("alt") == site, "Enter not setting preset logo alt - Preset: " + site

        passElem.send_keys(configs["default length"]["password"])

        assert driver.find_element_by_id("result").get_attribute("value") == results["default length"][site]["result"], "Preset password incorrect - Preset: " + site

        # Click the copy button
        driver.find_element_by_id("copy").click()

        assert read_clipboard(driver) == results["default length"][site]["result"], "Copy button not working - Preset: " + site

    # Remove text box used for reading from the clipboard
    driver.execute_script("""let elem = document.getElementById('paste-box');
                          elem.parentNode.removeChild(elem)""")


# Tests to make sure that query strings presets are loaded properly
def test_qs_preset(driver):

    for site in sites:

        driver.get(address + "?app="+quote(site))

        appElem = driver.find_element_by_id("app")
        logo = driver.find_element_by_id("logo")

        assert appElem.get_attribute("value") == site, "Query strings not setting preset name - Preset: " + site

        if "minLength" in sites[site]:
            assert getVar(driver, "minLength") == sites[site]["minLength"], "Query strings not setting preset minLength - Preset: " + site

        if "maxLength" in sites[site]:
            assert getVar(driver, "maxLength") == sites[site]["maxLength"], "Query strings not setting preset maxLength - Preset: " + site

        # Logo
        logoURL = ""
        if "logo" in sites[site]:
            logoURL = address + sites[site]["logo"]
        else:
            logoURL = address + "logos/" + site.replace(" ", "%20") + ".svg"
        if "mini" in sites[site]:
            if sites[site]["mini"]:
                logoURL = address + "logos/" + site.replace(" ", "%20") + "-MINI.svg"

        assert logo.get_attribute("src") == logoURL, "Query strings not setting preset logo src - Preset: " + site
        assert status_code(driver, logoURL) == 200, "Query strings not setting preset logo src (404) - Preset: " + site

        assert logo.get_attribute("title") == site, "Query strings not setting preset logo title - Preset: " + site
        assert logo.get_attribute("alt") == site, "Query strings not setting preset logo alt - Preset: " + site


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


# Tests to make sure passwords generated are the right length
def test_lengths(driver):

    appElem = driver.find_element_by_id("app")
    passElem = driver.find_element_by_id("pass")
    lengthElem = driver.find_element_by_id("length")

    appElem.send_keys("a")
    passElem.send_keys("a")

    for length in range(defaultMinLength, defaultMaxLength+1):

        # lengthElem.clear()
        # lengthElem.send_keys(length)
        driver.execute_script("document.getElementById('length').value = " + str(length))

        driver.execute_script("generate()")

        assert len(driver.find_element_by_id("result").get_attribute("value")) == length
