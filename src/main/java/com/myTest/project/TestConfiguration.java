package com.myTest.project;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class TestConfiguration {
	private static TestConfiguration instance;
	private static final String CONFIG_FILE = "config.properties";
	private final Properties properties;

	public static TestConfiguration getInstance() {
		TestConfiguration localInstance = instance;
		if (localInstance == null) {
			instance = localInstance = new TestConfiguration();
		}
		return localInstance;
	}

	private TestConfiguration() {
		properties = new Properties();
		getPropertiesFromFile();
	}

	private void getPropertiesFromFile() {
		InputStream inputStream = Thread.currentThread().getContextClassLoader().getResourceAsStream(CONFIG_FILE);
		if (inputStream != null) {
			try {
				properties.load(inputStream);
			}
			catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	public String getDbConnectionUrl() {
		return properties.getProperty("db.connection.url");
	}

	public String getDbConnectionPort() {
		return properties.getProperty("db.connection.port");
	}

	public String getDbName() {
		return properties.getProperty("db.name");
	}

	public String getDbUser() {
		return properties.getProperty("db.user");
	}

	public String getDbPassword() {
		return properties.getProperty("db.password");
	}

	public String getDriverProtocol() {
		return properties.getProperty("driver.protocol");
	}

	public String getDriverPort() {
		return properties.getProperty("driver.port");
	}

	public String getDriverUrl() {
		return properties.getProperty("driver.url");
	}

	public String getBaseUrl() {
		return getDriverProtocol() + getDriverUrl() + ":" + getDriverPort() + "/login";
	}

	public String getAdminEmail() {
		return properties.getProperty("user.admin.email");
	}

	public String getTestUserPassword() {
		return properties.getProperty("user.pass");
	}

	public String getSupervisorEmail() {
		return properties.getProperty("user.supervisor.email");
	}

	public String getInterviewerEmail() {
		return properties.getProperty("user.interviewer.email");
	}

	public int getTimeoutInSeconds() {
		return Integer.valueOf(properties.getProperty("timeout.in.seconds"));
	}

	public int getTimeoutSleep() {
		return Integer.valueOf(properties.getProperty("timeout.sleep"));
	}

	public String getChromeDriverPath() {
		return properties.getProperty("chrome.driver.path");
	}
}
