const API_URL = "http://localhost:3000";


// Hämta alla kurser
export const getCourses = async () => {
  const res = await fetch(`${API_URL}/courses`);
  return res.json();
};


// Hämta en kurs
export const getCourseById = async (id) => {
  const res = await fetch(`${API_URL}/courses/${id}`);
  return res.json();
};


// Lägg till kurs (ADMIN)
export const addCourse = async (course) => {

  const res = await fetch(`${API_URL}/courses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(course)
  });

  return res.json();
};


// Ta bort kurs (ADMIN)
export const deleteCourse = async (id) => {

  await fetch(`${API_URL}/courses/${id}`, {
    method: "DELETE"
  });

};


// Hämta användare
export const getUsers = async () => {
  const res = await fetch(`${API_URL}/users`);
  return res.json();
};


// Hämta bokningar
export const getBookings = async () => {
  const res = await fetch(`${API_URL}/bookings`);
  return res.json();
};


// Skapa bokning
export const createBooking = async (booking) => {

  const res = await fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(booking)
  });

  return res.json();

};