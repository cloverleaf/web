def getVar(driver, var):
	return driver.execute_script("return getVar('"+var+"')")