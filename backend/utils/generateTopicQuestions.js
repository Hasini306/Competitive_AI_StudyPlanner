const questionBank = require('../data/topicQuestions');

/**
 * Utility to fetch topic-based questions
 * @param {string} topic - The topic name
 * @param {string} testType - 'task' | 'mock'
 * @returns {Array} List of 10 questions
 */
const getTopicQuestions = (topic, testType) => {
  if (!topic || !questionBank[topic]) {
    throw new Error('No topic-based questions found for this topic');
  }

  const topicData = questionBank[topic];
  let questionsPool = [];

  if (testType === 'mock' || testType === 'mocktest') {
    questionsPool = topicData.mockQuestions;
  } else {
    questionsPool = topicData.taskQuestions;
  }

  if (!questionsPool || questionsPool.length === 0) {
    throw new Error('No topic-based questions found for this topic');
  }

  // Shuffle and return exactly 10 questions (or max available)
  const shuffled = [...questionsPool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10);
};

module.exports = {
  getTopicQuestions
};
