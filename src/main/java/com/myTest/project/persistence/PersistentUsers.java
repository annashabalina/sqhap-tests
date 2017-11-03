package com.myTest.project.persistence;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.myTest.project.DBConnection;
import com.myTest.project.TestConfiguration;

public class PersistentUsers {
	private static DBConnection dbConnection;
	private static final TestConfiguration instance = TestConfiguration.getInstance();
	private static final String password = instance.getTestUserPassword();
	private static final String adminEmail = instance.getAdminEmail();
	private static final String supervisorEmail = instance.getSupervisorEmail();
	private static final String interviewerEmail = instance.getInterviewerEmail();

	public void setUp() {
		dbConnection = new DBConnection();
		insertAdminUserIntoUsers();
		insertCandidateIntoCandidates();
		insertCandidateIntoCandidateStates();
		insertSupervisorIntoUsers();
		insertInterviewerIntoUsers();
	}

	public void tearDown() {
		deleteCandidateFromCandidateStates();
		deleteCandidateFromCandidates();
		deleteFeedbacks();
		deleteAdminFromUsers();
		deleteSupervisorFromUsers();
		deleteInterviewerFromUsers();
	}

	private void insertAdminUserIntoUsers() {
		dbConnection.executeQuery("insert into users(name, email, password, active, deleted, english, role_id, created)\n"
				+ "values('Test Admin', '" + adminEmail + "', '" + password + "', 'true', 'false', 'true', 1, CURRENT_TIMESTAMP(5));");
	}

	private void deleteAdminFromUsers() {
		dbConnection.executeQuery("delete from users where name = 'Test Admin';");
	}

	private void insertSupervisorIntoUsers() {
		dbConnection.executeQuery("insert into users(name, email, password, active, deleted, english,role_id, created)\n"
				+ "values('Test Supervisor' , '" + supervisorEmail + "', '" + password
				+ "', 'true', 'false', 'true', 2, CURRENT_TIMESTAMP(5));");
	}

	private void deleteSupervisorFromUsers() {
		dbConnection.executeQuery("delete from users where name = 'Test Supervisor'");
	}

	private void insertInterviewerIntoUsers() {
		dbConnection.executeQuery("insert into users(name, email, password, active, deleted, english,role_id, created)\n"
				+ "values('Test Interviewer', '" + interviewerEmail + "', '" + password
				+ "' , 'true', 'false' ,'true', 3, CURRENT_TIMESTAMP(5));");
	}

	private void deleteInterviewerFromUsers() {
		dbConnection.executeQuery("delete from users where name = 'Test Interviewer'");
	}

	private int getAdminId() {
		ResultSet result = dbConnection.selectUser("Test Admin");
		int id = 0;
		try {
			while (result.next()) {
				id = Integer.valueOf(result.getString("id"));
			}
		}
		catch (SQLException e) {
			System.out.println("could not get admin's id from");
			e.printStackTrace();
		}
		return id;
	}

	private void insertCandidateIntoCandidates() {
		dbConnection.executeQuery("insert into candidates(name, internal_mobility, cv_path, owner, created)\n"
				+ "values('Test Candidate', 'false', 'cv.txt'," + getAdminId() + ", CURRENT_TIMESTAMP(5));");
	}

	private int getCandidateId() {
		ResultSet result = dbConnection.selectCandidate("Test Candidate");
		int id = 0;
		try {
			while (result.next()) {
				id = Integer.valueOf(result.getString("id"));
			}
		}
		catch (SQLException e) {
			System.out.println("Could not get Test Candidate's id from ");
			e.printStackTrace();
		}
		return id;
	}

	private void insertCandidateIntoCandidateStates() {
		dbConnection.executeQuery("insert into candidate_states(candidate_id, stage_id, status_id, assignee1, date)\n"
				+ "values(" + getCandidateId() + ", 1, 2," + getAdminId() + ", CURRENT_TIMESTAMP(5));");
	}

	private void deleteCandidateFromCandidates() {
		dbConnection.executeQuery("delete from candidates where name = 'Test Candidate'");
	}

	private void deleteCandidateFromCandidateStates() {
		dbConnection.executeQuery("delete from candidate_states where candidate_id = " + getCandidateId());
	}

	private void deleteFeedbacks() {
		dbConnection.executeQuery("delete from feedbacks where details = 'ok';");
	}
}
