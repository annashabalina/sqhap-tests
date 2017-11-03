package com.myTest.project;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * Hello world!
 */
public class DBConnection {
	private static String url =
			TestConfiguration.getInstance().getDbConnectionUrl() + ":" + TestConfiguration.getInstance().getDbConnectionPort() + "/"
					+ TestConfiguration.getInstance().getDbName();
	private static String user = TestConfiguration.getInstance().getDbUser();
	private static String password = TestConfiguration.getInstance().getDbPassword();
	private static Connection connection = null;

	private static Connection connect() {
		try {
			connection = DriverManager.getConnection(url, user, password);
			System.out.println("Connected successfully");
		}
		catch (SQLException e) {
			System.out.println(e.getMessage());
		}
		return connection;
	}

	public void executeQuery(String query) {
		Statement statement;
		try {
			if (connection == null) {
				connect();
			}
			statement = connection.createStatement();
			statement.executeUpdate(query);
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
	}

	private static ResultSet select(String whereCondition, String tableName, String columnName) {
		Statement statement;
		ResultSet result = null;
		try {
			if (connection == null) {
				connect();
			}
			statement = connection.createStatement();
			result = statement.executeQuery("select * from " + tableName + " where " + columnName + " = '" + whereCondition + "';");
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
		return result;
	}

	public static ResultSet selectUser(String userToSelect) {
		ResultSet result = select(userToSelect, "users", "name");
		return result;
	}

	public static ResultSet selectCandidate(String candidateName) {
		return select(candidateName, "candidates", "name");
	}

}
