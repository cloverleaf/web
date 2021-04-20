def show(driver):
	if driver.find_element_by_id("result").get_attribute("type") == "password":
		driver.find_element_by_id("resultTogglelever").click()

	return

def hide(driver):
	if driver.find_element_by_id("result").get_attribute("value") == "text":
		driver.find_element_by_id("resultTogglelever").click()

	return
