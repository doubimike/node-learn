var kclass = require('./klass.js')


// kclass.add('mike', ['a', 'b'])


exports.add = function(klasses) {
	klasses.forEach(function(item, index) {
		var _klass = item
		var teacherName = _klass.teacherName
		var students = _klass.students
		kclass.add(teacherName, students)
	})
}