
export default class HolbertonCourse {
  /**
   * Creates a new a link in holberton
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Name of the course
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * The length of the course will be set.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * The names of student.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the name.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
