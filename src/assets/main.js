$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/mariealexie.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed);

    }
  });

  function addCourses(courses) {

    var $badges = $('#badges');

    courses.forEach(function(courses) {
      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($course);

      $('<img />', {
        src: course.badge
      }).appendTo($course);

      $('<a />', {
        'class': '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($course);

    })
  }

});
