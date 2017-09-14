"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasUnlockedPublished = exports.hasUnlockedPublished = function hasUnlockedPublished(publishedLessons) {
  return publishedLessons > 0;
};

var hasUnlockedCoursePublished = exports.hasUnlockedCoursePublished = function hasUnlockedCoursePublished(publishedCourses) {
  return publishedCourses > 0;
};

var selfReviewThreshold = exports.selfReviewThreshold = 12;

var hasUnlockedSelfReview = exports.hasUnlockedSelfReview = function hasUnlockedSelfReview(publishedLessons) {
  return publishedLessons >= selfReviewThreshold;
};