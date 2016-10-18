export default {
	// MISC
	FIREBASE: "https://quillconnect.firebaseio.com/",

	// UI FEEDBACK ACTIONS
	DISPLAY_ERROR: "DISPLAY_ERROR",
	DISPLAY_MESSAGE: "DISPLAY_MESSAGE",
	DISMISS_FEEDBACK: "DISMISS_FEEDBACK",

	// AUTH ACTIONS
	ATTEMPTING_LOGIN: "ATTEMPTING_LOGIN",
	LOGIN_USER: "LOGIN_USER",
	LOGOUT: "LOGOUT",

	// AUTH STATES
	LOGGED_IN: "LOGGED_IN",
	ANONYMOUS: "ANONYMOUS",
	AWAITING_AUTH_RESPONSE: "AWAITING_AUTH_RESPONSE",

	// CONCEPT ACTIONS
	RECEIVE_CONCEPTS_DATA: "RECEIVE_CONCEPTS_DATA",
	AWAIT_NEW_CONCEPT_RESPONSE: "AWAIT_NEW_CONCEPT_RESPONSE",
	RECEIVE_NEW_CONCEPT_RESPONSE: "RECEIVE_NEW_CONCEPT_RESPONSE",
	START_CONCEPT_EDIT: "START_CONCEPT_EDIT",
	FINISH_CONCEPT_EDIT: "FINISH_CONCEPT_EDIT",
	SUBMIT_CONCEPT_EDIT: "SUBMIT_CONCEPT_EDIT",
	TOGGLE_NEW_CONCEPT_MODAL: "TOGGLE_NEW_CONCEPT_MODAL",

	// CONCEPT STATES
	EDITING_CONCEPT: "EDITING_CONCEPT",
	SUBMITTING_CONCEPT: "SUBMITTING_CONCEPT",

	// LESSON ACTIONS
	RECEIVE_LESSONS_DATA: "RECEIVE_LESSONS_DATA",
	AWAIT_NEW_LESSON_RESPONSE: "AWAIT_NEW_LESSON_RESPONSE",
	RECEIVE_NEW_LESSON_RESPONSE: "RECEIVE_NEW_LESSON_RESPONSE",
	START_LESSON_EDIT: "START_LESSON_EDIT",
	FINISH_LESSON_EDIT: "FINISH_LESSON_EDIT",
	SUBMIT_LESSON_EDIT: "SUBMIT_LESSON_EDIT",
	TOGGLE_NEW_LESSON_MODAL: "TOGGLE_NEW_LESSON_MODAL",

	// LESSON STATES
	EDITING_LESSON: "EDITING_LESSON",
	SUBMITTING_LESSON: "SUBMITTING_LESSON",

	// QUESTION ACTIONS
	RECEIVE_QUESTIONS_DATA: "RECEIVE_QUESTIONS_DATA",
	AWAIT_NEW_QUESTION_RESPONSE: "AWAIT_NEW_QUESTION_RESPONSE",
	RECEIVE_NEW_QUESTION_RESPONSE: "RECEIVE_NEW_QUESTION_RESPONSE",
	START_QUESTION_EDIT: "START_QUESTION_EDIT",
	FINISH_QUESTION_EDIT: "FINISH_QUESTION_EDIT",
	SUBMIT_QUESTION_EDIT: "SUBMIT_QUESTION_EDIT",
	TOGGLE_NEW_QUESTION_MODAL: "TOGGLE_NEW_QUESTION_MODAL",

	// QUESTION STATES
	EDITING_QUESTION: "EDITING_QUESTION",
	SUBMITTING_QUESTION: "SUBMITTING_QUESTION",

	// QUESTION RESPONSE STATES
	START_RESPONSE_EDIT: "START_RESPONSE_EDIT",
	CANCEL_RESPONSE_EDIT: "CANCEL_RESPONSE_EDIT",
	FINISH_RESPONSE_EDIT: "FINISH_RESPONSE_EDIT",
	SUBMIT_RESPONSE_EDIT: "SUBMIT_RESPONSE_EDIT",
	SUBMITTING_RESPONSE: "SUBMITTING_RESPONSE",
	START_CHILD_RESPONSE_VIEW: "START_CHILD_RESPONSE_VIEW",
	CANCEL_CHILD_RESPONSE_VIEW: "CANCEL_CHILD_RESPONSE_VIEW",
	START_FROM_RESPONSE_VIEW: "START_FROM_RESPONSE_VIEW",
	CANCEL_FROM_RESPONSE_VIEW: "CANCEL_FROM_RESPONSE_VIEW",
	START_TO_RESPONSE_VIEW: "START_TO_RESPONSE_VIEW",
	CANCEL_TO_RESPONSE_VIEW: "CANCEL_TO_RESPONSE_VIEW",
	// PATHWAYS DATA
	RECEIVE_PATHWAYS_DATA: "RECEIVE_PATHWAYS_DATA",
	AWAIT_NEW_PATHWAY_RESPONSE: "AWAIT_NEW_PATHWAY_RESPONSE",
	RECEIVE_NEW_PATHWAY_RESPONSE: "RECEIVE_NEW_PATHWAY_RESPONSE",

	// RESPONSE ACTIONS:
	TOGGLE_EXPAND_SINGLE_RESPONSE:"TOGGLE_EXPAND_SINGLE_RESPONSE",
	COLLAPSE_ALL_RESPONSES:"COLLAPSE_ALL_RESPONSES",
	EXPAND_ALL_RESPONSES:"EXPAND_ALL_RESPONSES",
	TOGGLE_STATUS_FIELD:"TOGGLE_STATUS_FIELD",
	TOGGLE_RESPONSE_SORT:"TOGGLE_RESPONSE_SORT",
	RESET_ALL_FIELDS: "RESET_ALL_FIELDS",

  // QUESTION SELECT ACTIONS:
  QUESTION_SELECT_ADD_QUESTION: "QUESTION_SELECT_ADD_QUESTION",
  QUESTION_SELECT_MODIFY_QUESTION: "QUESTION_SELECT_MODIFY_QUESTION",
  QUESTION_SELECT_UPDATE_TITLE: "QUESTION_SELECT_UPDATE_TITLE",

	FEEDBACK_STRINGS: {
	  punctuationError: "There may be an error. How could you update the punctuation?",
		punctuationAndCaseError: "There may be an error. How could you update the punctuation and capitalization?",
	  typingError: "Try again. There may be a spelling mistake.",
	  caseError: "Proofread your work. There may be a capitalization error.",
	  minLengthError: "Revise your work. Do you have all of the information from the prompt?",
	  maxLengthError: "Revise your work. How could this sentence be shorter and more concise?",
		modifiedWordError: "Revise your work. You may have mixed up a word.",
		additionalWordError: "Revise your work. You may have added an extra word.",
		missingWordError: "Revise your work. You may have left out an important word.",
		whitespaceError: "There may be an error. You may have forgotten a space between two words."
	},

	ERROR_TYPES: ['typingError', 'caseError', 'punctuationError', 'punctuationAndCaseError', 'minLengthError', 'maxLengthError', "modifiedWordError", "additionalWordError", "missingWordError", "whitespaceError"],

	// CONCEPTS FEEDBACK ACTIONS
	RECEIVE_CONCEPTS_FEEDBACK_DATA: "RECEIVE_CONCEPTS_FEEDBACK_DATA",
	AWAIT_NEW_CONCEPTS_FEEDBACK_RESPONSE: "AWAIT_NEW_CONCEPTS_FEEDBACK_RESPONSE",
	RECEIVE_NEW_CONCEPTS_FEEDBACK_RESPONSE: "RECEIVE_NEW_CONCEPTS_FEEDBACK_RESPONSE",
	START_CONCEPTS_FEEDBACK_EDIT: "START_CONCEPTS_FEEDBACK_EDIT",
	FINISH_CONCEPTS_FEEDBACK_EDIT: "FINISH_CONCEPTS_FEEDBACK_EDIT",
	SUBMIT_CONCEPTS_FEEDBACK_EDIT: "SUBMIT_CONCEPTS_FEEDBACK_EDIT",
	TOGGLE_NEW_CONCEPTS_FEEDBACK_MODAL: "TOGGLE_NEW_CONCEPTS_FEEDBACK_MODAL",

	// ITEM LEVEL ACTIONS
	RECEIVE_ITEM_LEVELS_DATA: "RECEIVE_ITEM_LEVELS_DATA",
	AWAIT_NEW_ITEM_LEVEL_RESPONSE: "AWAIT_NEW_ITEM_LEVEL_RESPONSE",
	RECEIVE_NEW_ITEM_LEVEL_RESPONSE: "RECEIVE_NEW_ITEM_LEVEL_RESPONSE",
	START_ITEM_LEVEL_EDIT: "START_ITEM_LEVEL_EDIT",
	FINISH_ITEM_LEVEL_EDIT: "FINISH_ITEM_LEVEL_EDIT",
	SUBMIT_ITEM_LEVEL_EDIT: "SUBMIT_ITEM_LEVEL_EDIT",
	TOGGLE_NEW_ITEM_LEVEL_MODAL: "TOGGLE_NEW_ITEM_LEVEL_MODAL",

	// ITEM LEVEL STATES
	EDITING_ITEM_LEVEL: "EDITING_ITEM_LEVEL",
	SUBMITTING_ITEM_LEVEL: "SUBMITTING_ITEM_LEVEL",

	// SENTENCE_FRAGMENT ACTIONS
	RECEIVE_SENTENCE_FRAGMENTS_DATA: "RECEIVE_SENTENCE_FRAGMENTS_DATA",
	AWAIT_NEW_SENTENCE_FRAGMENT_RESPONSE: "AWAIT_NEW_SENTENCE_FRAGMENT_RESPONSE",
	RECEIVE_NEW_SENTENCE_FRAGMENT_RESPONSE: "RECEIVE_NEW_SENTENCE_FRAGMENT_RESPONSE",
	START_SENTENCE_FRAGMENT_EDIT: "START_SENTENCE_FRAGMENT_EDIT",
	FINISH_SENTENCE_FRAGMENT_EDIT: "FINISH_SENTENCE_FRAGMENT_EDIT",
	SUBMIT_SENTENCE_FRAGMENT_EDIT: "SUBMIT_SENTENCE_FRAGMENT_EDIT",
	TOGGLE_NEW_SENTENCE_FRAGMENT_MODAL: "TOGGLE_NEW_SENTENCE_FRAGMENT_MODAL",

	// SENTENCE_FRAGMENT STATES
	EDITING_SENTENCE_FRAGMENT: "EDITING_SENTENCE_FRAGMENT",
	SUBMITTING_SENTENCE_FRAGMENT: "SUBMITTING_SENTENCE_FRAGMENT",

}
