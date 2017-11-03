package com.myTest.project.steps;

import java.util.List;

import com.myTest.project.pages.FeedbackForm;

import cucumber.api.java.en.And;

public class FeedbackFormStepDefs {
	private FeedbackForm form = new FeedbackForm(new BaseStepDef().getDriver());

	@And("^on pop up I write a \"([^\"]*)\"$")
	public void onPopUpIWriteA(String feedback) throws Throwable {
		if (!(feedback.equals(""))) {
			form.leaveFeedback(feedback);
		} else {
			form.verifyFeedbackPresent();
		}

	}

	@And("^select \"([^\"]*)\" from Decision section$")
	public void selectFromDecisionSection(String decision) throws Throwable {
		if (!(decision.equals(""))) {
			form.selectDecision(decision);
		} else {
			form.verifyDecisionMade();
		}
	}

	@And("^on pop up a \"([^\"]*)\" is selected$")
	public void onPopUpAIsSelected(String tab) throws Throwable {
		form.verifyTabSelected(tab);
	}

	@And("^select \"([^\"]*)\"$")
	public void selectAnAnd(List<String> interviewers) throws Throwable {
		form.selectInterviewers(interviewers);
	}
}
