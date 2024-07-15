import ClassRoom from './0-classroom';

/**
 * An array ofspecififc number
 * @returns array with a new classroom
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
