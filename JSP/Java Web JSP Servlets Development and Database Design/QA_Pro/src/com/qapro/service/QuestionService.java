package com.qapro.service;

import java.util.List;

import com.qapro.dao.AnswerDao;
import com.qapro.dao.QuestionDao;
import com.qapro.entity.Answer;
import com.qapro.entity.Question;

public class QuestionService {

	QuestionDao questionDao = new QuestionDao();
	AnswerDao answerDao = new AnswerDao();
	
	public Question getQuestionAndAnswers(Long questionId){
		
		Question question = questionDao.getQuestionById(questionId);
		
		if(question != null){
			List<Answer> answerList = answerDao.getAnswersToQuestion(questionId);
			
			question.setAnswers(answerList);
		}
		
		return question;
	}
	
	public static void main(String args[]){
		QuestionService service = new QuestionService();
		
		Question question = service.getQuestionAndAnswers(1L);
		
		System.out.println(question);
	}
	
}
